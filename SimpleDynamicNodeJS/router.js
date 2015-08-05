var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");
var commonHeaders = {'Content-Type': 'text/html'};

// Handle the HTTP route GET / and POST / i.e. Home

function home(request, response) {
    // if url === "/" $$ GET
  if(request.url === "/") {
    if(request.method.toLowerCase() === "get") {
    // Show the search field
    response.writeHead(200, commonHeaders);
    renderer.view("header", {}, response);
    renderer.view("search", {}, response);
    renderer.view("footer", {}, response);
    response.end();
    } else {
      // if URL is === "/" && POST
        // get the post data from body
        request.on("data", function(postBody) {
      // extract the username
        var query = querystring.parse(postBody.toString());
        response.writeHead(303, {"Location": "/" + query.username});
        response.end();
        });
        
        // redirect to /:username
    }
  } 

    

}


// Handle the HTTP route for get /:username i.e. /nicolasqueen

function user(request, response) {
    // if URL == "/..."
    var username = request.url.replace("/", "");
    if (username.length > 0) {
      response.writeHead(200, commonHeaders);
      renderer.view("header", {}, response);
      
      // get JSON from Treehouse
      var studentProfile = new Profile(username);
      
      // on "end"
      studentProfile.on("end", function(profileJSON) {
        // show profile
        
        // Store the calues which we need
        var values = {
          avatarUrl: profileJSON.gravatar_url,
          username: profileJSON.profile_name,
          badges: profileJSON.badges.length,
          javascriptPoints: profileJSON.points.JavaScript
        }
        // Simple response
        renderer.view("profile", values, response);
        renderer.view("footer", {}, response);
        response.end();
      });
      // on "error"
      studentProfile.on("error", function(error) {
        // show error
          renderer.view("error", {errorMessage: error.message}, response);
          renderer.view("search", {}, response);
          renderer.view("footer", {}, response);
          response.end();
      });
      
      
  }      
}

module.exports.home = home;
module.exports.user = user;
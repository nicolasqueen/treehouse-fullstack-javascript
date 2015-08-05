var fs = require('fs');

function mergeValues(values, content) {
  // Cycle over the keys
  for(var key in values) {
    content = content.replace("{{" + key + "}}", values[key]);
  }
    // Replace all {{key}} with the value from the values object
  return content  
  // return merged content  
}

function view(templateName, values, response) {
  // Read from the template file
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});

  // Insert values into the content
    fileContents = mergeValues(values, fileContents);
    response.write(fileContents);
  
  // Write out to the response
}

module.exports.view = view;
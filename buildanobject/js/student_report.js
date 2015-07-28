var message = '';
var search;
var student;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport( student ) {
  var report  = "<h2>Student name: " + student.name + "</h2>";
  report += "<p>Current track: " + student.track + "</p>"
  report += "<p>Current achievements total: " + student.achievements + "</p>"
  report += "<p>Current points total: " + student.points + "</p>"
  return report;
}



while ( true ) {
  search = prompt('Search student records: Type a name [Jody] or type "quit" to end.');
  if (search === null || search.toLowerCase() === "quit" ) {
    break;
  }
  for ( var i = 0; i < students.length; i += 1 ) {
    student = students[i];
    if ( student.name === search ) {
      message = getStudentReport( student );
      found = true;
      print(message);
    } 
  }
}
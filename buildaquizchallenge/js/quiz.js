var quizQA = [
  ["What year did Fry get locked into the cryogenic freezer?", "2000"],
  ["What job is Zoidberg horrible at?", "doctor"],
  ["Who is Fry's best friend?", "bender"],
  ["What is Fry's dog's name?", 'seymour'],
  ["Who is the most amazing toad ever?", "hypnotoad"]
];

function print(message) {
  document.write(message);
}

var guessCorrect = 0;
var guessIncorrect = 0;
var html;
var question;
var answer;
var response;
var correct = [];
var incorrect = [];

function buildList (arr) {
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

for (var i = 0; i < quizQA.length; i++ ) {
  question = quizQA[i][0];
  answer = quizQA[i][1];
  response = prompt(question);
  
  if ( response.toLowerCase() === answer ) {
    guessCorrect += 1;
    correct.push(question);
  } else {
    guessIncorrect += 1;
    incorrect.push(question);
  }
}

console.log(correct);

html = "<h1>You got these right!</h1>";
html += buildList(correct);
html += "<h1>You got these wrong!</h1>";
html += buildList(incorrect);
print(html);

if ( guessCorrect >= 3) {
  print("<h1>Great job! You got " + guessCorrect + " right and " + guessIncorrect + " questions wrong.</h1>")
} else {
  print("<h1>On no! You got " + guessCorrect + " right and " + guessIncorrect + " wrong. You should go watch more Futurama!</h1>")
}
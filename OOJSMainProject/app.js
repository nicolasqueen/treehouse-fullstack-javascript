// Create Questions
var questions = [
  new Question("Who is Fry's best friend?", [ "Bender", "Hypnotoad" ], "Bender"),
  new Question("What year was Fry cryogenically frozen?", [ "1999", "2000" ], "2000")
  ];
  
// Create Quiz
var quiz = new Quiz(questions);

// Display Quiz
QuizUI.displayNext();
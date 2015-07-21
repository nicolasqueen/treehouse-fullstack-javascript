function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

var counter = 0;
while (counter < 10000 ) {
  var randNum = randomNumber(6);
  document.write(randNum + ' ');
  counter += 1;
}
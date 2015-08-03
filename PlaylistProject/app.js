var playlist = new Playlist();

var whoCanItBeNow = new Song("Who Can It Be Now?", "Men at Work", "3:27");
var downUnder = new Song("Down Under", "Men at Work", "3:41");

playlist.add(whoCanItBeNow);
playlist.add(downUnder);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playlistElement);
}
var nextButton = document.getElementById("next");
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
}
var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}
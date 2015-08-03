function Playlist() {
  this.songs = [];
  this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song) {
  this.songs.push(song);
};

Playlist.prototype.play = function() {
  var currentSong = this.songs[this.nowPlayingIndex];
  currentSong.play();
};

Playlist.prototype.stop = function(){
  var currentSong = this.songs[this.nowPlayingIndex];
  currentSong.stop();
};

Playlist.prototype.next = function() {
  this.stop();
  this.nowPlayingIndex++;
  if(this.nowPlayingIndex === this.songs.length) {
    this.nowPlayingIndex = 0;
  }
  this.play();
};

Playlist.prototype.renderInElement = function(list) {
  list.innerHTML = "";
  for(var i=0; i < this.songs.length; i++) {
    list.innerHTML += this.songs[i].toHTML();
  }
};
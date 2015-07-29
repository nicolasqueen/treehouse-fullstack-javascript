var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i < employees.length; i+= 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
    statusHTML += employees[i].name;
    statusHTML += '</li>';
    }
  statusHTML += '</ul>';
  document.getElementById('employeeList').innerHTML = statusHTML;
  }

};

xhr.open('GET', 'data/employees.json');
xhr.send();

var roomsXhr = new XMLHttpRequest();
roomsXhr.onreadystatechange = function () {
  if(roomsXhr.readyState === 4) {
    var rooms = JSON.parse(roomsXhr.responseText);
    var HTML = '<ul class="rooms">';
    for (var i=0; i < rooms.length; i++) {
      if (rooms[i].available === true) {
        HTML += '<li class="empty">';
      } else {
        HTML += '<li class="full">';
      }
    HTML += rooms[i].room;
    HTML += '</li>';
    }
  HTML += '</ul>';
  document.getElementById('roomList').innerHTML = HTML;
  }
};

roomsXhr.open('GET', 'data/rooms.json');
roomsXhr.send();
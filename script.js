
let RoomAEl=document.getElementById("room-a");
let RoomBEl=document.getElementById("room-b");
let RoomCEl=document.getElementById("room-c");
let Room_messageEL=document.getElementById("room-message")
let roomsEl=document.getElementById("rooms")

function hideRooms() {
    RoomAEl.style.display="none";
    RoomBEl.style.display="none";
    RoomCEl.style.display="none";
}


function backToRooms() {
    hideRooms();
    Room_messageEL.style.display="block"
    roomsEl.scrollIntoView()
}

function showRoom(room) {
  hideRooms();
  room.style.display = "block";
  Room_messageEL.style.display = "none";
  room.scrollIntoView();
}

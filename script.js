
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
function Room_A(){
    hideRooms()
    RoomAEl.style.display="block";
    Room_messageEL.style.display="none";
    RoomAEl.scrollIntoView();
  
}
function Room_B() {
    hideRooms()
    RoomBEl.style.display="block";
    Room_messageEL.style.display="none";
    RoomBEl.scrollIntoView();
}
function Room_C(){
    hideRooms()
    RoomCEl.style.display="block";
    Room_messageEL.style.display="none";
    RoomCEl.scrollIntoView();
}

function backToRooms() {
    hideRooms();
    Room_messageEL.style.display="block"
    roomsEl.scrollIntoView()
}

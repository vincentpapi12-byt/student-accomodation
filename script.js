
let RoomAEl=document.getElementById("room-a");
let RoomBEl=document.getElementById("room-b");
let RoomCEl=document.getElementById("room-c");
let Room_messageEL=document.getElementById("room-message")
let roomsEl=document.getElementById("rooms")
const typingHeading = document.querySelector(".typing-heading")

const observer = new IntersectionObserver((entries) => {
     if (entries[0].isIntersecting) {
          typingHeading.classList.add("typing-active")
    }
})
observer.observe(typingHeading)

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


function bookRoom(roomName) {
    let message = `Hello, I am interested in booking ${roomName} at Radzilani Residence.`;

    let whatsappURL = `https://wa.me/27712014121?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}

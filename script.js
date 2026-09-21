
let RoomAEl=document.getElementById("room-a");
let RoomBEl=document.getElementById("room-b");
let RoomCEl=document.getElementById("room-c");
let Room_messageEL=document.getElementById("room-message")
let roomsEl=document.getElementById("rooms")
const typingHeading = document.querySelector(".typing-heading")
const navLinks = document.querySelectorAll("nav a");

const sections = document.querySelectorAll(
 "#header-sect, #offer, #about, #rooms, #rules, #contacts"
);

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

const revealSections = document.querySelectorAll(".reveal-section");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
        }

    });

});

revealSections.forEach((section) => {
    revealObserver.observe(section);
});


const navObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
     
            navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${entry.target.id}`) {
        link.classList.add("active");
    }
});
        }

    });

});

sections.forEach((section) => {
    navObserver.observe(section);
});
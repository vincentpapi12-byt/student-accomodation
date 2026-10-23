
const typingHeading = document.querySelector(".typing-heading")
const navLinks = document.querySelectorAll("nav a");

const sections = document.querySelectorAll(
 "#header-sect, #offer, #about, #rooms, #rules, #contacts"
);



function bookRoom(roomName, price) {
    let message = `Hello, I am interested in ${roomName} at Radzilani Residence, listed at R${price} per month. Is it still available? I would also like to arrange a viewing. Thank you.`;

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


//-------------room to view-------------

const roomSections = document.querySelectorAll(".room-reveal");

const roomObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("room-visible");
        }

    });

}, {
    threshold: 0.2
});


roomSections.forEach((room) => {
    roomObserver.observe(room);
});



const roomData = [
    {
        id: "room-01",
        name: "Room A",
        image: "Room A.jpg",
        price: 3500,
        status: "confirm",
        facilities: ["Contact us to confirm facilities"]
    },
    {
        id: "room-02",
        name: "Room B",
        image: "Room B.jpg",
        price: 4000,
        status: "confirm",
        facilities: ["Contact us to confirm facilities"]
    },
    {
        id: "room-03",
        name: "Room C",
        image: "Room C.jpg",
        price: 2500,
        status: "confirm",
        facilities: ["Contact us to confirm facilities"]
    }
];

const roomGallery = document.getElementById("room-gallery");
const roomDetails = document.getElementById("room-details");

function displayRooms(filter = "all") {
    const filteredRooms = roomData.filter(room => {
        if (filter === "all") return true;
        return room.status === filter;
    });

    roomGallery.innerHTML = filteredRooms.map(room => `
        <article class="room-card">
            <img
                src="${room.image}"
                alt="Illustrative bedroom image for ${room.name}"
                loading="lazy"
            >

            <div class="room-card-content">
                <p class="room-status">Availability to be confirmed</p>
                <h3>${room.name}</h3>
                <p class="room-price">
                    R${room.price.toLocaleString("en-ZA")}
                    <span>/ month</span>
                </p>

                <button
                    type="button"
                    class="view-room-btn"
                    data-room-id="${room.id}"
                >
                    View Details
                </button>
            </div>
        </article>
    `).join("");
}

function displayRoomDetails(roomId) {
    const room = roomData.find(item => item.id === roomId);

    if (!room) return;

    roomDetails.innerHTML = `
        <button type="button" id="close-room-details">
            ← Back to rooms
        </button>

        <img
            src="${room.image}"
            alt="Illustrative bedroom image for ${room.name}"
            class="room-detail-image"
        >

        <h3>${room.name}</h3>

        <p>
            <strong>Price:</strong>
            R${room.price.toLocaleString("en-ZA")} per month
        </p>

        <p>
            <strong>Availability:</strong>
            Please contact us to confirm.
        </p>

        <h4>Facilities</h4>
        <ul>
            ${room.facilities.map(item => `<li>${item}</li>`).join("")}
        </ul>

        <button type="button" id="enquire-room">
            Enquire on WhatsApp
        </button>
    `;

    roomDetails.hidden = false;
    roomDetails.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    document.getElementById("close-room-details")
        .addEventListener("click", () => {
            roomDetails.hidden = true;
            document.getElementById("rooms").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });

    document.getElementById("enquire-room")
        .addEventListener("click", () => {
            bookRoom(room.name, room.price);
        });
}

roomGallery.addEventListener("click", event => {
    const button = event.target.closest(".view-room-btn");

    if (!button) return;

    displayRoomDetails(button.dataset.roomId);
});

document.querySelectorAll(".room-filter").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".room-filter").forEach(filterButton => {
            filterButton.classList.remove("active-filter");
        });

        button.classList.add("active-filter");
        displayRooms(button.dataset.filter);
    });
});

displayRooms();

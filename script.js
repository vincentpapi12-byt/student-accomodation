
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
        facilities: []
    },
    {
        id: "room-02",
        name: "Room B",
        image: "Room B.jpg",
        price: 4000,
        status: "confirm",
        facilities: []
    },
    {
        id: "room-03",
        name: "Room C",
        image: "Room C.jpg",
        price: 2500,
        status: "confirm",
        facilities: []
    },
    {
        id: "room-04",
        name: "Room 04",
        image: "",
        price: null,
        status: "confirm",
        facilities: []
    },
    {
        id: "room-05",
        name: "Room 05",
        image: "",
        price: null,
        status: "confirm",
        facilities: []
    },
    {
        id: "room-06",
        name: "Room 06",
        image: "",
        price: null,
        status: "confirm",
        facilities: []
    },
    {
        id: "room-07",
        name: "Room 07",
        image: "",
        price: null,
        status: "confirm",
        facilities: []
    },
    {
        id: "room-08",
        name: "Room 08",
        image: "",
        price: null,
        status: "confirm",
        facilities: []
    },
    {
        id: "room-09",
        name: "Room 09",
        image: "",
        price: null,
        status: "confirm",
        facilities: []
    },
    {
        id: "room-10",
        name: "Room 10",
        image: "",
        price: null,
        status: "confirm",
        facilities: []
    },
    {
        id: "room-11",
        name: "Room 11",
        image: "",
        price: null,
        status: "confirm",
        facilities: []
    },
    {
        id: "room-12",
        name: "Room 12",
        image: "",
        price: null,
        status: "confirm",
        facilities: []
    },
    {
        id: "room-13",
        name: "Room 13",
        image: "",
        price: null,
        status: "confirm",
        facilities: []
    },
    {
        id: "room-14",
        name: "Room 14",
        image: "",
        price: null,
        status: "confirm",
        facilities: []
    },
    {
        id: "room-15",
        name: "Room 15",
        image: "",
        price: null,
        status: "confirm",
        facilities: []
    },
    {
        id: "room-16",
        name: "Room 16",
        image: "",
        price: null,
        status: "confirm",
        facilities: []
    },
    {
        id: "room-17",
        name: "Room 17",
        image: "",
        price: null,
        status: "confirm",
        facilities: []
    },
    {
        id: "room-18",
        name: "Room 18",
        image: "",
        price: null,
        status: "confirm",
        facilities: []
    },
    {
        id: "room-19",
        name: "Room 19",
        image: "",
        price: null,
        status: "confirm",
        facilities: []
    }
];


const roomGallery = document.getElementById("room-gallery");
const roomDetails = document.getElementById("room-details");
const toggleOtherRooms = document.getElementById("toggle-other-rooms");
const extraRoomGallery = document.getElementById("extra-room-gallery");
let showOtherRooms = false;

console.log("Room gallery found:", roomGallery);
console.log("Room details found:", roomDetails);
function displayRooms(filter = "all") {
    const filteredRooms = filter === "all"
        ? roomData
        : roomData.filter(room => room.status === filter);

    const featuredRooms = filteredRooms.slice(0, 3);
    const additionalRooms = filteredRooms.slice(3);
  
   roomGallery.innerHTML = featuredRooms.map(room => {
     
       return `
      <article class="room-card">
           ${room.image
    ? `<img
               src="${room.image}"
               alt="Bedroom for ${room.name}"
               loading="lazy"
           >`
           : `<div class="room-image-placeholder">
               Photo coming soon
           </div>`
       }

            <div class="room-card-content">
             <p class="room-status">
                ${room.status === "available"
                    ? "Available"
                    : room.status === "unavailable"
                        ? "Currently unavailable"
                        : "Availability to be confirmed"}
            </p>
                   <h3>${room.name}</h3>
                <p class="room-price">
                  ${room.price !== null
                      ? `R${room.price.toLocaleString("en-ZA")}
                         <span>/ month</span>`
                      : `<span>Price to be confirmed</span>`
                  }
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
       `;
}).join("");

extraRoomGallery.innerHTML = (showOtherRooms || filter !== "all")
    ? additionalRooms.map(room => `
        <article class="room-card compact-room">
            ${room.image
                ? `<img src="${room.image}" alt="Bedroom for ${room.name}" loading="lazy">`
                : `<div class="room-image-placeholder">Photo coming soon</div>`
            }

            <div class="room-card-content">
                <p class="room-status">
                    ${room.status === "available"
                        ? "Available"
                        : room.status === "unavailable"
                            ? "Currently unavailable"
                            : "Availability to be confirmed"
                    }
                </p>

                <h3>${room.name}</h3>

                <p class="room-price">
                    ${room.price !== null
                        ? `R${room.price.toLocaleString("en-ZA")} <span>/ month</span>`
                        : `<span>Price to be confirmed</span>`
                    }
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
    `).join("")
    : "";

 toggleOtherRooms.style.display =
    filter === "all" ? "inline-block" : "none";
}

function displayRoomDetails(roomId) {
    const room = roomData.find(item => item.id === roomId);
            console.log("Room found:", room);
    if (!room) return;
          console.log("About to display room details");
          
    roomDetails.innerHTML = `
        <button type="button" id="close-room-details">
            ← Back to rooms
        </button>

        
        ${room.image
            ? `<img
                src="${room.image}"
                alt="Bedroom for ${room.name}"
                class="room-detail-image"
            >`
            : `<div class="room-image-placeholder">
                Photo coming soon
            </div>`
        }


        <h3>${room.name}</h3>

        <p>
    <strong>Price:</strong>
    ${room.price !== null
        ? `R${room.price.toLocaleString("en-ZA")} per month`
        : "Price to be confirmed"}
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
        const priceText = room.price !== null
            ? `R${room.price.toLocaleString("en-ZA")} per month`
            : "price to be confirmed";

       const message = `Hello! I am interested in ${room.name} at Radzilani Residence.

Monthly price: ${priceText}

Could you please confirm whether this room is currently available? I would also like to know more about the room and arrange a viewing if possible.

Thank you!`;

        const whatsappURL =
            `https://wa.me/27712014121?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");
    });
}

function handleRoomClick(event) {
    const button = event.target.closest(".view-room-btn");

    if (!button) return;

    console.log("Clicked room ID:", button.dataset.roomId);

    displayRoomDetails(button.dataset.roomId);
}

roomGallery.addEventListener("click", handleRoomClick);
extraRoomGallery.addEventListener("click", handleRoomClick);

document.querySelectorAll(".room-filter").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".room-filter").forEach(filterButton => {
            filterButton.classList.remove("active-filter");
        });

        button.classList.add("active-filter");
        displayRooms(button.dataset.filter);
    });
});

toggleOtherRooms.addEventListener("click", () => {
    showOtherRooms = !showOtherRooms;

    toggleOtherRooms.textContent = showOtherRooms
        ? "Show fewer rooms"
        : "Explore other rooms";

    displayRooms();
});

displayRooms();


const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");
const sidebarLinks = document.getElementById("sidebar-links");

menuToggle.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("mobile-open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

sidebarLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        sidebar.classList.remove("mobile-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
    });
});

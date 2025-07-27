window.addEventListener("DOMContentLoaded", () => {
  const dot = document.querySelector(".cursor-dot");
  const circle = document.querySelector(".cursor-circle");

  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    dot.style.transform = `translate(${x}px, ${y}px)`;
    circle.style.transform = `translate(${x}px, ${y}px)`;

    dot.style.opacity = 1;
    circle.style.opacity = 1;
  });

  document.addEventListener("mouseleave", () => {
    dot.style.opacity = 0;
    circle.style.opacity = 0;
  });

  document.addEventListener("mouseenter", () => {
    dot.style.opacity = 1;
    circle.style.opacity = 1;
  });

  // Search Overlay Logic
  const searchIcon = document.getElementById("searchIcon");
  const searchOverlay = document.getElementById("searchOverlay");
  const closeSearch = document.getElementById("closeSearch");

  if (searchIcon) {
    searchIcon.addEventListener("click", () => {
      searchOverlay.classList.add("active");
    });
  }

  if (closeSearch) {
    closeSearch.addEventListener("click", () => {
      searchOverlay.classList.remove("active");
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      searchOverlay.classList.remove("active");
    }
  });
});


window.onload = function () {
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeBtn');

  hamburger.addEventListener('click', () => {
    overlay.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });
};


const cards = document.querySelectorAll('.card');
let currentIndex = 0;
function moveCards() {
    // Move the cards to the left
    cards.forEach((card, index) => {
        card.style.transform = `translateX(-${(currentIndex + index) * 100}%)`;
    });
    // Update the current index
    currentIndex = (currentIndex + 1) % cards.length;
    // After moving, wait for a few seconds before resetting positions
    setTimeout(() => {
        // Reset positions
        cards.forEach((card, index) => {
            card.style.transition = 'none'; // Disable transition for instant reset
            card.style.transform = `translateX(${(index) * 100}%)`;
        });
        // Re-enable transition for the next move
        setTimeout(() => {
            cards.forEach(card => {
                card.style.transition = 'transform 0.5s ease'; // Re-enable transition
            });
        }, 50); // Small delay to ensure transition is re-enabled
    }, 2000); // 2 seconds delay before the next move
}
// Start the movement
setInterval(moveCards, 4000); // Move every 4 seconds 


// const track = document.getElementById("carouselTrack");
//   let cardWidth = 290; // 270px + 20px margin

//   function moveCard() {
//     track.style.transition = "transform 0.5s ease-in-out";
//     track.style.transform = `translateX(-${cardWidth}px)`;

//     track.addEventListener("transitionend", () => {
//       track.appendChild(track.firstElementChild);
//       track.style.transition = "none";
//       track.style.transform = "translateX(0)";
//     }, { once: true });
//   }

//   setInterval(moveCard, 3000);



  
  const track = document.getElementById("carouselTrack");

  let cardWidth;

  window.addEventListener("load", () => {
    const firstCard = track.firstElementChild;
    cardWidth = firstCard.offsetWidth + 20; // card + gap

    setInterval(() => {
      moveCard();
    }, 3000);
  });

  function moveCard() {
    const firstCard = track.firstElementChild;

    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${cardWidth}px)`;

    setTimeout(() => {
      track.style.transition = "none";
      track.appendChild(firstCard);
      track.style.transform = "translateX(0)";
    }, 500);
  }





  
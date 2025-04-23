const kidBooks = [
    {
        title: "The Famous Five",
        img: "imgs/famousfive.jpg",
        genre: "mystery",
        rating: "⭐️⭐️⭐️⭐️",
        review: "A thrilling series full of outdoor adventures and childhood independence."
    },
    {
        title: "Malgudi Days",
        img: "imgs/malgudidays.jpg",
        genre: "slice",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        review: "A charming collection of tales from a fictional Indian town—nostalgic and timeless."
    },
    {
        title: "Harry Potter Series",
        img: "imgs/harrypotter.jpg",
        genre: "fantasy",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        review: "A magical coming-of-age story that ignited my love for fantasy."
    },
    {
        title: "The Secret Seven",
        img: "imgs/secretseven.jpg",
        genre: "mystery",
        rating: "⭐️⭐️⭐️⭐️",
        review: "Simple yet intriguing mysteries that made me feel like a detective."
    },
    {
        title: "Eragon Series",
        img: "imgs/eragon.jpg",
        genre: "fantasy",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        review: "A captivating world of dragons, destiny, and epic quests."
    },
    {
        title: "Chicken Soup for the Soul",
        img: "imgs/chickensoup.jpg",
        genre: "slice",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        review: "Heartwarming stories that inspired empathy and reflection."
    },
    {
        title: "Nancy Drew",
        img: "imgs/nancydrew.jpg",
        genre: "mystery",
        rating: "⭐️⭐️⭐️⭐️",
        review: "Smart, resourceful, and bold—Nancy Drew was everything I aspired to be."
    },
    {
        title: "Percy Jackson Series",
        img: "imgs/percyjackson.jpg",
        genre: "fantasy",
        rating: "⭐️⭐️⭐️⭐️",
        review: "Fast-paced, witty, and full of Greek myth—totally addictive."
    },
    {
        title: "Goosebumps Series",
        img: "imgs/goosebumps.jpg",
        genre: "horror",
        rating: "⭐️⭐️⭐️",
        review: "Just the right amount of spooky to keep me flipping pages at night."
    }
];

const nowBooks = [
    {
        title: "The Midnight Library",
        img: "imgs/midnightlibrary.jpg",
        genre: "literaryfiction",
        rating: "⭐️⭐️⭐️",
        review: "A thoughtful look at the paths not taken—introspective and gentle."
    },
    {
        title: "A Little Life",
        img: "imgs/littlelife.jpg",
        genre: "literaryfiction",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        review: "Emotionally intense and deeply human—this story stays with you."
    },
    {
        title: "Kafka on the Shore",
        img: "imgs/kafkaontheshore.jpg",
        genre: "speculative",
        rating: "⭐️⭐️⭐️⭐️",
        review: "Surreal, poetic, and puzzling in the best way."
    },
    {
        title: "The Stationery Shop of Tehran",
        img: "imgs/stationeryshop.jpg",
        genre: "historicalfiction",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        review: "A bittersweet love story woven into Iranian history and culture."
    },
    {
        title: "Tiny Habits",
        img: "imgs/tinyhabits.jpg",
        genre: "selfhelp",
        rating: "⭐️⭐️⭐️⭐️",
        review: "Actionable strategies for lasting change—small steps, big impact."
    },
    {
        title: "Deception Point",
        img: "imgs/deceptionpoint.jpg",
        genre: "thriller",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        review: "A high-stakes political thriller that kept me hooked."
    },
    {
        title: "The Seven Husbands of Evelyn Hugo",
        img: "imgs/sevenhusbands.jpg",
        genre: "literaryfiction",
        rating: "⭐️⭐️⭐️⭐️",
        review: "Glitz, secrets, and raw emotion—an unforgettable character study."
    },
    {
        title: "Creative Confidence",
        img: "imgs/creativeconfidence.jpg",
        genre: "selfhelp",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        review: "A motivating read that champions experimentation and self-belief."
    },
    {
        title: "Building a Second Brain",
        img: "imgs/buildingsecondbrain.jpg",
        genre: "selfhelp",
        rating: "⭐️⭐️⭐️",
        review: "Useful for organizing ideas, though a bit heavy in theory."
    }
];

// Function to display books from an array into a container
function displayBooks(bookArray, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    bookArray.forEach(book => {
        const card = document.createElement('div'); // Create a div for each book
        card.className = 'book'; // Add class for styling
        card.innerHTML = `
        <img src="${book.img}" alt="Cover of ${book.title}">
        <h3>${book.title}</h3>
        <div class="book-rating">${book.rating}</div>
        <p>${book.review}</p>
      `;
        container.appendChild(card);
    });
}

displayBooks(kidBooks, 'kidBookList');
displayBooks(nowBooks, 'nowBookList');

// Carousel logic for homepage image slider
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    if (!track) return;

    const slides = Array.from(track.children); // Get all image slides
    const prevButton = document.getElementById("prevBtn"); // Prev arrow
    const nextButton = document.getElementById("nextBtn"); // Next arrow

    let currentIndex = 0; // Start at first slide

    function updateSlidePosition() {
        const slideWidth = slides[0].getBoundingClientRect().width; // Get slide width
        track.style.transform = `translateX(-${slideWidth * currentIndex}px)`; // Move slide
    }

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length; // Increment or loop back
        updateSlidePosition(); // Update view
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Decrement or loop
        updateSlidePosition();
    });

    window.addEventListener("resize", updateSlidePosition); // Recalculate on resize
    updateSlidePosition(); // Initial position
});

// Show books dynamically based on genre filter
function renderBooks(filter = "all") {
    let bookArray, containerId;

    if (document.getElementById("kidBookList")) {
        bookArray = kidBooks;
        containerId = "kidBookList";
    } else if (document.getElementById("nowBookList")) {
        bookArray = nowBooks;
        containerId = "nowBookList";
    } else {
        return;
    }

    const list = document.getElementById(containerId);
    list.innerHTML = ""; // Clear current content

    bookArray
        .filter(book => filter === "all" || book.genre === filter) // Filter by genre
        .forEach(book => {
            const bookEl = document.createElement("div");
            bookEl.className = "book";
            bookEl.innerHTML = `
          <img src="${book.img}" alt="${book.title}">
          <h3>${book.title}</h3>
          <div class="book-rating">${book.rating}</div>
          <p>${book.review}</p>
        `;
            list.appendChild(bookEl); // Append to grid
        });
}

// Handle filter button clicks
document.addEventListener("DOMContentLoaded", () => {
    renderBooks("all");

    const filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach(btn => {
        if (btn.dataset.genre === "all") {
            btn.classList.add("active"); // Mark default active
        }
    });

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active")); // Clear active class
            btn.classList.add("active"); // Add to clicked
            renderBooks(btn.dataset.genre); // Render by genre
        });
    });
});

// Lightbox logic for fullscreen image on click
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.getElementById("lightboxClose");

    // Open lightbox
    document.addEventListener("click", e => {
        if (e.target.tagName === "IMG" && e.target.closest(".book")) {
            lightboxImg.src = e.target.src; // Use clicked img
            lightbox.classList.add("active"); // Show overlay
        }
    });

    // Close lightbox with close button
    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    // Close lightbox if clicking outside the image
    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const addBookBtn = document.getElementById("addBookBtn");
    if (addBookBtn) {
        const formOverlay = document.getElementById("formOverlay");
        const cancelForm = document.getElementById("cancelForm");
        const bookForm = document.getElementById("bookForm");

        const bookTitle = document.getElementById("bookTitle");
        const bookGenre = document.getElementById("bookGenre");
        const bookRating = document.getElementById("bookRating");
        const bookReview = document.getElementById("bookReview");
        const bookImage = document.getElementById("bookImage");
        const bookList = document.getElementById("nowBookList") || document.getElementById("kidBookList");

        // Convert number rating to stars
        function convertRatingToStars(num) {
            return "⭐️".repeat(Math.max(1, Math.min(5, parseInt(num))));
        }

        addBookBtn.addEventListener("click", () => {
            formOverlay.style.display = "flex";
        });

        cancelForm.addEventListener("click", () => {
            formOverlay.style.display = "none";
            bookForm.reset();
        });

        bookForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const file = bookImage.files[0];
            if (!file || !file.type.startsWith("image/")) {
                alert("Please upload a valid image.");
                return;
            }

            const reader = new FileReader();
            reader.onload = function (event) {
                const card = document.createElement("div");
                card.className = "book";
                card.innerHTML = `
                <img src="${event.target.result}" alt="Cover of ${bookTitle.value}">
                <h3>${bookTitle.value}</h3>
                <div class="book-rating">${convertRatingToStars(bookRating.value)}</div>
                <p>${bookReview.value}</p>
            `;
                bookList.appendChild(card);
                formOverlay.style.display = "none";
                bookForm.reset();
                card.scrollIntoView({ behavior: "smooth" });
            };

            reader.readAsDataURL(file);
        });
    }
});


// Page fade-in effect
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});

// Set the footer year dynamically
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("footer-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
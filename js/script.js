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

function displayBooks(bookArray, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    bookArray.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book';
        card.innerHTML = `
            <img src="${book.img}" alt="Cover of ${book.title}">
            <h3>${book.title}</h3>
            <div class="book-rating">${book.rating}</div>
            <p>${book.review}</p>
        `;
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let bookArray = null;
    let containerId = null;
    let storageKey = null;

    if (document.getElementById("kidBookList")) {
        bookArray = kidBooks;
        containerId = "kidBookList";
        storageKey = "customKidBooks";
    } else if (document.getElementById("nowBookList")) {
        bookArray = nowBooks;
        containerId = "nowBookList";
        storageKey = "customNowBooks";
    }

    if (containerId) {
        displayBooks(bookArray, containerId);

        const list = document.getElementById(containerId);
        const storedBooks = JSON.parse(localStorage.getItem(storageKey) || "[]");

        storedBooks.forEach(book => {
            const card = document.createElement("div");
            card.className = "book";
            card.innerHTML = `
                <img src="${book.img}" alt="Cover of ${book.title}">
                <h3>${book.title}</h3>
                <div class="book-rating">${book.rating}</div>
                <p>${book.review}</p>
            `;
            list.appendChild(card);
        });

        renderBooks("all", bookArray, storedBooks, list);
    }

    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        if (btn.dataset.genre === "all") btn.classList.add("active");
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const list = document.getElementById(containerId);
            const storedBooks = JSON.parse(localStorage.getItem(storageKey) || "[]");
            renderBooks(btn.dataset.genre, bookArray, storedBooks, list);
        });
    });

    const track = document.querySelector(".carousel-track");
    if (track) {
        const slides = Array.from(track.children);
        const prevButton = document.getElementById("prevBtn");
        const nextButton = document.getElementById("nextBtn");
        let currentIndex = 0;

        function updateSlidePosition() {
            const slideWidth = slides[0].getBoundingClientRect().width;
            track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        }

        nextButton?.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlidePosition();
        });

        prevButton?.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlidePosition();
        });

        window.addEventListener("resize", updateSlidePosition);
        updateSlidePosition();
    }

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.getElementById("lightboxClose");

    document.addEventListener("click", e => {
        if (e.target.tagName === "IMG" && e.target.closest(".book")) {
            lightboxImg.src = e.target.src;
            lightbox.classList.add("active");
        }
    });

    closeBtn?.addEventListener("click", () => lightbox.classList.remove("active"));
    lightbox?.addEventListener("click", e => {
        if (e.target === lightbox) lightbox.classList.remove("active");
    });

    const addBookBtn = document.getElementById("addBookBtn");
    if (addBookBtn && containerId && storageKey) {
        const formOverlay = document.getElementById("formOverlay");
        const cancelForm = document.getElementById("cancelForm");
        const bookForm = document.getElementById("bookForm");
        const bookTitle = document.getElementById("bookTitle");
        const bookGenre = document.getElementById("bookGenre");
        const bookRating = document.getElementById("bookRating");
        const bookReview = document.getElementById("bookReview");
        const bookImage = document.getElementById("bookImage");
        const bookList = document.getElementById(containerId);

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

            if (file.size > 1024 * 1024) { // 1MB
                alert("Image too large! Please upload an image under 1MB.");
                return;
            }

            const reader = new FileReader();
            reader.onload = function (event) {
                const newBook = {
                    title: bookTitle.value,
                    genre: bookGenre.value,
                    rating: convertRatingToStars(bookRating.value),
                    review: bookReview.value,
                    img: event.target.result
                };

                const existing = JSON.parse(localStorage.getItem(storageKey) || "[]");
                existing.push(newBook);
                localStorage.setItem(storageKey, JSON.stringify(existing));

                // Re-render the whole list from scratch
                renderBooks("all", bookArray, existing, bookList);
                formOverlay.style.display = "none";
                bookForm.reset();

                const card = document.createElement("div");
                card.className = "book";
                card.innerHTML = `
                    <img src="${newBook.img}" alt="Cover of ${newBook.title}">
                    <h3>${newBook.title}</h3>
                    <div class="book-rating">${newBook.rating}</div>
                    <p>${newBook.review}</p>
                `;
                const updatedBooks = JSON.parse(localStorage.getItem(storageKey) || "[]");
                renderBooks("all", bookArray, updatedBooks, bookList);
                formOverlay.style.display = "none";
                bookForm.reset();
                card.scrollIntoView({ behavior: "smooth" });
            };

            reader.readAsDataURL(file);
        });
    }

    document.body.classList.add("fade-in");

    const yearSpan = document.getElementById("footer-year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

function renderBooks(filter, baseBooks, savedBooks, list) {
    list.innerHTML = "";
    const allBooks = [...baseBooks, ...savedBooks];
    allBooks
        .filter(book => filter === "all" || book.genre === filter)
        .forEach(book => {
            const bookEl = document.createElement("div");
            bookEl.className = "book";
            bookEl.innerHTML = `
                <img src="${book.img}" alt="${book.title}">
                <h3>${book.title}</h3>
                <div class="book-rating">${book.rating}</div>
                <p>${book.review}</p>
            `;
            list.appendChild(bookEl);
        });
}

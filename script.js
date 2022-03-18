"use strict";

const nav = document.querySelector(".main-nav");
const button = document.querySelector(".nav-toggle");
const hamburgerIcon = document.querySelector(".hamburger");
const heroText = document.querySelector(".container-hero");
const review = document.querySelector(".review4");

button.addEventListener("click", function () {
  nav.classList.toggle("is-open");
  hamburgerIcon.classList.toggle("is-open");
  heroText.classList.toggle("hidden");
});

function checkMediaQuery() {
  window.innerWidth < 725
    ? review.classList.add("review-bg")
    : review.classList.remove("review-bg");
  heroText.classList.remove("hidden");
}

// Add a listener for when the window resizes
window.addEventListener("resize", checkMediaQuery);

//page navigation

document
  .querySelector(".unstyled-list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("fedskhj");

    // Matching strategy
    if (e.target.classList.contains("nav_link")) {
      const id = e.target.getAttribute("href");
      console.log("fedskhj");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

document
  .querySelector(".container-hero")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target);

    if (e.target.classList.contains("btn")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

//IMPLEMENTARE
//Fade revealing
const allSections = document.querySelectorAll(".fadeClass");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
  document.getElementById("menuToggle");

const navLinks =
  document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("open");

});


/* Close menu after clicking a link */

document
  .querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

    });

  });


/* =========================================================
   DARK / LIGHT MODE
========================================================= */

const themeToggle =
  document.getElementById("themeToggle");

const savedTheme =
  localStorage.getItem("theme");

if (savedTheme === "light") {

  document.body.classList.add("light");

  themeToggle.textContent = "☀";

}

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light");

  const isLight =
    document.body.classList.contains("light");

  localStorage.setItem(
    "theme",
    isLight ? "light" : "dark"
  );

  themeToggle.textContent =
    isLight ? "☀" : "☾";

});


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById("year")
  .textContent =
  new Date().getFullYear();


/* =========================================================
   SIMPLE SCROLL REVEAL
========================================================= */

const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

        }

      });

    },

    {
      threshold: 0.12
    }

  );


document
  .querySelectorAll(
    ".section, .project-card, .timeline-item, .highlight"
  )
  .forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

  });


/* =========================================================
   PROJECT CARD INTERACTION
========================================================= */

document
  .querySelectorAll(".project-card")
  .forEach(card => {

    card.addEventListener(
      "mousemove",
      event => {

        const rect =
          card.getBoundingClientRect();

        const x =
          event.clientX - rect.left;

        const y =
          event.clientY - rect.top;

        const rotateX =
          ((y / rect.height) - 0.5) * -3;

        const rotateY =
          ((x / rect.width) - 0.5) * 3;

        card.style.transform =
          `perspective(800px)
           rotateX(${rotateX}deg)
           rotateY(${rotateY}deg)
           translateY(-6px)`;

      }
    );

    card.addEventListener(
      "mouseleave",
      () => {

        card.style.transform = "";

      }
    );

  });
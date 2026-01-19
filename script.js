// Initialize AOS
AOS.init({ offset: 0 });

// Toggle hamburger menu
function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}

function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ---------------- CONTACT FORM (Formspree) ----------------
const form = document.querySelector(".contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const response = await fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    alert("✅ Thank you! Your message has been sent.");
    form.reset();
  } else {
    alert("❌ Oops! Something went wrong. Please try again.");
  }
});

const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


//IGQVJXWnpoQnR4bnVjaXpRZAzlHTXJRZAmNjaUIxX2wyWVNYT2xoeFVxVWpVdGk0aHJ1T2F4dVdJeDQ3YW5LN19pNjFsOEVZAcWFyYXlPVEpCcnFpbmhtWTh5MEstZA3ZAIdk9RYmFkNDFhbWVqdEYzZAzIyNgZDZD
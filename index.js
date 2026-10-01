console.log("DisasterConnect loaded");

const form = document.getElementById("form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Login form submitted");
  });
}

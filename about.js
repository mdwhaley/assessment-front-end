console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Form submitted successfully!");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

function compliment() {
  alert("You are so smart!");
}
rubberDuck.addEventListener("mouseover", compliment);

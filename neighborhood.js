document
  .getElementById("restaraunt")
  .addEventListener("click", restarauntRecomendation);
const restaraunts = [
  "Morettis",
  "Gallos",
  "Del Mar",
  "Lupo",
  "CBC",
  "Knotty Pine",
  "Cap City",
  "Fish Market",
];
const random = Math.floor(Math.random() * restaraunts.length);

function restarauntRecomendation() {
  alert(restaraunts[random]);
}

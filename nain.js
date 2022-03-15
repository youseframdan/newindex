const buon = document.querySelector(".buon");
const iend = document.querySelector(".iend");
const fron = document.querySelector(".fron");
buon.addEventListener("click", () => {
  fron.classList.add("fu");
});
iend.addEventListener("click", () => {
  fron.classList.remove("fu");
});

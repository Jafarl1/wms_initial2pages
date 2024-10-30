const addMoreDataBtn = document.getElementById("addMoreDataBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector(".closeModalBtn");

addMoreDataBtn.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

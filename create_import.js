const addMoreDataBtn = document.getElementById("addMoreDataBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector(".closeModalBtn");
const mainForm = document.getElementById("mainForm");

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  const currentUrl = window.location.pathname;

  links.forEach((link) => {
    if (link.getAttribute("href") === currentUrl) {
      link.classList.add("active");
    }
  });
});

addMoreDataBtn.onclick = () => {
  if (mainForm.checkValidity()) {
    modal.classList.add("show-modal");
  } else {
    mainForm.reportValidity();
  }
};

closeModalBtn.onclick = () => modal.classList.remove("show-modal");

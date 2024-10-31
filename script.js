const productTableBody = document.getElementById("productTableBody");

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  const currentUrl = window.location.pathname;

  links.forEach((link) => {
    if (link.getAttribute("href") === currentUrl) {
      link.classList.add("active");
    }
  });
});

const fakeData = [
  { id: 0, products: ["HP Probook 450", "HP Probook 550"], date: "2024-10-01" },
  { id: 1, products: ["LG Monitor"], date: "2024-10-02" },
  { id: 2, products: ["Logitech mouse"], date: "2024-10-03" },
];

const renderTable = () => {
  productTableBody.innerHTML = fakeData
    .map(
      (item, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${item.products.join(", ")}</td>
            <td>${item.date}</td>
            <td>
                <button class="custom-button blue-button">Daxil ol</button>
                <button class="custom-button green-button">Eksport</button>
                <button class="custom-button red-button">Sil</button>
            </td>
        </tr>
    `
    )
    .join("");
};

renderTable();

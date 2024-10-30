const productTableBody = document.getElementById("productTableBody");

const fakeData = [
  { id: 0, products: ["HP Probook 450", "HP Probook 550"], date: "2024-10-01" },
  { id: 1, products: ["LG Monitor"], date: "2024-10-02" },
  {
    id: 2,
    products: ["Logitech mouse"],
    date: "2024-10-03",
  },
];

fakeData.forEach((item, index) => {
  productTableBody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.products.join(", ")}</td>
            <td>${item.date}</td>
            <td>
                <button class="blue-button">Daxil ol</button>
                <button class="blue-button">Eksport</button>
                <button class="blue-button">Sil</button>
            </td>
        </tr>
    `;
});

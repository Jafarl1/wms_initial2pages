const createNewDep = document.getElementById("createNewDep");
const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector(".closeModalBtn");
const depsTableBody = document.getElementById("departments-table-body");

let departmentsData = [
  { id: 1, name: "Department 1", representative: "Person 1", note: "Note 1" },
  { id: 2, name: "Department 2", representative: "Person 2", note: "Note 2" },
  { id: 3, name: "Department 3", representative: "Person 3", note: "Note 3" },
  { id: 4, name: "Department 4", representative: "Person 4", note: "Note 4" },
];

let editingId = null;

const renderDepartments = () => {
  depsTableBody.innerHTML = departmentsData
    .map(
      (item) => `
        <tr>
            <td>${item.name}</td>
            <td>${item.representative}</td>
            <td>${item.note}</td>
            <td>
                <button class="edit-button green-button" data-id="${item.id}">Edit</button>
                <button class="delete-button red-button" data-id="${item.id}">Delete</button>
            </td>
        </tr>
    `
    )
    .join("");
};

createNewDep.onclick = () => {
  modal.classList.add("show-modal");
  editingId = null;
  document.querySelector(".createImportForm").reset();
};

closeModalBtn.onclick = () => modal.classList.remove("show-modal");

document.querySelector(".createImportForm").onsubmit = (e) => {
  e.preventDefault();

  const name = document.getElementById("departmentName").value;
  const representative = document.getElementById("representative").value;
  const note = document.getElementById("note").value;

  if (editingId) {
    const index = departmentsData.findIndex((dep) => dep.id === editingId);
    if (index > -1) {
      departmentsData[index] = { id: editingId, name, representative, note };
    }
  } else {
    const newId = departmentsData.length
      ? departmentsData[departmentsData.length - 1].id + 1
      : 1;
    departmentsData.push({ id: newId, name, representative, note });
  }

  modal.classList.remove("show-modal");
  renderDepartments();
};

depsTableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-button")) {
    const id = parseInt(e.target.dataset.id, 10);

    Swal.fire({
      title: "Əminsiniz?",
      text: "Departamenti sildikdən sonra bərpa etmək mümkün olmayacaq.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Bəli",
      cancelButtonText: "Xeyr",
    }).then((result) => {
      if (result.isConfirmed) {
        departmentsData = departmentsData.filter((dep) => dep.id !== id);
        renderDepartments();
        Swal.fire("Silindi!", "Departament uğurla silindi!", "success");
      } else {
        Swal.fire("Əməliyyat ləğv olundu!", "Departament silinmədi.", "info");
      }
    });
  }
});

depsTableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-button")) {
    const id = parseInt(e.target.dataset.id, 10);
    const department = departmentsData.find((dep) => dep.id === id);
    if (department) {
      editingId = id;
      document.getElementById("departmentName").value = department.name;
      document.getElementById("representative").value =
        department.representative;
      document.getElementById("note").value = department.note;
      modal.classList.add("show-modal");
    }
  }
});

renderDepartments();

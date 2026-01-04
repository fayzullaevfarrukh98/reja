// const { response } = require("express");

console.log("Fronted JS ishga tushdi");

function itemTemplate(item) {
  return ` <li
            class="list-group-item list-group-item-info d-flex justify-content-between align-items-center"
          >
            <span class="item-text">${item.reja}</span>
            <div>
              <button
                data-id="${item._id}"
                class="edit-me btn btn-secondary btn-sm mr-1"
              >
                Ozgartirish
              </button>
              <button
                data-id="${item._id}"
                class="delete-me btn btn-danger btn-sm"
              >
                Ochirish
              </button>
            </div>
          </li>`;
}

let create_field = document.getElementById("create_field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: create_field.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      create_field.value = "";
      create_field.focus();
    })
    .catch((err) => {
      console.log("Iltimos qayta urinib ko'ring");
    });
});

document.addEventListener("click", function (e) {
  //   delete tugmasi bosilganda
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Aniq o'chirmoqchimisiz?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Iltimos qayta urinib ko'ring!");
        });
    }
  }

  // edit tugmasi bosilganda
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "O'zgartirish kiriting",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("Iltimos qayta urinib ko'ring!");
        });
    }
  }
});

// clean all tugmasi bosilganda

document.getElementById("clean-all").addEventListener("click", function () {
  axios.post("/delete-all", { delete_all: true }).then((response) => {
    alert(response.data.state);
    document.location.reload();
  });
});

// const { response } = require("../app");

console.log("Fronted JS ishga tushdi")

function itemTemplate(item) {
    return`<li
            class="list-group-item d-flex justify-content-between align-items-center">
            ${item.reja}
            <div>
              <button class="btn btn-outline-primary" data-id="${item._id}">
                Ozgartirish
              </button>
              <button class="btn btn-outline-danger" data-id="${item._id}">
                Ochirish
              </button>
            </div>
          </li>`;
        }

let create_field = document.getElementById("create_field");


document.getElementById("create_form").addEventListener("submit", function (e) {
 e.preventDefault();

 axios
 .post("/create_item", {reja: create_field.value})
 .then((data) => {
    document
    .getElementById("item_list")
    .insertAdjacentHTML("beforeend", itemTemplate(response.data));
    create_field.value = "";
    create_field.focus();
 })
 .catch((err) => {
    console.log("Iltimos qayta urinib ko'ring");
 });
}); 

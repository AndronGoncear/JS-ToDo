let toDoList = [];
function AddText() {
  const inputElement = document.querySelector(".js-name-input");
  const inputValue = inputElement.value;
  toDoList.push(inputValue);
  console.log(inputValue);
  inputElement.value = "";
}
let toDoList1 = [];
function AddText2() {
  const inputElement = document.querySelector(".js-name-input2");
  const inputValue = inputElement.value;
  toDoList1.push(inputValue);
  inputElement.value = "";
  renderTodoList();
}

function renderTodoList() {
  let toDoListHTML = [];
  toDoList1.forEach((todo) => {
    const html = `<p>${todo}</p>`;
    toDoListHTML += html;
  });
  document.querySelector(".js-todo-list").innerHTML = toDoListHTML;
}
function renderTodoList2() {
  let toDoListHTML = [];
  toDoList2.forEach((todoObj, index) => {
    const { name, date } = todoObj;
    const html = `
    <div>${name}</div>
    <div>${date}</div>     
    <button class="delete-button"
    >
      Delete
    </button>
    
    `;

    toDoListHTML += html;
  });

  document.querySelector(".js-todo-list2").innerHTML = toDoListHTML;
  document.querySelectorAll(".delete-button").forEach((deleteButton, index) => {
    deleteButton.addEventListener("click", () => {
      toDoList2.splice(index, 1);
      renderTodoList2();
    });
  });
}
let toDoList2 = [];

document.querySelector(".todo-button").addEventListener("click", () => {
  const inputElement = document.querySelector(".js-name-input3");
  const name = inputElement.value;
  const inputElement1 = document.querySelector(".js-date-input3");
  const date = inputElement1.value;
  if (name && date) {
    toDoList2.push({ name, date });
    renderTodoList2();
  }
  inputElement.value = "";
  inputElement1.value = "";
});

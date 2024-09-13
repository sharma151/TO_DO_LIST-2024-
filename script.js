const form = document.querySelector("form");
const taskList = document.getElementById("task-list");
const completedList = document.getElementById("completedList");

function addTask(task) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<input type="checkbox"/> <span>${task}</span><button>Delete</button>`;
  taskList.appendChild(listItem);
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#task-input");
  const task = input.value;
  addTask(task);
  input.value = "";
});

taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const listItem = event.target.parentElement;
    taskList.removeChild(listItem);
  }
});

taskList.addEventListener("change", (event) => {
  if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
    const listItem = event.target.parentElement;
    taskList.removeChild(listItem);
    listItem.removeChild(listItem.querySelector("button")); // Optional: Remove the delete button for completed tasks
    completedList.appendChild(listItem);
  }
});

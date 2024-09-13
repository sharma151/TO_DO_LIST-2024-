const form = document.querySelector("form");
const taskList = document.getElementById("task-list");
const completedList = document.getElementById("completedList");

// list format
function addTask(task) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<input type="checkbox"/> <span>${task}</span><button>Delete</button>`;
  taskList.appendChild(listItem);
}
// add items
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#task-input");
  const task = input.value;
  addTask(task);
  input.value = "";
});

//delete button
taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const listItem = event.target.parentElement;
    taskList.removeChild(listItem);
  }
});

//sends to completed list

taskList.addEventListener("change", (event) => {
  if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
    const listItem = event.target.parentElement;
    listItem.removeChild(listItem.querySelector("button"));
    completedList.appendChild(listItem);
  }
});

//sends back to the tasklist

completedList.addEventListener("change", (event) => {
  if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
    const listItem = event.target.parentElement;
    completedList.removeChild(listItem);
    listItem.innerHTML += `<button>Delete</button>`;
    taskList.appendChild(listItem);
  }
});

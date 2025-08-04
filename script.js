function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <div>
      <button class="edit-btn" onclick="editTask(this)">Edit</button>
      <button onclick="deleteTask(this)">Delete</button>
    </div>
  `;

  taskList.appendChild(li);
  input.value = "";
}

function toggleComplete(taskElement) {
  taskElement.parentElement.classList.toggle("completed");
}

function deleteTask(buttonElement) {
  buttonElement.parentElement.parentElement.remove();
}

function editTask(buttonElement) {
  const li = buttonElement.parentElement.parentElement;
  const span = li.querySelector("span");
  const currentText = span.textContent;

  const newText = prompt("Edit your task:", currentText);

  if (newText !== null && newText.trim() !== "") {
    span.textContent = newText.trim();
  }
}

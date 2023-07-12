let tasks = [];

function addTask() {
  const input = document.getElementById('task-input');
  const task = input.value;
  
  if (task !== '') {
    tasks.push({
      id: Date.now(),
      name: task,
      completed: false
    });
    input.value = '';
    renderTasks();
  }
}
function renderTasks() {
  const taskList = document.getElementById('task-list');
  const completedList = document.getElementById('completed-list');
  taskList.innerHTML = '';
  completedList.innerHTML = '';
  tasks.forEach((task) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      renderTasks();
    });
    const taskName = document.createElement('span');
    taskName.textContent = task.name;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      renderTasks();
    });
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskName);
    taskItem.appendChild(deleteButton);
    if (task.completed) {
      taskItem.classList.add('completed');
      completedList.appendChild(taskItem);
    } else {
      taskList.appendChild(taskItem);
    }
  });
}
const input = document.getElementById('task-input');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
renderTasks();
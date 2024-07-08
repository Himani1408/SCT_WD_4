document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskDate = document.getElementById('task-date');
  const tasksContainer = document.getElementById('tasks');

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(taskInput.value, taskDate.value);
    taskInput.value = '';
    taskDate.value = '';
  });

  function addTask(task, date) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    const taskContent = document.createElement('div');
    taskContent.textContent = `${task} - ${new Date(date).toLocaleString()}`;

    const actions = document.createElement('div');
    actions.classList.add('actions');

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
      taskElement.classList.toggle('completed');
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      const newTask = prompt('Edit your task:', task);
      const newDate = prompt('Edit your date and time:', date);
      if (newTask && newDate) {
        taskContent.textContent = `${newTask} - ${new Date(newDate).toLocaleString()}`;
      }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      taskElement.remove();
    });

    actions.appendChild(completeButton);
    actions.appendChild(editButton);
    actions.appendChild(deleteButton);
    taskElement.appendChild(taskContent);
    taskElement.appendChild(actions);
    tasksContainer.appendChild(taskElement);
  }
});

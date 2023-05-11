import './style.css';

const toDoTasks = [
  {
    description: 'task one',
    completed: false,
    index: 0,
  },
  {
    description: 'task two',
    completed: true,
    index: 1,
  },
  {
    description: 'task tree',
    completed: false,
    index: 2,
  },
];

// defining the UL id
const listItem = document.getElementById('list-item');

// loop through the array of obj and create li for each
toDoTasks.forEach((todo) => {
  // Create a new li element
  const listElement = document.createElement('li');
  const spanElement = document.createElement('span');
  spanElement.textContent = todo.description;

  const checkboxElement = document.createElement('input');
  checkboxElement.type = 'checkbox';
  listElement.appendChild(checkboxElement);
  listElement.appendChild(spanElement);

  if (todo.completed) {
    listItem.classList.add('completed');
  }
  listItem.appendChild(listElement);
});

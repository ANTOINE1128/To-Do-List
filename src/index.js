import './style.css';
import UI from './modules/UI.js';
import Store from './modules/LOCAL.js';
import Todostatus from './modules/status.js';

// Event for Displaying the to do tasks
document.addEventListener('DOMContentLoaded', UI.displayToDoList);

// Event for adding new to do tasks
document.querySelector('#todo-form').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    UI.getNewToDoTask();
  }
});

// Event for deleting new item for the list
document.querySelector('#list-item').addEventListener('click', (e) => {
  Store.removetodo(e.target);
  UI.deletetodo(e.target);
});

// Event for editing the to do list
document.querySelector('#list-item').addEventListener('click', (e) => {
  if (e.target.classList.contains('bi-pencil-square')) {
    UI.editeToDo(e.target);
  }
});

// Event for completed tasks
document.querySelector('#list-item').addEventListener('change', (e) => {
  if (e.target.classList.contains('checkbox')) {
    Todostatus.istodoCompleted(e.target);
  }
});

// Event for updating tasks
document.querySelector('#list-item').addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && e.target.classList.contains('edit-list')) {
    e.preventDefault();
    Store.updatetodo(e.target);
    window.location.reload();
  }
});

// Event for removing tasks
document.getElementById('clear-btn').addEventListener('click', () => {
  Todostatus.cleartodoCompleted();
  window.location.reload();
});
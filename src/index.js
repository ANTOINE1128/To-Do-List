
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
  Store.removetodoTask(e.target);
  UI.deletetodoTask(e.target);
});

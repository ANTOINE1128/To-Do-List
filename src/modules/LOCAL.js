// Store Class: For localstorage functionalty

class Store {
  static toDoLocal = () => {
    let todoTask;
    if (localStorage.getItem('todoTask') === null) {
      todoTask = [];
    } else {
      todoTask = JSON.parse(localStorage.getItem('todoTask'));
    }

    return todoTask;
  }

  static addtodo = (todo) => {
    const todoTask = Store.toDoLocal();
    todo.index = (todoTask.length) + 1;
    todoTask.push(todo);
    localStorage.setItem('todoTask', JSON.stringify(todoTask));
  }

  static updatetodo = (element) => {
    const editedtodo = element.value;
    const todoTask = Store.toDoLocal();
    const list = element.parentElement.parentElement.parentElement;
    const todoList = document.getElementById('list-item');
    const id = Array.prototype.indexOf.call(todoList.children, list);

    todoTask.forEach((todo) => {
      if (todo.index === id) {
        todo.desc = editedtodo;
      }
    });

    localStorage.setItem('todoTask', JSON.stringify(todoTask));
  }

  static removetodo = (element) => {
    const todoTask = Store.toDoLocal();
    const list = element.parentElement.parentElement;
    const todoList = document.getElementById('list-item');
    const id = Array.prototype.indexOf.call(todoList.children, list);

    todoTask.forEach((todo, i) => {
      if (todo.index === id && element.classList.contains('bi-trash3-fill')) {
        todoTask.splice(i, 1);
      }
    });

    todoTask.forEach((todo, i) => {
      todo.index = i + 1;
    });

    localStorage.setItem('todoTask', JSON.stringify(todoTask));
  }
}

export default Store;
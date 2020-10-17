var inputElement = document.querySelector('#text input');
var btnElement = document.querySelector('#text button');
var listElement = document.querySelector('#list ul');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodo() {
  listElement.innerHTML = '';

  for (const todo of todos) {
    var todoElement = document.createElement('li');
    var pos = todos.indexOf(todo);

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
    var linkText = document.createTextNode('x');
    linkElement.appendChild(linkText);

    var todoText = document.createTextNode(todo + ' ');
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement)

    listElement.appendChild(todoElement);
  }

}

renderTodo();

function addTodo() {
  todo = inputElement.value;
  todos.push(todo);
  inputElement.value = '';
  renderTodo();
  saveToStorage();
}
btnElement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodo();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}
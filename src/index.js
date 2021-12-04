import './style.css';
import Status from './status.js'

const taskList = new Status();

const lists = document.querySelector('#lists');

function markDone(element) {
  element.classList.add('check');
  taskList.mark(element.parentElement.id);
  element.nextElementSibling.classList.add('mark');
}

function unmarkDone(element) {
  element.classList.remove('check');
  taskList.unmark(element.parentElement.id);
  element.nextElementSibling.classList.remove('mark');
}

function createTasks(task) {
  const listsItems = document.createElement('li');
  const divItem = document.createElement('div');
  const taskCheck = document.createElement('input');
  const text = document.createElement('input');
  

  divItem.id = task.index;
  divItem.classList.add('d-flex', 'div-class');
  taskCheck.setAttribute('type', 'checkbox');
  taskCheck.classList.add('checkbox');
  taskCheck.checked = task.completed;

  text.classList.add('input', 'text');
  text.setAttribute('rows','1');
  text.innerHTML = task.description;

  if(task.completed){
    taskCheck.classList.add('check');
    text.classList.add('mark');
  }

  listsItems.appendChild(divItem);
  divItem.appendChild(taskCheck);
  divItem.appendChild(text);
  lists.appendChild(listsItems);

  taskCheck.addEventListener('click', () => (taskCheck.checked ? markDone(taskCheck) : unmarkDone(taskCheck)));
}

window.addEventListener('DOMContentLoaded', () => {
  Object.values(taskList.taskList).forEach((value) => createTasks(value));
})

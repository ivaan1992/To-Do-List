import './style.css';

const arrays = [
{
  description: 'task for today',
  completed: true,
  index: 0,
},
{
    description: 'task for today 2',
    completed: true,
    index: 0,
  },
  {
    description: 'task for today 3',
    completed: true,
    index: 0,
  },
];

const lists = document.querySelector('#lists');

function createTasks(task) {
    const listsItems = document.createElement('li');

    listsItems.innerHTML = `<div class="list-line">
        <input type="checkbox" class="check">
        <input class="list-area" rows="1">${task.description}
        <div class="dots-icon"></div> 
    </div>`;
    lists.appendChild(listsItems);
}

lists.forEach((task) => createTasks(task));

const checkbox = document.querySelectorAll('.check');
checkbox.forEach((element) => {
    element.addEventListener('click', () => {
        element.classList.toggle('checkbox');
        element.nextElementSibling.classList.toggle('mark');
    });
});

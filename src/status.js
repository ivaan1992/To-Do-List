export default class Status {
  constructor() {
    if (localStorage.getItem('taskList') === null) {
      this.taskList = {
        0: {
          description: 'task1',
          completed: false,
          index: 0,
        },
        1: {
          description: 'task2',
          completed: false,
          index: 1,
        },
        2: {
          description: 'task3',
          completed: false,
          index: 2,
        },
      };
    } else {
      this.taskList = JSON.parse(localStorage.getItem('taskList'));
    }
  }

    saveStorage = () => {
      localStorage.setItem('taskList', JSON.stringify(this.taskList));
    }

    mark = (index) => {
      const task = this.taskList[index];
      task.completed = true;
      this.saveStorage();
    }

    
    unmark = (index) => {
      const task = this.taskList[index];
      task.completed = false;
      this.saveStorage();
    }
}
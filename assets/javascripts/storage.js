const STORAGE_NAME = "tasks";

class Storage {

  static load() {
    if(!this.tasks) {
      localStorage.setItem(STORAGE, JSON.stringify([])); 
    }
  }

  static find(id) {
    return new Task(this.tasks.find(task => task.id == id));
  }

  static create(task) {
    let tasks = this.tasks;

    tasks.push(task);
    localStorage.setItem(STORAGE_NAME, JSON.stringify(tasks));
  }

  static update(task) {
    let tasks = this.tasks;
    let index = tasks.findIndex((el => el.id == task.id));

    tasks[index] = task;
    localStorage.setItem(STORAGE_NAME, JSON.stringify(tasks));
  }

  static delete(task) {
    let tasks = this.tasks;
    let index = tasks.findIndex((el => el.id == task.id));

    tasks.splice(index, 1);
    localStorage.setItem(STORAGE_NAME, JSON.stringify(tasks));
  }

  static get tasks() {
    return JSON.parse(localStorage.getItem(STORAGE_NAME));
  }
}

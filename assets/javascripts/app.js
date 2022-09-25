class App {

  static init() {
    Renderer.renderTable();
  }

  static saveNewTask() {
    let date = document.getElementById("dateField").value;
    let description = document.getElementById("descriptionField").value;
    let task = new Task({ date: date, description: description });

    task.create();
    Renderer.renderTable();
  }

  static deleteTask(id) {
    let task = Storage.find(id);

    task.delete();
    Renderer.renderTable();
  }

  static markTaskDone(id) {
    // Implement done function.
  }
}


Storage.load();
App.init();

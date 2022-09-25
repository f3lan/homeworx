class Renderer {

  static renderTable() {
    let table = document.getElementById("tasksTable");
    this._clearTable(table);
    this._createTable(table);
  }

  static _createTable(table) {
    let tasks = Storage.tasks;

    for(var i = 0; i < tasks.length; i++) {
      let task = tasks[i];

      let row = table.insertRow(i);
      row.className = task.state;

      let cell1 = row.insertCell(0);
      cell1.innerHTML = task.date

      let cell2 = row.insertCell(1);
      cell2.innerHTML = task.description

      let cell3 = row.insertCell(2);
      cell3.append(this._deleteButton(task));

      let cell4 = row.insertCell(3);
      cell4.append(this._doneButton(task));
    }
  }

  static _doneButton(task) {
    let button = document.createElement("button");

    button.innerHTML = "Erledigt";
    button.onclick = function() {
      App.markTaskDone(task.id);
    };
    return button;
  }

  static _deleteButton(task) {
    let button = document.createElement("button");

    button.innerHTML = "Löschen";
    button.className = "danger";
    button.onclick = function() {
      App.deleteTask(task.id);
    };
    return button;
  }

  static _clearTable(table) {
    table.innerHTML = '';
  }

}

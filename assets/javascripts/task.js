class Task {

   constructor({id, date, description, state = 'new'} = {}) {
    this.id = id || this._generateId();
    this.date = date;
    this.description = description;
    this.state = state; 
  }

  create() {
    Storage.create(this);
  }

  delete() {
    Storage.delete(this);
  }

  done() {
    this.state = "done";
    Storage.update(this);
  }

  toString() {
    return 'ID: ' + this.id + ' - Description: ' + this.description;
  }

  _generateId(){
    if(this.id) {
      return id;
    } else {
      return Math.random().toString(16).slice(2)
    }
  }

}

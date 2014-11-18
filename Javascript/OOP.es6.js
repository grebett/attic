// No more prototyping!
class Message {
  constructor(message) {
    this.message = message;
  }

  log() { console.log(this.message); }
  alert() { window.alert(this.message); }
}

class ErrorMessage extends Message {
  constructor(message) {
    super('Error: ' + message);
  }

  log() { console.error(this.message); }
}
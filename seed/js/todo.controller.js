function TodoController() {
  this.list = [{
    title: 'first todo item!',
    completed: false
  },{
    title: 'Second todo item!',
    completed: false
  },{
    title: 'Third todo item!',
    completed: false
  }]
}

angular
  .module('app')
  .controller('TodoController', TodoController);

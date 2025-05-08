var generateID = makeCounter();
function makeCounter() {
  var count = 0;
  return function() {
    return count++
  }
}


var todos = [];
function todoFactory(task) {
  return {
    task: task,
    complete: false,           
    id: generateID()            
  }
}

function displayTodo(todo) {
  if (todo.complete) {
    return "Todo " + todo.id + " is completed: " + todo.task;
  } else {
    return "Todo " + todo.id + " is not completed: " + todo.task;
  }
 
}


function makeTodoList(initialTodos) {
  var todos = initialTodos;

  return {
    display: function() {
      var output ="";
      for (var i=0; i< todos.length;i++){
        output=output + displayTodo(todos[i]) + "\n"
      }
      return output 

    },
    add: function(task) {
      var newTodo = todoFactory(task);
      todos.push(newTodo);
    }
    complete:  function(id) {
      for (var i=0; i< todos.length;i++){
        if (todos[i].id === id) {
          todos[i].complete = true 

        }
        return todos[i]
      } 
  }
}
  }




  function makeTodoList(initialTodos) {
    var todos = initialTodos;
  
    return {
      display: function() {
        var output ="";
        for (var i=0; i< todos.length;i++){
          output=output + displayTodo(todos[i]) + "\n"
        }
        return output 
  
      },
      add: function(task) {
        var newTodo = todoFactory(task);
        todos.push(newTodo);
      }
      toggleComplete: function(id) {
        for (var i=0; i<todos.length;i++){
          if (todos[i].id === id) {
            todos[i].complete = !todos[i].complete
            return todos[i]

          }
        }
      }
      clearCompleted: function() {
        for (var i=0; i< todos.length;i++){
          if (todos[i].complete) {
            todos.splice(i,1)

          }
        }
    }
  }
  }
  

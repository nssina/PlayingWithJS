const todos = [{
     text: "Order cat food",
     completed: true
}, {
    text: "Clean kitchen",
    completed: false
}, {
    text: "Buy food",
    completed: true
}, {
    text: "Do work",
    completed: false
}, {
    text: "Exercise",
    completed: true
}]

const deleteNote = function (todos, todoText ) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

console.log(getThingsToDo(todos))

deleteNote(todos, "!!buy food")
console.log(todos)
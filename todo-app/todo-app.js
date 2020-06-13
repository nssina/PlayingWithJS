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

const incompleteTodos = todos.filter(function (todo) {
   return !todo.completed
})

const summary = document.createElement("h2")
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector("body").appendChild(summary)

todos.forEach(function (todo) {
   const p = document.createElement("p")
   p.textContent = todo.text
   document.querySelector("body").appendChild(p)
})

// Listen for new todo creation

document.querySelector('button').addEventListener('click', function(e) {
   console.log('add a new todo')
})
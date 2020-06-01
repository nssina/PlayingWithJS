const todos = ["Order cat food", "Clean kitchen", "Buy food", "Do Work", "Exercise "]

todos.splice(2, 1)

todos.push("This is new item")

todos.shift()

console.log(`You have ${todos.length} todos!`)
console.log(todos)
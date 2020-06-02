const todos = ["Order cat food", "Clean kitchen", "Buy food", "Do Work", "Exercise "]

// todos.splice(2, 1)

// todos.push("This is new item")

// todos.shift()

// console.log(`You have ${todos.length} todos!`)

// todos.forEach( function (item, index) {
//     console.log(`${index + 1}. ${item}`)
// })

for (let count = 0; count < todos.length; count++) {
    console.log(`${count + 1}. ${todos[count]}`)
}
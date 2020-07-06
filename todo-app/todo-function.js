const getSavedTodos = function () {
    const todosJSON = localStorage.getItem("todos")

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

const saveTodos = function (todos) {
    localStorage.setItem("todos", JSON.stringify(todos))
}

const renderTodos = function (todos, filters) {

    const filteredTodos = todos.filter(function (todo) {
       const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
       const hideCompletedMatch = !filters.hideCompleted || !todo.completed
  
       return searchTextMatch && hideCompletedMatch
    })
  
    const incompleteTodos = filteredTodos.filter(function (todo) {
       return !todo.completed
    })
  
    document.querySelector("#todos").innerHTML = ""
    
    document.querySelector("#todos").appendChild(generateSummaryDOM(incompleteTodos))
    
    filteredTodos.forEach(function (todo) {
       document.querySelector("#todos").appendChild(generateTodoDOM(todo))
    })
  }

  const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')

    // Setup the todo text
    todoText.textContent = todo.text

    // Setup the remove button
    removeButton.textContent = "x"

    todoEl.appendChild(checkbox)
    todoEl.appendChild(todoText)
    todoEl.appendChild(removeButton)

    return todoEl
  }

  const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement("h2")
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
  }
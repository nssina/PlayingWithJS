const notes = [{
    title: "My next trip",
    body: "I would like to go to Spain"
}, {
    title: "Habits to work on",
    body: "Exercises. Eating a bit better"
}, {
    title: "Office modification",
    body: "Get a new seat"
}]

const filters = {
    searchText: ""
}

// const user = {
//     name: "Sina",
//     age: 21
// }

// const userJSON = JSON.stringify(user)
// console.log(userJSON)

// localStorage.setItem("user", userJSON)

const userJSON = localStorage.getItem("user")
const user = JSON.parse(userJSON)
console.log(`${user.name} is ${user.age}`)


const renderNotes = function (notes, filters) {
    const filterNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filterNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    console.log("did this work")
    e.target.textContent = "The button was clicked"
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector("#filtered-by").addEventListener("change", function(e) {
    console.log(e.target.value)
})
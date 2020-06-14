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

document.querySelector('#remove-all').addEventListener('click', function (e) {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})
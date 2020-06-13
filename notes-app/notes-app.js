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

document.querySelector('button').addEventListener('click', function (e) {
    console.log("did this work")
    e.target.textContent = "The button was clicked"
})
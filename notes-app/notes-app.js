// DOM - Document Object Model

// Query and remove
// const p = document.querySelector("p")
// p.remove()

// Query all and remove
const ps = document.querySelectorAll("p")
ps.forEach(function (p) {
    // p.textContent = "*******"
    // console.log(p.textContent)
})

// Add a new element
const newP = document.createElement('p')
newP.textContent = "This a new element from JavaScript"
document.querySelector("body").appendChild(newP)
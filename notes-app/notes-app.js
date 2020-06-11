// DOM - Document Object Model

// Query and remove
// const p = document.querySelector("p")
// p.remove()

// Query all and remove
const ps = document.querySelectorAll("p")
ps.forEach(function (p) {
    p.textContent = "*******"
    // console.log(p.textContent)
})
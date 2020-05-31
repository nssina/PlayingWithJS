let grade = function(score, total) {
    let percent = (score / total) * 100
    let letterGrade = ``

    if (percent >= 90) {
        letterGrade = `A`
    } else if (percent >= 80) {
        letterGrade = `B`
    } else if (percent >= 70) {
        letterGrade = `C`
    } else if (percent >= 60) {
        letterGrade = `D`
    } else {
        letterGrade = `F`
    }

    return `You got a ${letterGrade} (${percent}%)`
}

let result = grade(9, 20)

console.log(result)
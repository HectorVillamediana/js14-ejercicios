const buttonPlayer1 = document.getElementById("buttonPlayer1")
const buttonPlayer2 = document.getElementById("buttonPlayer2")
const reset = document.getElementById("buttonReset")
const pointer = document.getElementsByClassName("pointer")
const pointsJ1 = pointer[0].firstElementChild
const pointsJ2 = pointer[0].lastElementChild
const selectorSection = document.getElementsByClassName("selector")
const limitPointerSelect = selectorSection[0].lastElementChild
const limitOptions = limitPointerSelect.querySelectorAll("option")
let limitPoints = 3

//GETTING SELECT VALUES
limitPointerSelect.addEventListener("click", function () {
    limitPointerSelect.addEventListener("change", function () {
        switch (limitPointerSelect.value) {
            case "3":
                limitPoints = 3;
                break;
            case "5":
                limitPoints = 5;
                break;
            case "7":
                limitPoints = 7;
                break;
            case "10":
                limitPoints = 10;
                break;
            default:
                limitPoints = 15;
                break;
        }
    })
})

//POINTS OF J1

const pointToJ1 = function () {
    if (parseInt(pointsJ1.innerText) < limitPoints) {
        pointsJ1.innerText = parseInt(pointsJ1.innerText) + 1
    }
}
buttonPlayer1.addEventListener("click", pointToJ1)

//POINTS OF J2
const pointToJ2 = function () {
    if (parseInt(pointsJ2.innerText) < limitPoints) {
        pointsJ2.innerText = parseInt(pointsJ2.innerText) + 1
    }
}
buttonPlayer2.addEventListener("click", pointToJ2)
console.log(limitPoints);
//RESER COUNTER
const resetCounter = function () {
    pointsJ1.innerText = "0"
    pointsJ2.innerText = "0"
}
reset.addEventListener("click", resetCounter)
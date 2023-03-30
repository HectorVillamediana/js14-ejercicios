const mainArticle = document.getElementById("mainArticle")
const mainButtons = document.getElementById("mainButtons")
const sectionToDoList = document.getElementById("toDoList")
const textToDo = mainArticle.children[1]
const buttonAdd = mainButtons.firstElementChild
const buttonClear = mainButtons.lastElementChild
const ulToDo = sectionToDoList.firstElementChild
const liToDo = ulToDo.children

buttonAdd.addEventListener("click", () => {
    let newLiElement = document.createElement("li")
    newLiElement.innerText = textToDo.value
    let newLiButton = document.createElement("button")
    newLiButton.classList.add("delete")
    newLiButton.innerText = "Delete"
    newLiButton.addEventListener("click", () => {
        newLiElement.remove()
        newLiButton.remove()
    })
    ulToDo.appendChild(newLiElement)
    newLiElement.appendChild(newLiButton)
    textToDo.value = ""
})

for (let i = 0; i <= document.getElementsByClassName("delete").length - 1; i++) {
    document.getElementsByClassName("delete")[i].addEventListener("click", () => {
        document.getElementsByClassName("delete")[i].remove()
        ulToDo.children[i].remove()
    })
}
buttonClear.addEventListener("click", () => {
    for (let i = liToDo.length- 1; i >= 0;  i--) {
        liToDo[i].remove()
    }
})
console.log(ulToDo.children);
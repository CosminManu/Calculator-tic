console.log("acces granted")

const button = document.querySelector("#doSmth")
//console.log(button)

button.addEventListener("click", printButtonText)

function printButtonText(e) {
    console.log(e.target.innerText)
}
let output = document.getElementById("output")
let text = document.getElementById("text")
let font = document.getElementById("fonts")
let size = document.getElementById("fontSize")


console.log(font.value)
console.log(size.value)


function changeFontsSize() {
    output.innerHTML = text.value
    output.style.fontFamily = font.value
    output.style.fontSize = size.value + "px"
}
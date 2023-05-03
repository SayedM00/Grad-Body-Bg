let myBody = document.querySelector("body");
let first = document.querySelector("section input:first-of-type")
let mid = document.querySelector("section [type='text']")
let second = document.querySelector("section input:last-of-type")

window.onload = function () {
    myBody.onmouseover = function () {
        myBody.style.cssText = `background:linear-gradient(${mid.value === "" ? "0" : mid.value}deg,${first.value}, ${second.value});`
    }
}


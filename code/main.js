// main.js

UpdateTheme()

function MakeDark() {
    sessionStorage.setItem("bgcolor", "black");
    sessionStorage.setItem("textcolor", "white");
    UpdateTheme()
}

function setVibrantTheme() {
    sessionStorage.setItem("bgcolor", "orange");
    sessionStorage.setItem("textcolor", "royalblue");
    UpdateTheme()

}

function UpdateTheme() {
    document.body.style.background = sessionStorage.getItem("bgcolor");
    document.body.style.color = sessionStorage.getItem("textcolor");
}

function MakeMinimalist() {
    sessionStorage.setItem("bgcolor", "#c7fcf7");
    sessionStorage.setItem("textcolor", "gray");
    UpdateTheme()

}

function MakeRainbow() {
    sessionStorage.setItem("bgcolor", "linear-gradient(to right, red, orange, yellow, green, blue, violet)");
    sessionStorage.setItem("textcolor", "white")
    UpdateTheme()

}

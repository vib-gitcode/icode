// main.js

UpdateTheme()

function MakeDark() {
    localStorage.setItem("bgcolor", "black");
    localStorage.setItem("textcolor", "white");
    UpdateTheme()
}

function MakeVibrant() {
    localStorage.setItem("bgcolor", "orange");
    localStorage.setItem("textcolor", "royalblue");
    UpdateTheme()

}

function UpdateTheme() {
    document.body.style.background = localStorage.getItem("bgcolor");
    document.body.style.color = localStorage.getItem("textcolor");
}

function MakeMinimalist() {
    localStorage.setItem("bgcolor", "#c7fcf7");
    localStorage.setItem("textcolor", "gray");
    UpdateTheme()

}

function MakeRainbow() {
    localStorage.setItem("bgcolor", "linear-gradient(to right, red, orange, yellow, green, blue, violet)");
    localStorage.setItem("textcolor", "white")
    UpdateTheme()

}

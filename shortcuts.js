const shortcuts = document.getElementById("links")
shortcuts.innerHTML = localStorage.getItem("links")
var taskWidget = document.getElementById("w3")
function newshortcut() {
    const linkinput = document.getElementById("linktextbox")
    const nameinput = document.getElementById("nametextbox")
    shortcuts.innerHTML += "<a href= https://"+ linkinput.value + " class='link'>" + nameinput.value + "</a>"
localStorage.setItem("links", shortcuts.innerHTML)
}




function delAllTasks() {
    const shortcuts = document.getElementById("tasks")
    shortcuts.innerHTML = " "



}

//const input = document.getElementById('tasktextbox')
//const displayData = document.getElementById('displayData')



function delIndTasks(event) {
    event.target.remove()
    console.log("hi")

}

localStorage
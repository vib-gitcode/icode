const tasklist = document.getElementById("tasks")
tasklist.innerHTML = localStorage.getItem("tasks")

var taskWidget = document.getElementById("w3")
function newtask() {
    const input = document.getElementById("tasktextbox")
    
    tasklist.innerHTML += "<li class='task'>" + input.value + "</li>"
    var tasks = document.getElementsByClassName("task")
    document.querySelectorAll(".task").forEach(function (event) {
        event.addEventListener('click', delIndTasks)
    })
localStorage.setItem("tasks", tasklist.innerHTML)
}




function delAllTasks() {
    const tasklist = document.getElementById("tasks")
    tasklist.innerHTML = " "



}

//const input = document.getElementById('tasktextbox')
//const displayData = document.getElementById('displayData')



function delIndTasks(event) {
    event.target.remove()
    console.log("hi")

}

localStorage
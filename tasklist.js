var taskWidget = document.getElementById("w3")
function newtask(){
const input = document.getElementById("tasktextbox")
const tasklist = document.getElementById("tasks")
tasklist.innerHTML+="<li>"+input.value+"</li>"

}
function delAllTasks() {
    const tasklist = document.getElementById("tasks")
tasklist.innerHTML=" "

}
function delIndTasks(event) {
event.target.remove
    
}

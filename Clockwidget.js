function timeWidget (){
var date = new Date()
const Widget = document.getElementById("w2")
Widget.innerHTML = "The time is "+date.toLocaleTimeString()}
setInterval(timeWidget,100)
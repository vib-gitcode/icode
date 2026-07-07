function timeWidget (){
var date = new Date()
const Widget = document.getElementById("w2")
Widget.innerHTML = "The time is "+date.toLocaleTimeString()}
hour: '2-digit';
minute: '2-digit';
second: '0-digit';
setInterval(timeWidget,100)
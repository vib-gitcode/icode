const dailyvids = ["https://www.youtube.com/embed/F5HIaRJFL34?si=MvoMnXD69oa1SKz9","https://www.youtube.com/embed/oGvzgZQ6u2g?si=dIdpcWc3KZl6NSwr", "https://www.youtube.com/embed/wd3h2z_609k?si=P7pg8dCU5m36tSzc", "https://www.youtube.com/embed/m7EMFdoBQqY?si=18SIdguWCb3czCnH","https://www.youtube.com/embed/51hekmwlA5E?si=5tDbSU4_hCU9j3mj"]
var randomvids = Math.round(Math.random()*dailyvids.length)-1
document.getElementById("dailyvid1").src=dailyvids[randomvids]
console.log(dailyvids[randomvids])
console.log(randomvids)




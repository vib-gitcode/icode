const dailyvids = ["https://www.youtube.com/embed/F5HIaRJFL34?si=MvoMnXD69oa1SKz9",
    "https://www.youtube.com/embed/HR2C_7G_yRQ?si=1igm9_4zN0E9ibUN",
     "https://www.youtube.com/embed/wd3h2z_609k?si=P7pg8dCU5m36tSzc",
      "https://www.youtube.com/embed/nNYR-QZp4KU?si=CHUDQhpx0gMlOVaI",
      "https://www.youtube.com/embed/51hekmwlA5E?si=5tDbSU4_hCU9j3mj",
      "https://www.youtube.com/embed/pAnGwRiQ4-4?si=JISLQaK-5TQbBcW1",
    "https://www.youtube.com/embed/mVZTlznsdrY?si=BAMyoo_Dw-eOMXp6"]
var randomvids = Math.ceil(Math.random()*dailyvids.length)-1
document.getElementById("dailyvid1").src=dailyvids[randomvids]
console.log(dailyvids[randomvids])
console.log(randomvids)




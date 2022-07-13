// save file
var saveFile = {
  "power":{
    "number":0, 
    "npc":0, 
    "nps":0
  }, 
  "upgrades":{
      "npc":{
          "cost":[50, 200, 500], 
          "amount":[1, 0, 0], 
          "bought":[1, 0, 0],
          "mult":[1.3, 1.5, 1.7]
        }, 
      "nps": {
        "cost": [1000, 5000, 10000],
        "amount": [0, 0, 0],
        "bought": [0, 0, 0],
        "mult": [1.5, 1.6, 1.7]
      }, 
      "gen": {
        "cost": [15000, 20000], 
        "interval": [20000, 20000], 
        "mult": [1.8, 1.9], 
        "amount": [0, 0],
        "isBought": [false, false], 
        "online": [false, false]
      }
   }, 
   "achivement": {
    "normal": [0, 0, 0, 0]
   }
}
// setup
var hasPlayed = false

function increment () {
  saveFile.power.number += saveFile.power.npc
}

// Format
function format(amount) {
    if (amount < 1000) {
        return amount.toFixed(2)
    }
    else if (amount < 1000000 ) {
        let divided = amount / 1000
        return divided.toFixed(2) + "K"
    }
    else if (amount < 1000000000){
        let divided = amount / 1000000
        return divided.toFixed(2) + "M"
    }
    else if (amount < 1000000000000) {
        let divided = amount / 1000000000
        return divided.toFixed(2) + "B"
    }
    else if (amount < 1000000000000000) {
        let divided = amount / 1000000000000
        return divided.toFixed(2) + "T"
    }
    else if (amount < 1000000000000000000) {
        let divided = amount / 1000000000000000
        return divided.toFixed(2) + "Qa"
    }
    else if (amount < 1000000000000000000000) {
        let divided = amount / 1000000000000000000
        return divided.toFixed(2) + "Qt"
    }
    else if (amount < 1000000000000000000000000) {
        let divided = amount / 1000000000000000000000
        return divided.toFixed(2) + "Sx"
    }
    else if (amount < 1000000000000000000000000000) {
        let divided = amount / 1000000000000000000000000
        return divided.toFixed(2) + "Sp"
    }
    else if (amount < 1000000000000000000000000000000) {
        let divided = amount / 1000000000000000000000000000
        return divided.toFixed(2) + "Oc"
    }
    else if (amount < 1000000000000000000000000000000000) {
        let divided = amount / 1000000000000000000000000000000
        return divided.toFixed(2) + "No"
    }
    else if (amount < 1000000000000000000000000000000000000) {
        let divided = amount / 1000000000000000000000000000000000
        return divided.toFixed(2) + "Dc"
    }
    else {
        let power = Math.floor(Math.log10(amount))
        let mantissa = amount / Math.pow(10, power)
        return mantissa.toFixed(2) + "e" + power
    }
}

function buyUpgrade (type) {
  if (type == "npc1") {
    let s = saveFile.upgrades.npc
    if (s.cost[0] <= saveFile.power.number) {
      saveFile.power.number -= s.cost[0]
      saveFile.power.npc += 1
      s.cost[0] = s.cost[0] * s.mult[0]
      s.bought += 1
      s.amount += 1
      document.getElementById("npc1").innerHTML = "NPC +1<br><br>Cost: " + format(s.cost[0])
    }
  }
  else if (type == "npc2") {
    let s = saveFile.upgrades.npc
    if (s.cost[1] <= saveFile.power.number) {
      saveFile.power.number -= s.cost[1]
      saveFile.power.npc += 5
      s.cost[1] = s.cost[1] * s.mult[1]
      s.bought += 1
      s.amount += 1
      document.getElementById("npc2").innerHTML = "NPC +5<br><br>Cost: " + format(s.cost[1])
    }
  }
  else if (type == "npc3") {
    let s = saveFile.upgrades.npc
    if (s.cost[2] <= saveFile.power.number) {
      saveFile.power.number -= s.cost[2]
      saveFile.power.npc += 10
      s.cost[2] = s.cost[2] * s.mult[2]
      s.bought += 1
      s.amount += 1
      document.getElementById("npc3").innerHTML = "NPC +10<br><br>Cost: " + format(s.cost[2])
    }
  }
  if (type == "nps1") {
    let s = saveFile.upgrades.nps
    if (s.cost[0] <= saveFile.power.number) {
      saveFile.power.number -= s.cost[0]
      saveFile.power.nps += 1
      s.cost[0] = s.cost[0] * s.mult[0]
      s.bought += 1
      s.amount += 1
      document.getElementById("nps1").innerHTML = "NPS +1<br><br>Cost: " + format(s.cost[0])
    }
  }
  else if (type == "nps2") {
    let s = saveFile.upgrades.nps
    if (s.cost[1] <= saveFile.power.number) {
      saveFile.power.number -= s.cost[1]
      saveFile.power.nps += 5
      s.cost[1] = s.cost[1] * s.mult[1]
      s.bought += 1
      s.amount += 1
      document.getElementById("nps2").innerHTML = "NPS +5<br><br>Cost: " + format(s.cost[1])
    }
  }
  else if (type == "nps3") {
    let s = saveFile.upgrades.nps
    if (s.cost[2] <= saveFile.power.number) {
      saveFile.power.number -= s.cost[2]
      saveFile.power.nps += 10
      s.cost[2] = s.cost[2] * s.mult[2]
      s.bought += 1
      s.amount += 1
      document.getElementById("nps3").innerHTML = "NPS +10<br><br>Cost: " + format(s.cost[2])
    }
  }
  if (type == "gen1") {
    let s = saveFile.upgrades.gen
    if (s.cost[0] <= saveFile.power.number) {
      saveFile.power.number -= s.cost[0]
      s.cost[0] = s.cost[0] * s.mult[0]
      s.isBought = true
      s.amount += 1
      document.getElementById("gen1").innerHTML = "NPC Generator<br><button onClick='if (saveFile.upgrades.gen.online[0] = true) saveFile.upgrades.gen.online[0] = false; else saveFile.upgrades.gen.online[0] = true'>Online</button><br><br><button>Upgrade<br>Cost: " + format(s.cost[0]) + "</button>"
    }
  }
}

function changeTab (tab) {
  document.getElementById("infinityPage").style.display = "none"
  document.getElementById("infinitumPage").style.display = "none"
  document.getElementById("achivementPage").style.display = "none"
  document.getElementById("helpPage").style.display = "none"
  document.getElementById("aboutPage").style.display = "none"
  document.getElementById("devPage").style.display = "none"
  document.getElementById("startPage").style.display = "none"

  page = document.getElementById(tab + "Page").style.display = "block"
}

function alert(message, textColor="white", bgColor="none", timeout=10000) {
  document.getElementById("alertMessage").textContent = message
  document.getElementById("alertMessage").style.backgroundColor = bgColor
  document.getElementById("alertMessage").style.color = textColor

  setTimeout(function () {
    document.getElementById("alertMessage").textContent = ""
    document.getElementById("alertMessage").style.backgroundColor = "none"
    document.getElementById("alertMessage").style.color = "none"
  }, timeout)

  
}

function save () {
  localStorage.setItem("savedFile", JSON.stringify(saveFile))
}

function load () {
  var saveFile = JSON.parse(localStorage.getItem("savedFile"))
}

function productionLoop () {
  saveFile.power.number += saveFile.power.nps / 20


}

function render () {
  const numberText = document.getElementById("numberText")
  const numberTextBottom = document.getElementById("numberTextBottom")
  const npcText = document.getElementById("npcText")
  const npsText = document.getElementById("npsText")
  const title = document.getElementById("webTitle")
  
  title.textContent = "Infinity Clicker - " + format(saveFile.power.number)
  numberText.textContent = format(saveFile.power.number)
  numberTextBottom.textContent = format(saveFile.power.number)
  npcText.textContent = format(saveFile.power.npc)
  npsText.textContent = format(saveFile.power.nps)

  /* for (let i = 1; i < 3; i += 1) {
    let index = i
    if (saveFile.achivement.normal[i - 1] == 1) document.getElementById("a" + index).classList.add = "active"
    else document.getElementById("a" + index).classList.remove = "active"
  } */

  checkLoop()
        
  requestAnimationFrame(render)
}

function checkLoop () {
let p = saveFile.power

  // Achivements
  let a = saveFile.achivement.normal
  if ( p.npc >= 1  && a[0] < 1) { a[0] = 1; alert("Achivement! It's A Start!", "yellow", "blue") }
  if ( p.npc >= 10 && a[1] < 1) { a[1] = 1; alert("Achivement! It 'Aint Much, But It's Honest Work.", "yellow", "blue") }
  if ( p.nps >= 1  && a[2] < 1) { a[2] = 1; alert("Achivement! Stable Income", "yellow", "blue") }
  if ( saveFile.upgrades.gen.amount[0] == 1) { saveFile.upgrades.gen.amount[0] = 2; alert("Achivement! A New GENeration", "yellow", "blue") }
}

setInterval(productionLoop, 50)
render()

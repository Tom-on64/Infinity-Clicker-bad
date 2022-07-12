var number = 0
var npc = 0
var nps = 0
// save file
var saveFile = {
  "power":{
    "number":number, 
    "npc":npc, 
    "nps":nps
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
        "amount": [0, 0],
        "isBought": [false, false]
      }
   }
}
// setup
var hasPlayed = false

function increment () {
  number += npc
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
    if (s.cost[0] <= number) {
      number -= s.cost[0]
      npc += 1
      s.cost[0] = s.cost[0] * s.mult[0]
      s.bought += 1
      s.amount += 1
      document.getElementById("npc1").innerHTML = "NPC +1<br><br>Cost: " + format(s.cost[0])
    }
  }
  else if (type == "npc2") {
    let s = saveFile.upgrades.npc
    if (s.cost[1] <= number) {
      number -= s.cost[1]
      npc += 5
      s.cost[1] = s.cost[1] * s.mult[1]
      s.bought += 1
      s.amount += 1
      document.getElementById("npc2").innerHTML = "NPC +5<br><br>Cost: " + format(s.cost[1])
    }
  }
  else if (type == "npc3") {
    let s = saveFile.upgrades.npc
    if (s.cost[2] <= number) {
      number -= s.cost[2]
      npc += 10
      s.cost[2] = s.cost[2] * s.mult[2]
      s.bought += 1
      s.amount += 1
      document.getElementById("npc3").innerHTML = "NPC +10<br><br>Cost: " + format(s.cost[2])
    }
  }
  if (type == "nps1") {
    let s = saveFile.upgrades.nps
    if (s.cost[0] <= number) {
      number -= s.cost[0]
      nps += 1
      s.cost[0] = s.cost[0] * s.mult[0]
      s.bought += 1
      s.amount += 1
      document.getElementById("nps1").innerHTML = "NPS +1<br><br>Cost: " + format(s.cost[0])
    }
  }
  else if (type == "nps2") {
    let s = saveFile.upgrades.nps
    if (s.cost[1] <= number) {
      number -= s.cost[1]
      nps += 5
      s.cost[1] = s.cost[1] * s.mult[1]
      s.bought += 1
      s.amount += 1
      document.getElementById("nps2").innerHTML = "NPS +5<br><br>Cost: " + format(s.cost[1])
    }
  }
  else if (type == "nps3") {
    let s = saveFile.upgrades.nps
    if (s.cost[2] <= number) {
      number -= s.cost[2]
      nps += 10
      s.cost[2] = s.cost[2] * s.mult[2]
      s.bought += 1
      s.amount += 1
      document.getElementById("nps3").innerHTML = "NPS +10<br><br>Cost: " + format(s.cost[2])
    }
  }
}

function changeTab (tab) {
  document.getElementById("infinityPage").style.display = "none"
  document.getElementById("infinitumPage").style.display = "none"
  document.getElementById("helpPage").style.display = "none"
  document.getElementById("aboutPage").style.display = "none"
  document.getElementById("devPage").style.display = "none"
  document.getElementById("startPage").style.display = "none"

  page = document.getElementById(tab + "Page").style.display = "block"
}

function save () {
  localStorage.setItem("savedFile", JSON.stringify(saveFile))
}

function load () {
  var saveFile = JSON.parse(localStorage.getItem("savedFile"))
}

function productionLoop () {
  number += nps / 20
}

function render () {
  const numberText = document.getElementById("numberText")
  const numberTextBottom = document.getElementById("numberTextBottom")
  const npcText = document.getElementById("npcText")
  const npsText = document.getElementById("npsText")
  const title = document.getElementById("webTitle")
  
  title.textContent = "Infinity Clicker - " + format(number)
  numberText.textContent = format(number)
  numberTextBottom.textContent = format(number)
  npcText.textContent = format(npc)
  npsText.textContent = format(nps)
        
  requestAnimationFrame(render)
}

setInterval(productionLoop, 50)
render()

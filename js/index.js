// SaveFile
var saveFile = {
  power: {
    number: 0
  }, 
  upgrades: {
    npc: {
      cost: 50, 
      bought: 0, 
      amount: 1, 
      mult: 1.07
    }, 
    nps: {
      cost: 1000,
      bought: 0,
      amount: 0,
      mult: 1.3
    }
  }, 
  settings: {
    updateRate: 100
  }
}

const increment = () => {
  saveFile.power.number += saveFile.upgrades.npc.amount
}

const buy = (_item, _amount) => {
  if (_amount !== 0)
  switch (_item) {
    case "npc":
      if (saveFile.upgrades.npc.cost * _amount <= saveFile.power.number) {
        saveFile.power.number -= saveFile.upgrades.npc.cost * _amount * saveFile.upgrades.npc.mult
        saveFile.upgrades.npc.bought += _amount
        saveFile.upgrades.npc.amount += _amount
        saveFile.upgrades.npc.cost *= saveFile.upgrades.npc.mult
      }
      break
    case "nps":
      if (saveFile.upgrades.nps.cost * _amount <= saveFile.power.number) {
        saveFile.power.number -= saveFile.upgrades.nps.cost * _amount * saveFile.upgrades.nps.mult
        saveFile.upgrades.nps.bought += _amount
        saveFile.upgrades.nps.amount += _amount
        saveFile.upgrades.nps.cost *= saveFile.upgrades.nps.mult
      }
      break

    default:
      console.log("Invalid Item To Buy!")
      break
  }
}

const format = (_number) => {
  if (_number == undefined) {
    return '0'
  }
  else if (_number < 1000) {
    return _number.toFixed(2)
  }
  else if (_number < 1000000) {
    let divided = _number / 1000
    return divided.toFixed(2) + "K"
  }
  else if (_number < 1000000000) {
    let divided = _number / 1000000
    return divided.toFixed(2) + "M"
  }
  else if (_number < 1000000000000) {
    let divided = _number / 1000000000
    return divided.toFixed(2) + "B"
  }
  else if (_number < 1000000000000000) {
    let divided = _number / 1000000000000
    return divided.toFixed(2) + "T"
  }
  else if (_number < 1000000000000000000) {
    let divided = _number / 1000000000000000
    return divided.toFixed(2) + "Qa"
  }
  else if (_number < 1000000000000000000000) {
    let divided = _number / 1000000000000000000
    return divided.toFixed(2) + "Qt"
  }
  else if (_number < 1000000000000000000000000) {
    let divided = _number / 1000000000000000000000
    return divided.toFixed(2) + "Sx"
  }
  else if (_number < 1000000000000000000000000000) {
    let divided = _number / 1000000000000000000000000
    return divided.toFixed(2) + "Sp"
  }
  else if (_number < 1000000000000000000000000000000) {
    let divided = _number / 1000000000000000000000000000
    return divided.toFixed(2) + "Oc"
  }
  else if (_number < 1000000000000000000000000000000000) {
    let divided = _number / 1000000000000000000000000000000
    return divided.toFixed(2) + "No"
  }
  else if (_number < 1000000000000000000000000000000000000) {
    let divided = _number / 1000000000000000000000000000000000
    return divided.toFixed(2) + "Dc"
  }
  else {
    let power = Math.floor(Math.log10(_number))
    let mantissa = _number / Math.pow(10, power)
    return mantissa.toFixed(2) + "e" + power
  }
}

setInterval(function () {
  // Render
  document.getElementById("webTitle").textContent = `Infinity Clicker | ${format(saveFile.power.number)}`
  document.getElementById("npcText").textContent = format(saveFile.upgrades.npc.amount)
  document.getElementById("numberText").textContent = format(saveFile.power.number)
  document.getElementById("npsText").textContent = format(saveFile.upgrades.nps.amount)
  document.getElementById("npc1cost").textContent = format(saveFile.upgrades.npc.cost * 1)
  document.getElementById("npc5cost").textContent = format(saveFile.upgrades.npc.cost * 5)
  document.getElementById("npc10cost").textContent = format(saveFile.upgrades.npc.cost * 10)
  document.getElementById("npc100cost").textContent = format(saveFile.upgrades.npc.cost * 100)
  document.getElementById("nps1cost").textContent = format(saveFile.upgrades.nps.cost * 1)
  document.getElementById("nps5cost").textContent = format(saveFile.upgrades.nps.cost * 5)
  document.getElementById("nps10cost").textContent = format(saveFile.upgrades.nps.cost * 10)
  document.getElementById("nps100cost").textContent = format(saveFile.upgrades.nps.cost * 100)
  if (saveFile.upgrades.nps.amount !== 0) document.getElementById("npsContainer").style.display = "block"
  else document.getElementById("npsContainer").style.display = "none"
}, saveFile.settings.updateRate)
setInterval(function () {
  // Math
  saveFile.power.number += saveFile.upgrades.nps.amount / 20
}, 50)
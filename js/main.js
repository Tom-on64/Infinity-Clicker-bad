

// Variables
var number = 50
var generators = []
var lastUpdate = Date.now()

for(let i = 0;  i< 10; i += 1) {
    // Getting All The Generator Into A List
    let generator = {
        cost: Math.pow(Math.pow(10, i), i) * 50,
        bought: 0,
        amount: 0,
        mult: 1
    }
    generators.push(generator)
}

// Functions

// Format
function format(amount) {
    if (amount < 1000) {
        return amount.toFixed(2)
    }
    else if (amount < 1000000 ) {
        let divided = amount / 1000
        return divided.toFixed(2) + "k"
    }
    else if (amount < 1000000000){
        let divided = amount / 1000000
        return divided.toFixed(2) + "m"
    }
    else if (amount < 1000000000000) {
        let divided = amount / 1000000000
        return divided.toFixed(2) + "b"
    }
    else {
        let power = Math.floor(Math.log10(amount))
        let mantissa = amount / Math.pow(10, power)
        return mantissa.toFixed(2) + "e" + power
    }
}

// Buy Gen
function buyGenerator(i) {
    let g = generators[i - 1]
    if (g.cost > number) return
    number -= g.cost
    g.amount += 1
    g.bought += 1
    g.mult *= 1.05
    g.cost *= 1.5
}

// Change Tab
function openTab(event, tabId, hideClass, buttonClass) {
    // Variables
    let i, tab, button

    // Get All "tab" And Hide
    tab = document.getElementsByClassName(hideClass)
    for (i = 0; i < tab.length; i++) {
        tab[i].style.display = "none"
    }

    // Get All "button" And Remove "Active"
    button = document.getElementsByClassName(buttonClass);
    for (i = 0; i < button.length; i++) {
        button[i].className = button[i].className.replace(" active", "")
    }

    // Show Current And Add "active" To Its Button
    document.getElementById(tabId).style.display = "block"
    event.currentTarget.className += " active"
}

// Updates
function updateGui() {
    document.getElementById("numberInt").textContent = format(number)
    for (let i = 0; i < 10; i += 1) {
        let g = generators[i]
        document.getElementById("gen" + (i+1)).innerHTML = "<span class='infoText'>Amount: " + format(g.amount) + "<br>Bought: " + g.bought + "<br>Multiplier: " + format(g.mult) + "</span><span class='costText'><br>Cost: " + format(g.cost) + "</span>"
        if (g.cost > number) document.getElementById("gen" + (i + 1)).classList.add("locked")
        else document.getElementById("gen" + (i + 1)).classList.remove("locked")
    }
}

// Saving
function saveGame() {
    var savedFile = {
        number: number
    }
    localStorage.setItem("saveFile", JSON.stringify(savedFile))
    localStorage.setItem("generators", JSON.stringify(generators))
    console.log("Game Saved!")
    alert("Game Saved!")
}

function loadGame() {
    var saveFile = JSON.parse(localStorage.getItem("saveFile"))
    if (saveFile.number !== undefined) {
        generators = JSON.parse(localStorage.getItem("generators"))
        number = saveFile.number
    }
    alert("Game Loaded!")
}

// alert
function alert(message) {
    document.getElementById("alertText").textContent = message
    document.getElementById("alert").style.display = "block"
    setTimeout(function () { document.getElementById("alert").style.display = "none" }, 6000)
}

// Loops
function productionLoop(diff) {
    number += generators[0].amount * generators[0].mult * diff
    for (let i = 1; i < 10; i += 1) {
        generators[i - 1].amount += generators[i].amount * generators[i].mult * diff / 5
    }
}

function mainLoop() {
    var diff = (Date.now() - lastUpdate) / 1000

    productionLoop(diff)
    updateGui()

    lastUpdate = Date.now()
}


// Init

setInterval(mainLoop, 50)
setInterval(saveGame, 30000)
window.onload = loadGame

// Open Infinity By Default
document.getElementById("defaultOpen").click()
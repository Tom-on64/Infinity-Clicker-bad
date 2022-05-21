

// Variables
var number = 10
var infinity = 0
var generators = []
var autobuyers = []
var brokeInfinity = false
var lastUpdate = Date.now()
function createGen() {
    for(let i = 0;  i< 10; i += 1) {
        // Getting All The Generator Into A List
        let generator = {
            cost: Math.pow(Math.pow(10, i), i) * 10,
            bought: 0,
            amount: 0,
            mult: 1
        }
        generators.push(generator)
    }
}
function createAuto() {
    for (let i = 0; i < 10; i += 1) {
        // Getting All The Autobuyer Into A List
        let autobuyer = {
            cost: Math.pow(Math.pow(10, i), i) * 10000000,
            interval: 1
        }
        autobuyers.push(autobuyer)
    }
}

// Functions

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

// Buy Auto
function buyAutobuyer(i) {
    let a = autobuyers[i - 1]
    if (a.cost > number) return
    number -= a.cost
    a.interval += 1
    a.cost *= 1.5
}

// Change Tab
function openTab(event, tabId, hideClass, buttonClass, display) {
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
    document.getElementById(tabId).style.display = display
    event.currentTarget.className += " active"
}

// Add Infinity
function addInfinity(brokeInfinity) {
    if (brokeInfinity == false) {
        infinity += 1
        number = 10
        generators = []
        autobuyers = []
        createGen()
        createAuto()
    }
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
    for (let i = 0; i < 10; i += 1) {
        let a = autobuyers[i]
        document.getElementById("auto" + (i + 1)).innerHTML = "<span class='infoText'>Interval: " + format(a.interval) + "</span><span class='costText'><br>Cost: " + format(a.cost) + "</span>"
        if (a.cost > number) document.getElementById("auto" + (i + 1)).classList.add("locked")
        else document.getElementById("auto" + (i + 1)).classList.remove("locked")
    }
}

// Saving
function saveGame() {
    var savedFile = {
        number: number,
        infinity: infinity
    }
    localStorage.setItem("saveFile", JSON.stringify(savedFile))
    localStorage.setItem("generators", JSON.stringify(generators))
    localStorage.setItem("autobuyers", JSON.stringify(autobuyers))
    alert("Game Saved!")
}

function loadGame() {
    var saveFile = JSON.parse(localStorage.getItem("saveFile"))
    if (saveFile.number !== undefined) {
        generators = JSON.parse(localStorage.getItem("generators"))
        autobuyers = JSON.parse(localStorage.getItem("autobuyers"))
        number = saveFile.number
        infinity = saveFile.infinity
    }
    alert("Game Loaded!")
}

function resetGame() {
    number = 10
    infinity = 0
    generators = []
    createGen()
    createAuto()
    alert('Game Reset!')
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
    for (let i = 1; i < 10; i += 1) {
        document.getElementById("gen" + i).click()
    }
    if (isFinite(number) == false) {
        addInfinity(brokeInfinity)
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
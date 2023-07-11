/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const form = document.getElementById("enter-amount")


form.addEventListener("submit", function(e){
    e.preventDefault()
    let inputValue = document.getElementById("fill-in").value
    getLengthValue(inputValue)
    getVolumeValue(inputValue)
    getMassValue(inputValue)
    clearInput()
})

function getLengthValue(inputValue) {
    let meter = inputValue
    let feet = meter * 3.281
    let feetTwo = inputValue
    let meterTwo = feetTwo/3.281
    document.getElementById("length-measure").innerHTML = `${meter} meter(s) = ${feet.toFixed(3)} feet(s)
    || ${feetTwo} feet = ${meterTwo.toFixed(3)} Meters `
}

function getVolumeValue(inputValue) {
    let liter = inputValue
    let gallon = liter * 0.264
    let gallonTwo = inputValue
    let literTwo = gallonTwo/0.264
    
    document.getElementById("volume-measure").innerHTML = `${liter} liters = ${gallon.toFixed(3)}
    gallon(s) || ${gallonTwo} gallon(s) = ${literTwo.toFixed(3)} liter(s)`
    
}

function getMassValue(inputValue) {
    let kilogram = inputValue
    let pound = kilogram * 2.204
    let poundTwo = inputValue
    let kilogramTwo = poundTwo/2.204
    
    document.getElementById("mass-measure").innerHTML = `${kilogram} kilo(s) = ${pound.toFixed(3)}
    pound(s) || ${poundTwo} pound(s) = ${kilogramTwo.toFixed(3)} kilogram(s)`
 
}
function clearInput(){
    document.getElementById("fill-in").value = ""
}
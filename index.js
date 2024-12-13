/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const unitRate = {
    meter: 3.28084, // foot
    liter: 0.264172, //gallon
    kilogram: 2.20462 // pound
}

let conversionResults= [
    { unit: 'meter', converted: 'feet', value: { original: 0, converted: 0 } },
    { unit: 'liter', converted: 'gallons', value: { original: 0, converted: 0 } },
    { unit: 'kilogram', converted: 'pound', value: { original: 0, converted: 0 } }
]
    
let inputValue = 0



function Convert(number)
{
    conversionResults[0].value.original = (number * unitRate.meter).toFixed(3);
    conversionResults[0].value.converted = (number / unitRate.meter).toFixed(3);

    conversionResults[1].value.original = (number * unitRate.liter).toFixed(3);
    conversionResults[1].value.converted = (number / unitRate.liter).toFixed(3);

    conversionResults[2].value.original = (number * unitRate.kilogram).toFixed(3);
    conversionResults[2].value.converted = (number / unitRate.kilogram).toFixed(3);
    
}

convertBtn.addEventListener("click",function() {
    inputValue = Number(inputEl.value)
    if(!inputValue || inputValue <= 0)
    {
        alert("Enter A Valid Positive Number!")
        return
    }
        

    Convert(inputValue)
    displayResult()
})




function displayResult()
{
    lengthEl.textContent = `${inputValue} meters = ${conversionResults[0].value.original} feet
    | ${inputValue} feet = ${conversionResults[0].value.converted} meters`

    volumeEl.textContent = `${inputValue} liters = ${conversionResults[1].value.original} gallons
    | ${inputValue} gallons = ${conversionResults[1].value.converted} liters`

    massEl.textContent = `${inputValue} kilos = ${conversionResults[2].value.original} pounds
    | ${inputValue} pounds = ${conversionResults[2].value.converted} kilos`
}
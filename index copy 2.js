
// initial conditions
class NoMathInteractionToggle {
    constructor(value = 0, toggle = true) {
        this.value = value
        this.toggle = toggle
    }

    SetValue(value) {
        this.value = value
    }

    SetToggle(toggle) {
        this.toggle = toggle
    }

    [Symbol.toPrimitive](hint) {
        if (this.toggle == true) {
            return this.value
        }
        else {
            return 0;
        }
    }
}

const variable = new NoMathInteractionToggle()

let output_D = document.getElementById("output_D")
let output = 0
output_D.innerText = output

let number_list = []
let number_from_list = 0
let placeholder = 0

let addition_bool = false
let subtraction_bool = false
let multiplication_bool = false
let division_bool = false




// Resets everything
function AC() {
    output = 0
    number_list = []

    addition_bool = false
    subtraction_bool = false
    multiplication_bool = false
    division_bool = false

    placeholder = 0
    variable.SetValue(0)
    variable.SetToggle(true)
    
    output_D.innerText = output
}

// stores number inputs in variables
function append_integer(x) {
        number_list.push(x)
        number_from_list = Number(number_list.join(''))
        variable.SetValue(number_from_list)
        output = variable
        console.log(variable)
        output_D.innerText = output

}

function operations() {
    if (addition_bool == true) {
        placeholder = placeholder + variable
        addition_bool = false
        console.log(placeholder)
    }
    else if (subtraction_bool == true) {
        placeholder = placeholder - variable
        subtraction_bool = false
        console.log(placeholder)
    }
    else if (multiplication_bool == true) {
        placeholder = placeholder * variable
        multiplication_bool = false
        console.log(placeholder)
    }
    else if (division_bool == true) {
        placeholder = placeholder / variable
        division_bool = false
        console.log(placeholder)
    }
    else {
        placeholder = variable
        console.log(placeholder)
    }
    output = placeholder
    output_D.innerText = output
}

function addition() {
    number_list = []
    operations()
    addition_bool = true
}

function subtraction() {
    number_list = []
    operations()
    subtraction_bool = true
}

function multiplication() {
    number_list = []
    operations()
    multiplication_bool = true
}

function division() {
    number_list = []
    operations()
    division_bool = true
}

function equals() {
    operations()
    console.log(placeholder)
}
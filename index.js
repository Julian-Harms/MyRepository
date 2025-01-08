
// initial conditions
let output_D = document.getElementById("output_D")
let output = 0
output_D.innerText = output

let number_list_1 = []
let number_list_2 = []
let variable_1 = 0
let variable_2 = 0
let placeholder = 0
let operation_active = false
let multiple_operation_active = false
let addition = false
let subtraction = false


function reset_boolean() {
    addition = false
    subtraction = false
}

// Resets everything
function AC() {
    output = 0
    number_list_1 = []
    number_list_2 = []
    operation_active = false
    multiple_operation_active = false
    reset_boolean()
    output_D.innerText = output
}

// stores number inputs in variables
function append_integer(x) {
    if (operation_active == false) {
        number_list_1.push(x)
        variable_1 = Number(number_list_1.join(''))
        output = variable_1
        console.log(variable_1)
        output_D.innerText = output
    }
    else {
        number_list_2.push(x)
        variable_2 = Number(number_list_2.join(''))
        output = variable_2
        console.log(variable_2)
        output_D.innerText = output
    }
}


function addition_boolean() {
    if(multiple_operation_active == false) {
    operation_active = true
    reset_boolean()
    addition = true
    multiple_operation_active = true
    }
    else {
        placeholder = placeholder + variable_1 + variable_2
        number_list_2 = []
        variable_1 = 0
        variable_2 = 0
    }
}

function subtraction_boolean() {
    operation_active = true
    reset_boolean()
    subtraction = true
}

function equals() {
    if (addition == true) {
        output = variable_1 + variable_2 + placeholder
        output_D.innerText = output
    }
    else if (subtraction == true) {
        output = variable_1 - variable_2
        output_D.innerText = output
    }
    else {}
}
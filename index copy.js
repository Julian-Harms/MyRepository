
// initial conditions
let output_D = document.getElementById("output_D")
let output = 0
output_D.innerText = output

let number_list = []
let variable
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
    variable = 0
    
    output_D.innerText = output
}

// deletes last digit of number imput
function Del() {
    number_list.pop()
    variable = Number(number_list.join(''))
    output = variable
    console.log(variable)
    output_D.innerText = output

}

// stores number inputs in variables
function append_integer(x) {
        number_list.push(x)
        variable = Number(number_list.join(''))
        output = variable
        console.log(variable)
        output_D.innerText = output

}

// does the operation that was pressed last.
function operations() {
    if (variable == undefined) {}
    else if (addition_bool == true) {
        placeholder = placeholder + variable
        addition_bool = false
    }
    else if (subtraction_bool == true) {
        placeholder = placeholder - variable
        subtraction_bool = false
    }
    else if (multiplication_bool == true) {
        placeholder = placeholder * variable
        multiplication_bool = false
    }
    else if (division_bool == true) {
        placeholder = placeholder / variable
        division_bool = false
    }
    else {
        placeholder = variable
    }
    console.log(placeholder)
    number_list = []
    variable = undefined
    output = placeholder
    output_D.innerText = output
}

// Goal 1: Basic operations
function addition() {
    operations()
    addition_bool = true
}

function subtraction() {
    operations()
    subtraction_bool = true
}

function multiplication() {
    operations()
    multiplication_bool = true
}

function division() {
    operations()
    division_bool = true

}

function equals() {
    operations()
}
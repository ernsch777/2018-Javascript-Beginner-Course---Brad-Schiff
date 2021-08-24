let pets = [
    { name: "Meowsalot", species: "cat", age: 2 },
    { name: "Barksalot", species: "dog", age: 3 },
    { name: "Purrsalot", species: "cat", age: 8 }
]

console.log(pets.push({ name: "Puppster", species: "dog", age: 1 }))


function nameOnly(x) {
    return x.name
}
let ourTest = pets.map(nameOnly)

let dogs = pets.filter(onlyDogs)

function onlyDogs(x) {
    return x.species == "dog"
}

function onlyBabies(x) {
    return x.age < 3
}

let babyDogNames = pets.filter(onlyDogs).filter(onlyBabies).map(nameOnly)

let myName = "Brad"

function amazingFunction() {
    let myName = "Ernie"
    if (2 + 2 == 4) {
        console.log(myName)
    }
    console.log("inside the function")
}
console.log(myName)
amazingFunction()

let john = {
    firstName: "John",
    lastName: "Doe",
    driveCar() {
        function imAFunctionNotAMethod() {
            console.log(this)
        }
        imAFunctionNotAMethod()
        console.log(this.firstName + " " + this.lastName + " is driving a car")
    }
}

john.driveCar()

function breathe() {
    console.log(this.firstName + " " + this.lastName + " just inhaled and exhaled.")
}
breathe.call(john)


document.addEventListener("click", () => alert("thank you for clicking"))

let myNumbers = [10, 500, 2000]

let doubleNumbers = myNumbers.map(x => x * 2)
console.log(doubleNumbers)

// function cool (){
//   console.log("This is super cool.")
// }

let cool = function () {
    console.log("hey")
}

cool()

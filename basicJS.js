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
console.log(babyDogNames)
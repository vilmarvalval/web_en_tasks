/*
{
    "model":"Corolla",
    "colour":"Red",
    "ade":"3"
}
*/

let carArray=[];
let nextId = 1;

//Add new element
function addOne(model, colour, age){
    //check if empty or undefined
    if (!model || !colour || !age){
        return false;
    }

    const newCar = {
        id: nextId++, //assign and increment
        model,
        colour,
        age
    };

    carArray.push(newCar); //add new car
    return newCar; //return freshly added
}

function getAll(){
    return carArray
}

//find element by ID
function findById(id){
    const numericId = Number(id); //convert to number
    const car = carArray.find(item => item.id === numericId); //find matching ID
    return car || false; //if no ID match, return false
}

//Update element by ID
function updateOneById(id, updatedData){
    const car = findById(id);
    if (car){ //update properties only if theyve been provided.
        if (updatedData.model) car.model=updatedData.model;
        if (updatedData.colour) car.colour=updatedData.colour;
        if (updatedData.age) car.age=updatedData.age;
        return car; //if successful, returns updated car object
    }
    return false; //Else return false
}

//Delete element by ID
function deleteOneById(id){
    const car = findById(id);
    if (car){
        const initialLenght = carArray.length;
        carArray = carArray.filter(car => car.id !== Number(id)); //Filter array to exclude desired id
        return carArray.length < initialLenght; //Return true if array lenght decreased, indicating success
    }
    return false; //Else return false.
}

const Car = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = Car;
const Car = require("./carLib");
//json requests and responses


const getAllCars = (req,res) => {
    const cars = Car.getAll();
    res.json(cars);
};

const createCar = (req,res) =>{
    if (model !== undefined){
        const { model, color, age } = req.body;
        //  -> TypeError: Cannot destructure property 'model' of 'req.body' as it is undefined.
        
        //const { model='N/A', color='N/A', age='N/A' } = req.body || {};
        //  -> TypeError: Cannot read properties of undefined (reading 'model')

        const newCar = Car.addOne(model,color,age);
    }
    if (newCar){
        res.json(newCar);
    } else {
        res.status(500).json({message:"Failed to create car"});
    }
};

const getCarById = (req,res) => {
    const carId = req.params.carId;
    const car = Car.findById;
    if (car) {
        res.json(car);
    }else{
        res.status(404).json({message:"Car not found"});
    }
};

const updateCar = (Req, res) => {
    const carId = req.params.carId;

    const {model,color,age} = req.body;

    const updatedCar = Car.updateOneById(carId,{model,color,age});

    if (updatedCar){
        res.json(updatedCar);
    }else{
        res.status(404).json({message:"Car not found"})
    }
}

const deleteCar = (req,res) =>{
    const carId = req.params.carId;
    
    const isDeleted = Car.deleteOneById(carId);

    if (isDeleted) {
        res.json({message:"Car deleted successfully"});
    }else{
        res.status(404).json({message:"Car not found"});
    }
};

module.exports={
    getAllCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar,
}
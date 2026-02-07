// middleware/customMiddlewares.js

// Middleware #1
const middleware1 = (req, res, next) => {
  console.log("Middleware #1");
  next();
};


// Middleware #2
const middleware2 = (req, res, next) => {
  console.log("Middleware #2");
  next();
};

// Middleware #3
const middleware3 = (req, res, next) => {
  console.log("Middleware #3");
  next();
};

// Middleware #4
const middleware4 = (req, res, next) => {
  console.log("Middleware #4");
  next();
};

// Middleware #5
const middleware5 = (req, res, next) => {
  console.log("Middleware #5");
  next();
};

// Middleware #6
const middlewareNoNext = (req, res,next) => {
  console.log("Middleware #6")
  next()
};

module.exports = {
  middleware1,
  middleware2,
  middleware3,
  middleware4,
  middleware5,
  middlewareNoNext,
};

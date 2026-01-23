/*
//'message' -variable is called before being defined. Var is function-scoped, its available in the whole function.
console.log(message);
var message = "Hi there!";
*/

/*
//Same as above except let is block-scoped so its only available form the point its defined onwards.
console.log(message);
let message = "Hi there";
*/

/*
//it gives an error for showMessage as its trying to access it before initialization
//'ReferenceError: Cannot access 'showMessage' before initialization'
console.log(showMessage());

const showMessage = function(){
    return 'Hi there!';
};
*/

/*
//'const function' needs to be declared before calling it, a 'function' does not.
console.log(showMessage());

function showMessage(){
    return 'Hi there!';
}
*/

    //code reconstructing

//original:
//for(let i=0;i<values.lenght; i++){
//    console.log(values[i])
//}
//let values=[10,20,30]

//fixed(trying to access list before definig it):
let values=[10,20,30]
for(let i=0;i<values.lenght; i++){
    console.log(values[i])
}

/*
//original:
console.log(welcome('Charlie','Munger'));

function welcome(first,last){
    return `Welcome, ${first} ${last}! You last logged in on ${lastLogin},`
};

let lastLogin = '1/1/1970'
*/

/*
//fixed(trying to acces lastLogin before defining it):
let lastLogin = '1/1/1970'
console.log(welcome('Charlie','Munger'));

function welcome(first,last){
    return `Welcome, ${first} ${last}! You last logged in on ${lastLogin},`
};
*/


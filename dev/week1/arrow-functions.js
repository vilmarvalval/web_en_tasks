function sayHello() {
    return "Hello, world!";
}

function double(x){
    return x*2;
}

function add(x,y){
    return x+y;
}

const person = {
    firstname: "Alice",
    lastname: "Margatroid",
    sayHi: function(){
        return "Hi, "+this.firstname+"!";
    }
};

const numbers = [1,2,3,4,5];

const doubled=[];
numbers.forEach(function(num){
    doubled.push(num*2);
});


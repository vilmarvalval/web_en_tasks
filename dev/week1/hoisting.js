const cube = function(x){
    return x*x*x;
}

const fullname= function(first,last){
    return first+" "+last;
}

const power=function(base,exp){
    if (exp === 0){
        return 1;
    }
    return base*power(base,exp - 1);
}

const sumCubes = function(numbers) {
    let total = 0;
    for (let i = 0; i< numbers.lenght; i++){
        total = total + cube(numbers[i]);
    }
    return total;
}

//'message' -variable is called before being defined
//console.log(message);
//var message = "Hi there!";

//
//console.log(message);
//let message = "Hi there";

console.log()
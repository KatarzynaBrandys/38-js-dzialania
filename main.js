function sum (a,b) {
    let x=a+b;
    if (x<0) {
        return ("Wynik jest nieprawidłowy");
    } else {
        return ("Wynik dodawania wynosi "+x);
    }
}

function subtraction (c,d) {
    let y=c-d;
    if (y<0) {
        return ("\nWynik jest nieprawidłowy");
    } else {
        return ("\nWynik odejmowania wynosi "+y);
    }
}

function multiply (e,f) {
    let z=e*f;
    if (z<0) {
        return ("\nWynik jest nieprawidłowy");
    } else {
        return ("\nWynik mnożenia wynosi "+z);
    }
}


function count(num1, num2) {
    return (sum(num1,num2)+subtraction(num1,num2)+multiply(num1,num2));
}

console.log(count(4,2));
console.log(count(4,6));
console.log(count(0,5));
console.log(count(-9,90));

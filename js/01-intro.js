// tipos
// numbers
console.log(4 + 4 * 2);

// string  "" '' ``
console.log(`Esto es un string`)

// boolean
console.log(true, false)
console.log(2 > 4);

// operadores de comparacion
// >, >=, <, <=, ==, ===, !=, !== 

console.log(20 <= 20); // true
console.log(2 == '2'); // true
console.log(2 === '2'); // false
console.log(10 !== '10') // true


//operadores logicos
// &&  ||
console.log(20 <= 20 && 'a' === 'b');
console.log(3 < 1 || 24 === 24) //true

// operador de negacion "!"
console.log(!false); // true
console.log(!true); // false
console.log(!(2 === '2'))// true

// operadores de flujo de control
if (19 >= 18) {
    console.log('es mayor de edad');
} else {
    console.log('Es menor de edad');
}

// variables
var value1 = 0; // ya casi no se usa

let value2 = 10;
const value3 = 12;

// loops

// for( indice, condicion, incrementacion )
for (let i = 0; i < 10; i++) {

    console.log(i);

}

let count = 0;

while (count < 10) {
    console.log('count: ', count)
    count++; // valor centinela
}

// functions

function saludar() {  //funcion regular
    console.log('Hey Coders!')
}

saludar();

const sumar = (a, b) => { // arrow functions  () => {}
    return a + b;
}

console.log(sumar(4, 5));

const restar = (a, b) => a - b; // las funciones flecha tienen return implicito

console.log(restar(8, 2))

// Estructuras de datos

// Arrays
//  [ 0, 1, 2, 3]

const fruits = ['🍓', '🍍', '🍎', '🍈', '🍏', '🍑', '🍐', '🍊', '🍒']

// accediendo a un elemento del array
console.log(fruits[4]);
// acceder al numero de elementos que tiene un array
console.log(fruits.length)

const printFruits = () => {
    let count = 0;
    while (count < fruits.length) {
        console.log(fruits[count]);
        ++count;
    }
}

// printFruits();
// for( varible ; condicion ; incr la varibale  )

const printForFruits = (arrayFruits) => {
    for (let i = 0; i < arrayFruits.length; i++) {
        console.log(arrayFruits[i]);
    }
}

printForFruits(fruits);


// Ejercicio
/*
    En una empresa, se detectaron fallas en una linea de productos
    y se llego a la conclusion que dichos productos tienen el codigo de barras con
    numero impar.

    Crea una funcion que itere cada producto e imprima los codigos impares
*/

const products = [ 123654,124578,895623,125689,147258,369258,147258 ]
    

  const productDetected=(array)=>{

    for( let i=0; i <array.length ;i++){
       
       if( (array[i]%2) !== 0){
         console.log('⚠ Producto defectuoso: ',array[i]);
       }
    }
    
  }
  productDetected(products);


  /*
    Escribir una funcion que reciba por parametro un numero y retorne true si es par y false si es impar
    
    isPair
  */
 
  const isEven = (num)=>{
    if(num%2===0){
        return true;
    }else{
        return false;
    }
  }
 console.log(isEven(7))
























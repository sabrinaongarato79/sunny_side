// conocimientos previos:
// CALLBACK : toda funcion que se pasa por parametro en otra funcion
const sumar = (a,b) => a+b;
const restar = (a,b) => a-b;
const multiplicar=(a,b)=>a*b;
const division=(a,b)=> a/b;

//                    n     n      otra funcion
const calculadora = (num1, num2, functOperator) => {
    return functOperator(num1, num2)
}

console.log( calculadora(4,5,sumar) )
console.log( calculadora(10,3,restar))
console.log(calculadora(5,8,multiplicar))
console.log(calculadora(8,4,division))

console.log(calculadora( 4,5, (a,b)=>a+b ))

// Arrays, estructura y metodos

// Propiedades del array
//  array.length => numero de elementos que tiene el array

// Metodos iteradores de los arrays

//1. array.forEach()

const fruits = ['🍓', '🍍', '🍎', '🍈', '🍏', '🍑', '🍐', '🍊', '🍒'];

fruits.forEach( (el, index)=>{
    console.log(`elemento ${el} en posicion ${index}`)
});

//2. array.find() 
const result = fruits.find( (el)=> el === '🥑' )
console.log('producto encontrado: ', result);

// Ejercicio:
// Crear una funcion getFruit() que reciba por parametro una fruta y devuelva la fruta y en el caso de no encontrar la fruta, que devuelva un string 'No se encontro la fruta'
const getFruit=(fruta)=>{
    const result = fruits.find( (el) =>el === fruta );

    if (result!==undefined) { //result es distinto de undefined
        return result;
    } else { //result es undefined
        return 'no se  encontro la fruta';
    }
}

console.log(getFruit('🍋'))

// 3. array.filter()
// Filter recorre un array y devuelve un nuevo array con los elementos que cumplan una determinada condicion

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

const pares = numeros.filter( (el)=> el%2===0 );
console.log(pares);

const impares = numeros.filter((el)=>el%2!==0);
console.log(impares); 


// 4. array.map()
//  Recorre un array y devuelve un nuevo array con el mismo numero de elementos que tiene el array que devolvio pero este nuevo array puede estar modificado

// Con map tambien podemos crear una verdadera copia de un array.

const colors = [ "#FFFFFF","#e60000","#0f00e6","#30b200"]

const transparentColors = colors.map( el => el+'25'  );
console.log( transparentColors );

// 5. array.reduce()
// Recorre un array y reduce los elementos del array a un solo numero
const total = numeros.reduce( (acumulador,valorActual)=> acumulador + valorActual ,0 )
console.log('total: ', total)

// Ejercicio
// Crear una funcion que reciba un array como parametro y devuelva el promedio de la suma de todos los elementos de de dicho array  getPromedio(array)

const notas = [8,9,7,6,10,8,7,9,4,6,5];

const getPromedio = (array) => {
    const total= array.reduce( (acumulador,valorActual) =>  acumulador + valorActual,0 );
    return total / array.length;
};
console.log(getPromedio(notas))

// getPromedio( notas );




/* Objetos */

const cinta = {

    size: 'L',
    color: 'cream',
    large: 120,
    paste: function(){
        console.log('pegar con cinta');
        this.large = this.large - 10;
    }

}

console.log( cinta.size );
console.log( cinta.color );
cinta.paste()

console.log( cinta.large );



/* Ejercicio propuesto */

const products = [
    {
        id:1,
        name:'manzana',
        price:450,
        unity: 'Kg',
        image:'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        sale: false
    },
    {
        id:2,
        name:'anana',
        price:650,
        unity: 'Kg',
        image:'https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        sale: false
    },
    {
        id:3,
        name:'naranja',
        price:280,
        unity: 'Kg',
        image:'https://images.pexels.com/photos/2090902/pexels-photo-2090902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        sale: true
    },
    {
        id:4,
        name:'banana',
        price:380,
        unity: 'Kg',
        image:'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        sale: true
    }
]


/* Ejercicio */
// Crear una funcion que recorra la coleccion de productos (array) y me devuelva un nuevo array solamente con los productos que estan de oferta

const getOnSale = () => {
    return products.filter(fruit=>fruit.sale===true);
}

/*
console.log( getOnSale() );
*/

// Crear una funcion que recorra la coleccion de productos y devuelva un elemento por id, este id hay que pasarlo por parametro cuando llamo a la funcion.

const getProductById = ( id ) => {
   return products.find(fruit=>fruit.id===id);
}
console.log(getProductById(10));










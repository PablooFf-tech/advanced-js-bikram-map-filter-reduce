//resuelve los ejercicios aqui

// ejercicio 1
const numeros = [4, 5, 6, 7, 8, 9, 10];
const elevados = () => numeros.map(numero => numero ** numero);

// ejercicio 2
const listacomida = ['pizza', 'ramen', 'paella', 'entrecot'];
const paises = ['italia', 'japon', 'valencia'];
const resultado2 = listacomida.map((comida, indice) => {
    if (comida === 'entrecot') return `aunque no como carne, el ${comida} es sabroso`;
    return `como soy de ${paises[indice]}, amo comer ${comida}`;
});

// ejercicio 3
const personal = [
    {
        nombre: 'pepe',
        rol: 'el gefe',
        aficiones: ['leer', 'ver pelis']
    },
    {
        nombre: 'ana',
        rol: 'vecaria',
        aficiones: ['nadar', 'vailar']
    },
    {
        nombre: 'luis',
        rol: 'programador',
        aficiones: ['dormir', 'comprar']
    },
    {
        nombre: 'carlos',
        rol: 'secretario',
        aficiones: ['futbol', 'queso']
    }
];
const resultado3 = personal.map(persona => `${persona.nombre} es ${persona.rol} y le gusta ${persona.aficiones.join(' y ')}`);

// ejercicio 4
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado4 = numeros2.filter(numero => numero % 2 !== 0);

// ejercicio 5
const listacomida2 = [
    {
        nombre: 'kebab',
        esvegetariano: true
    },
    {
        nombre: 'hamburguesa queso',
        esvegetariano: false
    },
    {
        nombre: 'hamburguesa',
        esvegetariano: true
    },
    {
        nombre: 'entrecot',
        esvegetariano: false
    }
];
const resultado5 = listacomida2
    .filter(comida => comida.esvegetariano)
    .map(comida => {
        const terminacion = comida.nombre.includes('hamburguesa') ? 'a' : 'o';
        return `que ric${terminacion} ${comida.nombre} me voy a comer!`;
    });

// ejercicio 6
const inventario = [
    {
        nombre: 'telefono movil',
        precio: 199
    },
    {
        nombre: 'tele',
        precio: 459
    },
    {
        nombre: 'viaje',
        precio: 600
    },
    {
        nombre: 'mascarilla',
        precio: 1
    }
];
const resultado6 = inventario
    .filter(articulo => articulo.precio > 300)
    .map(articulo => articulo.nombre);

// ejercicio 7
const numeros3 = [39, 2, 4, 25, 62];
const resultado7 = numeros3.reduce((total, numero) => total * numero);

// ejercicio 8
const elementosfrase = [
    'me',
    'llamo',
    'pablo',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];
const resultado8 = elementosfrase.reduce((frase, palabra) => `${frase} ${palabra}`);

// ejercicio 9
const libros = [
    {
        nombre: 'aprender javascript en 24 horas',
        autor: 'pablo flores',
        precio: 25,
        categoria: 'code'
    },
    {
        nombre: 'cien años de soledad',
        autor: 'gabriel garcia marquez',
        precio: 18,
        categoria: 'novela'
    },
    {
        nombre: 'la sombra del viento',
        autor: 'carlos ruiz zafon',
        precio: 22,
        categoria: 'novela'
    },
    {
        nombre: 'programacion avanzada en js',
        autor: 'pablo flores',
        precio: 35,
        categoria: 'code'
    }
];
const resultado9 = libros
    .filter(libro => libro.categoria === 'code')
    .reduce((total, libro) => total + libro.precio, 0);

// ! || Crear y agregar elementos al dom

// Solo se ha creado, aún no se agrega al DOM
const etiquetaH1 = document.createElement('h1')

// Solo se ha creado, aún no se agrega al DOM
const texto = document.createTextNode('¡Hola, Mundo!')

// Obtengo el elemento padre
const parentElement = document.querySelector('selector')
// Creo el nodo a insertar
const h3 = document.createElement('h3')
// Creo el texto del nodo
const texto = document.createTextNode('Hola!')
// Inserto el texto al nodo
h3.appendChild(h3)
// Inserto el nodo al padre
parentElement.appendChild(h3)

// Obtengo el elemento padre
const parentElement = document.querySelector('selector')
// Agrego al elemento padre
parentElement.append('agrego un texto', document.createElement('div'))

// Obtengo el elemento padre
const parentElement = document.querySelector('selector')
// Creo un elemento
const titulo = document.createElement('h1')
// Obtengo la referencia del elemento del que quiero insertar antes:
const referencia = document.querySelector('selector')
// ¡Lo insertamos!
parentElement.insertBefore(titulo, referencia)

// Obtengo el elemento padre
const parentElement = document.querySelector('selector')
// Creo un elemento
const nodo = document.createElement('span')
parentElement.insertAdjacentElement('beforebegin', nodo)

// ! || Otras formas de agregar elemtentos

//Sirve para leer Html
document.querySelector('.selector').outerHTML
document.querySelector('.selector').innerHTML =
	'Aquí puedes agregar nuevas cosas'

// ! || Otras formas de agregar elemtentos

const AgregarElementos = document.querySelector('.selector')
//Atributo, estos solo se encuentran dentro de las etiquetas <> html
AgregarElementos.className
//Propiedad, estos cambian dentro de el navegador
AgregarElementos.value

// ! || Eliminar nodos

const eliminarNodos = document.querySelector('.selector')

eliminarNodos.removeChild()
eliminarNodos.remove()
document.removeChild()
document.replaceChild()

eliminarNodos.parentElement.removeChild(eliminarNodos)
//Hace lo mismo de arriba
eliminarNodos.remove()

// ! || Operaciones en lote

//Agregar varios elementos
//Forma no optima
for (let i = 0; i < 100; i++) {
	const node = document.createElement('input')
	document.body.appendChild(node)
}
//Forma optima
let nodos = []
for (let i = 0; i < array.length; i++) {
	const node = document.createElement('input')
	nodos.push(node)
}
document.body.append(...nodos)


// Spread operator: https://developer.mozilla.org/es/docs/conflicting/Web/JavaScript/Reference/Operators/Spread_syntax

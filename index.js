//traer la dependencia del componente suma

import { sumar, restar } from './sumar.js'
import materias from './materias.js'

//let: variables 

/*let a = 10
//constantes: const

const b = 29


//funcion para sumar dos numeros

console.log(`suma de a + b : ${ sumar(a , b) }`)
console.log(`resta de a-b : ${ restar(a, b)}`)*/

//Desestructuracion

//let {first_name, last_name , dni } = estudiantes

/*console.log(`Nombre Estudiante: ${first_name}`)
console.log(`Apellido Estudiante: ${last_name}`)
console.log(`Apellido Estudiante: ${dni}`)

//console.log(`Id Estudiante: ${estudiantes.id}`)*/

//1. recorrido de arreglo:  forEach

materias.forEach((materia)=> {
    if(materia.profesor === 'Cristian Buitrago'){
    console.log(`Materia: ${materia.name}`)
    console.log(`Notas: ${materia.notas}`)
        }
    }
);

//2.Convertir un arreglo de profesores 

let profesores = materias.map(function(materia){
    return materia.profesor
})

//3. Agregar una materia al arreglo de materias
//Utilizzar el metodo push

materias.push({
    id: 5,
    name: "Cultura fisica",
    profesor: "Luis Vaquero",
    notas : [2, 2.5 ]
})

//4. Busqueda en arreglos: 
// Metodo find

const PHP = materias.find(function(materia){
     return materia.profesor === 'Cristian Buitrago'
})
//console.log(materias)
console.log(PHP)

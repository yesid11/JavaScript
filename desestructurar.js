let colors=require('colors')

const estudiantes1=["Juan Diego", "Juan Camilo", "Nicolas", "Esteban", "Nicole"]
const estudiantes2=["Cristian", "Maria"]
const estudiantes3=["Mariana",...estudiantes1, "Andres",...estudiantes2]

//desestructuracion arreglo:

let [ jd, jc, n, e, ni]=estudiantes1

console.log(jd.green.bold, jc.blue.italic,n.magenta.underline ,e.red.hidden, ni.yellow.bold)

console.log(estudiantes3)
//Operador spread(resto)
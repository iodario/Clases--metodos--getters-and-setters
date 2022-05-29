// clases Desarrollo util

//objeto literal
const objeto = {
    atributo: 5,
    metodo: () => {
        console.log('Hola');
    }
};

//clases
//desarrollar una sistema de cursos, con arrays
console.log("Clase curso sin getter y setter")

class Curso {
    constructor(titulo, dificultad) {
        this.titulo = titulo;
        this.dificultad = dificultad;
        // puedo poner aqui tantos atributos como quiera
        this.lecciones = [];
    }
    //metodos para agregar o eliminar lecciones
    agregarLeccion(leccion) {
        this.lecciones.push(leccion);
    }
    eliminarUltimaLeccion() {
        this.lecciones.pop();
    }
}

//instanciamos objetos

const cursoJS = new Curso('Javascript', 1);
const cursoTS = new Curso('Typescript', 1);

console.log(cursoJS);
console.log(cursoTS);

cursoJS.agregarLeccion('intro a JS')
cursoJS.agregarLeccion('variables')
cursoJS.agregarLeccion('tipos de datos')

cursoJS.eliminarUltimaLeccion();

//manipulando atributos con metodos
//puedo modificar el valor de los atributos en cualquier momento, 
//como asi tambien puedo crear funciones , que no esten declaradas en la clase
//aunque esta ultima es una mala practica, ya que no se va a aplicar a todos los objetos instanciados

cursoJS.dificultad = 4;
cursoJS.loquemedelagana = "loquesea";



//*
//****getter y setters ****//
console.log("Ejemplos con getter y setter")
class Curso2 {
    constructor(titulo, dificultad) {
        this.titulo = titulo;
        this._dificultad = dificultad;
        this.lecciones = [];
    }

    get dificultad() {
        console.log('getter')
        return this._dificultad;
    }

    set dificultad(nuevaDificultad) {
        if (nuevaDificultad >= 0 && nuevaDificultad <= 5) {
            console.log('setter')
            this._dificultad = nuevaDificultad;
        } else {
            console.log("No hago nada")
        }
    }

    agregarLeccion(leccion) {
        this.lecciones.push(leccion);
    }
    eliminarUltimaLeccion() {
        this.lecciones.pop();
    }
}
//para evitar un Uncaught RangeError: Maximum call stack size exceeded, bucle infinito
//necesitamos hacer un indicativo de propiedad _privada

const cursoJS2 = new Curso2("Javascript", 2);


cursoJS2.dificultad = 5;           //usamos el setter
console.log(cursoJS2.dificultad);   //usamos el getter

//asignamos un valor no permitido por el setter
cursoJS2.dificultad = 7;          //devuelve 'No hago nada"


//atributos estaticos static
//para otro dia 
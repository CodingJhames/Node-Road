import { Tarea } from "./tarea.js";


export class Tareas {

    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys( this._listado ).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        } )
        return listado;
    } 


    constructor() {
        this._listado = {};
    };

    cargartareasFromArray( tareas = [] ) {

        tareas.forEach( tarea => {
            this._listado[ tarea.id ] = tarea;
        });
    }

    crearTarea( desc=''){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    };

    listadoCompleto(){
        // 1. en verde
        // Completada: Verde
        // Pendiente: Rojo

        // 1. Alma : Completada | Pendiente
        // 2. Realidad : Completada | Pendiente
        // 3. Poder : Completada | Pendiente

        


    };


};


// module.exports = Tareas;

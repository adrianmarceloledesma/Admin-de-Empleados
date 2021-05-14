const Empleado = require('./Empleado')

class Programador extends Empleado{
    static lenguajes = ['php','net','phyton']

    constructor(id,nombre,apellido,edad,lenguajeProgramacion){
        super(id,nombre,apellido,edad);
        if(Programador.lenguajes.includes(lenguajeProgramacion)){
            this.lenguajeProgramacion = lenguajeProgramacion;
        }else{
            throw new Error('Error! sólo se se puede elegir php, net o phyton')
        }
    }
}
module.exports = Programador
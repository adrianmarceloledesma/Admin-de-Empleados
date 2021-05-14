const Empleado = require('./Empleado')

 class Diseñador extends Empleado{
    static diseñador = ['web', 'grafico']

    constructor(id,nombre,apellido,edad,tipoDiseñador){
        super(id,nombre,apellido,edad);
        if(Diseñador.diseñador.includes(tipoDiseñador)){
            this.tipoDiseñador = tipoDiseñador;
        }else{
            throw new Error('Error! sólo se se puede elegir web o grafico')
        }
    }
}

module.exports = Diseñador

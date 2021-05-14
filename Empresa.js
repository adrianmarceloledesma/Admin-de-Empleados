class Empresa{
    constructor(id,nombre){
        this.id= id,
        this.nombre = nombre,
        this.empleados = [];
    }

    agregarEmpleados(empleado){
        this.empleados.push(empleado)
       
    }

    
    listadoEmpleados(){
        this.empleados.map(empleado => console.log(empleado))
    }

    buscarEmpleado(id){
        const resultado = this.empleados.filter(empleado => id == empleado.id)
        if(resultado.length != 0) {
            console.log(resultado)
            
        }else{ 
            console.log('No se encuentra el id buscado')
        }
    }


    promedioEdadEmpleado(){
        var edades = this.empleados.map(empleado => empleado.edad)
        let suma = edades.reduce((a,b) => a += b)
        let promedio = parseInt(suma / edades.length)
        console.log(`El promedio de edad de los empleados es de: ${promedio} años`)
    }
    
}
module.exports = Empresa
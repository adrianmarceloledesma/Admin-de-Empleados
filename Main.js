const Empresa = require('./Empresa');
const Programador  = require('./Programador')
const Diseñador  = require('./Diseñador')


function main() {

    // ejemplo
    const empresa = new Empresa(1, 'Summa Solutions')
    
    const empleado1 = new Programador(1,'marcelo','ledesma',20,'php')
    const empleado2 = new Programador(2,'julian','roberto',24,'phyton')
    const empleado3 = new Programador(3,'Julio','Benavidez',50,'php')
    const empleado4 = new Diseñador(4,'Sergio','Ledesma',28,'web')
    
    // agregar empleados
    empresa.agregarEmpleados(empleado1)
    empresa.agregarEmpleados(empleado2)
    empresa.agregarEmpleados(empleado3)
    empresa.agregarEmpleados(empleado4)
    
    // listado empleados
    empresa.listadoEmpleados()
    
    // // buscar empleados
    empresa.buscarEmpleado(2)
    
    // crear promedio de edad
    empresa.promedioEdadEmpleado()
      
}


if (require.main === module) {
  main()
}
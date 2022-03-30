
let opcion = "";
let arrayProductos = [];
class Producto{
    constructor(nombre, precio, color){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.color = color
    }
}

menu();

function menu(){
    while (opcion !=4) {
        alert(
                "MENU\n"+
                "1) CARGAR PRODUCTO\n"+
                "2) LISTAR PRODUCTO\n"+
                "3) FILTRAR PRODUCTO\n"+
                "4) SALIR")
        opcion=parseInt(prompt("ELIJA OPCIÓN"));
        switch (opcion) {
            case 1:
                let ingreso = "S"
                while(ingreso!="N"){
                    agregarProducto();
                    ingreso = prompt("DESEA INGRESAR OTRO PRODUCTO (S/N)").toUpperCase()
                }
                //ingreso = ingreso.toUpperCase()
                break;

            case 2:
                listarProductos();
                break;

            case 3:
                let nombre = prompt("INGRESE NOMBRE DE PRODUCTO A FILTRAR: ");
                console.log(filtrarProducto(nombre));
                
                break;    
            
            case 4:
                alert("HASTA LA PRÓXIMA");
                break;    
        
            default:
                alert("OPCION INCORRECTA")
                break;
        }                
    }
}


function agregarProducto(){
    arrayProductos.push(new Producto(prompt("INGRESE NOMBRE:").toUpperCase(),prompt("INGRESE PRECIO:"),prompt("INGRESE COLOR:"))) 
}

function listarProductos(){
    for(let Producto of arrayProductos){        
        console.log(`Producto: ${Producto.nombre} color:  ${Producto.color}: $ ${Producto.precio}`)
        }
}

function filtrarProducto(nombre){
    console.log(nombre);
    return arrayProductos.find(objeto => objeto.nombre === nombre.toUpperCase());
}
for (let i = 0; i < arrayProductos; i++) {
    let busqueda = filtrarProducto(nombre, prompt('INGRESAR NOMBRE DE PRODUCTO'));
    if(busqueda != undefined){
        alert('PRODUCTO '+ busqueda.nombre+' COLOR '+ busqueda.color+' PRECIO '+ busqueda.precio);
    }else{
        alert('NO EXISTE PRODUCTO CON ESE NOMBRE');
    }
}

    














/*
let opcion="";
let arrayProductos=[]
class producto {
    constructor(nombre,color,precio){
        this.nombre=nombre;
        this.color=color;
        this.precio=precio;
    }
}

menu();

function menu(){
    while(opcion!="salir"){
        opcion=prompt(`seleccione la opcion deseada:
                                            1. Agregar producto
                                            2. Ver productos
                                            << SALIR`)
        if (opcion==1){
            agregarProducto();
        }else if (opcion==2){
            listarProductos();
        }
    }
}

function agregarProducto(){
   arrayProductos.push(new producto(prompt("Nombre:"),prompt("Color:"),prompt("Precio:"))) 
}
function listarProductos(){
    for(let producto of arrayProductos){
        // console.log(producto.nombre+" de color "+producto.color+":"+" $"+producto.precio)
        console.log(`${producto.nombre} de color ${producto.color}: $${producto.precio}`)
        }
}
*/
window.addEventListener('DOMContentLoaded', e =>{
    fetch('https://cremeria.herokuapp.com/products/busqueda')
    .then(res => res.json())
    .then(data =>{
        if(data.response == 'success'){
            const moleszaachila = data.data;
            

const formulario = document.querySelector('#busquedaproducto');
const boton = document.querySelector('#botonproducto');
const resultado = document.querySelector('#producto');




const filtrar = () =>{
  //console.log(formulario.value);

  resultado.innerHTML = "";

  const texto = formulario.value.toLowerCase();

  for(let moleszaachil of moleszaachila){
      let productos = newFunction(moleszaachil);
      if(productos.indexOf(texto) !== -1){
            
            document.getElementById("producto").value=moleszaachil.nombre;
            document.getElementById("precio").value=moleszaachil.precio;
            
           
            $( "#botonproducto" ).click(function() {

               
              });

              
        
        }
    }
    if(resultado.innerHTML == ''){
        
    }

}

$('#tiket').click(function () {

    function tiket(nombre, precio, cantidad){
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
      }



     nombreCapturar = document.getElementById("producto").value;
     precioCapturar = document.getElementById("precio").value;
     cantidadCapturar = document.getElementById("cantidad").value;
    
    if(cantidadCapturar == ""){ 
        cantidadCapturar = 1
    }else{
        cantidadCapturar
    }

  
    nuevoTiket = new tiket(nombreCapturar, precioCapturar, cantidadCapturar);
      console.log(nuevoTiket);
      agregar();
      
          
                                                                  
   
      
    $('input[type="text"]').val('');
    return false;
  });

  var tiketDatos =[];
  
   total1 = ''; 

  
  //funcion agregar 
  function agregar(){

    const data = nombreCapturar.split('-');
    console.log(data);

    const existe = tiketDatos.findIndex(e => e.nombre == data[0]);

    if (existe != -1 ) {
     
      alert("El producto ya ha sido agregado");

    }else{
      tiketDatos.push({
        nombre: data[0],
        id: data[2],
        precio: nuevoTiket.precio,
        cantidad: nuevoTiket.cantidad
        
      });

    tiketDatos.push(nuevoTiket);
    subtotal = nuevoTiket.precio * nuevoTiket.cantidad

    
    document.getElementById("venta_detalle").innerHTML +='<td>'+nuevoTiket.nombre+'</td><td>'+nuevoTiket.precio+'</td><td>'+nuevoTiket.cantidad+'</td>'+'</td><td class="dato">'+subtotal+'</td><td><btn id="boton01" value="Eliminar" title="Eliminar" class="btn btn-danger btn-delete"><i class="fas fa-trash"></i></td>'
    }
    //suma de datos
    var suma = 0;
    $('#tabla tb.dato').each(function(){ //filas con clase 'dato', especifica una clase, asi no tomas el nombre de las columnas
    suma += parseInt($(this).find('td').eq(2).text()||0,10) //numero de la celda 3
     })
    console.log(suma)

    //eliminar datos del array
    $('.btn-delete').click( function(e){
      e.preventDefault();
      var row = $(this).parent().parent()[0];
      $(row).remove();
    });
  }
  
 

boton.addEventListener('click', filtrar);
//para filtrar sin precionar buscar 
formulario.addEventListener('keyup',filtrar);
//ejecuta la funcion al inicio para que me aparescan todos los datos
//filtrar();

       }
    })
    .catch(err =>{
        console.error(err);
    });

    //evento eliminar
  


   
});
function newFunction(moleszaachil) {
  return moleszaachil.nombre.toLowerCase();
}


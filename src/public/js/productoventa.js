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



    var nombreCapturar = document.getElementById("producto").value;
    var precioCapturar = document.getElementById("precio").value;
    var cantidadCapturar = document.getElementById("cantidad").value;
    
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
  
   total = 0; 

  
  //funcion agregar 
  function agregar(){
    tiketDatos.push(nuevoTiket);
    subtotal = nuevoTiket.precio * nuevoTiket.cantidad
    document.getElementById("venta_detalle").innerHTML +='<td>'+nuevoTiket.nombre+'</td><td>'+nuevoTiket.precio+'</td><td>'+nuevoTiket.cantidad+'</td>'+'</td><td>'+subtotal+'<td ><btn id="boton01" value="Eliminar" title="Eliminar" class="btn btn-danger btn-delete"><i class="fas fa-trash"></i></td>'
    
    let Subtotal = document.querySelector('td' + 'td' + 'td'+ 'td');
    for(let i = 0; i < Subtotal.length; ++i){
      total += parseFloat(Subtotal[i].firstChild.data);
    }

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


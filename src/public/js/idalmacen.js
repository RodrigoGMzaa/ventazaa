window.addEventListener('DOMContentLoaded', e =>{
    fetch('https://cremeria.herokuapp.com/almacen/busqueda')
    .then(res => res.json())
    .then(data =>{
        if(data.response == 'success'){
            const moleszaachila = data.data;
            
  
  const formulario = document.querySelector('#busquedaAlmacen');
  const boton = document.querySelector('#botonAlmacen');
  const resultado = document.querySelector('#inputAlmacen');
  
  const filtrar = () =>{
    //console.log(formulario.value);
  
    resultado.innerHTML = "";
  
    const texto = formulario.value.toLowerCase();
  
    for(let moleszaachil of moleszaachila){
        let almacenes = newFunction(moleszaachil);
        if(almacenes.indexOf(texto) !== -1){
              
              document.getElementById("inputAlmacen").value=moleszaachil.nombre;
              document.getElementById("inputAlmacen2").value=moleszaachil._id;
              return false;
            }
          }
          if(resultado.innerHTML == ''){
             
              return false;
          }
          return false;
      }
      
      boton.addEventListener('click', filtrar);
      //para filtrar sin precionar buscar 
      formulario.addEventListener('keyup',filtrar);
      //ejecuta la funcion al inicio para que me aparescan todos los datos
      
      
              }
          })
          .catch(err =>{
              console.error(err);
          });
  
          
      });
  
      
      
      function newFunction(moleszaachil) {
          return moleszaachil.nombre.toLowerCase();
          return false;
      }
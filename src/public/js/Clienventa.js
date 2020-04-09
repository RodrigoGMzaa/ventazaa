window.addEventListener('DOMContentLoaded', e =>{
  fetch('https://cremeria.herokuapp.com/clien/mostrar')
  .then(res => res.json())
  .then(data =>{
      if(data.response == 'success'){
          const moleszaachila = data.data;
          

const formulario = document.querySelector('#busquedacliente');
const boton = document.querySelector('#botonCliente');
const resultado = document.querySelector('#inputCliente');

const filtrar = () =>{
  //console.log(formulario.value);

  resultado.innerHTML = "";

  const texto = formulario.value.toLowerCase();

  for(let moleszaachil of moleszaachila){
      let cliente = newFunction(moleszaachil);
      if(cliente.indexOf(texto) !== -1){
            
            document.getElementById("inputCliente").value=moleszaachil.nombre;
            document.getElementById("inputCliente2").value=moleszaachil.telefono;
            return false;
          }
        }
        if(resultado.innerHTML == ''){
            resultado.innerHTML +=`
            <p> Categoria no encontrado</p>
            `
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

    $('#tiket').click(function () {
        return false;
    });
    
    function newFunction(moleszaachil) {
        return moleszaachil.nombre.toLowerCase();
        return false;
    }
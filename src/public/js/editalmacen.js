window.addEventListener('DOMContentLoaded', e =>{
    fetch('https://cremeria.herokuapp.com/almacen/busqueda')
    .then(res => res.json())
    .then(data =>{
        if(data.response == 'success'){
            const moleszaachila = data.data;
            

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado'); 
const agre = document.querySelector('#agregado'); 

const filtrar = () =>{
    //console.log(formulario.value);

    resultado.innerHTML = "";

    const texto = formulario.value.toLowerCase();
     const suma = 0;


    for(let moleszaachil of moleszaachila){
        let almacenes = newFunction(moleszaachil);
        if(almacenes.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <form action="/almacen/edit/${moleszaachil._id}" method="POST" >

            <div class="card-columns" >
            <h5>${moleszaachil.nombre }</h5>
            <h5>${moleszaachil.stock}</h5>
            <p>Agregar</p>
            <input type="anumero" id="agregado">
            <h5> suma </h5>
            <div class="card-header" >
                <button type="submit" class="btn btn-primary">Guardar</button>
            </div>
            </div>
            </form>
            `
        }
        suma = moleszaachil.stock + agregado
    }
    if(resultado.innerHTML == ''){
        resultado.innerHTML +=`
        <p> Categoria no encontrado</p>
        `
    }
}

boton.addEventListener('click', filtrar);
//para filtrar sin precionar buscar 
formulario.addEventListener('keyup',filtrar);
//ejecuta la funcion al inicio para que me aparescan todos los datos
filtrar();

        }
    })
    .catch(err =>{
        console.error(err);
    });
});
 


function newFunction(moleszaachil) {
    return moleszaachil.nombre.toLowerCase();
}

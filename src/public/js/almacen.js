window.addEventListener('DOMContentLoaded', e =>{
    fetch('https://cremeria.herokuapp.com/almacen/busqueda')
    .then(res => res.json())
    .then(data =>{
        if(data.response == 'success'){
            const moleszaachila = data.data;
            

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado'); 

const filtrar = () =>{
    //console.log(formulario.value);

    resultado.innerHTML = "";

    const texto = formulario.value.toLowerCase();

    for(let moleszaachil of moleszaachila){
        let almacenes = newFunction(moleszaachil);
        if(almacenes.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <div class="moleszaachil" id="moleszaachil._id">
            <td>${moleszaachil.nombre}</td>
            <td>${moleszaachil.stock}</td>
            <td>${moleszaachil.costo}</td>
            
            <td> <a  href="/almacen/delet/${moleszaachil.nombre}" class="btn btn-danger"><i class="fas fa-trash-alt"></i></a> </td>
            <td> <a  href="/almacen/edit/${moleszaachil.stock}" class="btn btn-success"><i class="fas fa-pen"></i></a> </td>
            </div> 
            `
        }
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

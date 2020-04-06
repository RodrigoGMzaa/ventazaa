window.addEventListener('DOMContentLoaded', e =>{
    fetch('https://cremeria.herokuapp.com/categorys/cate')
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
        let category = moleszaachil.category.toLowerCase();
        if(category.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <div class="moleszaachil" id="moleszaachil._id">
            <td>${moleszaachil.category}</td>
            
            <td> <a  href="/categorys/delet/${moleszaachil._id}" class="btn btn-danger"><i class="fas fa-trash-alt"></i></a> </td>
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
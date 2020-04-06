import { link } from "fs-extra";

$(document).ready(function(){

    var show = 0; 

    var direc = 'http://localhost:3000/';

    $('.show').on('click', function(){

        if(show == 1){
            $('.content-menu').addClass("content-menu2");
            show = 0;
        }else{
            $('.content-menu').removeClass("content-menu2");
            show = 1;
        }
        

    })

    $('.href').on('click', function(){
        url= direc+products/mostrar;
    })

})
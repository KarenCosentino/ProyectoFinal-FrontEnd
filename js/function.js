
let contador = 0;
function mostrarInfo(mostrar) {
    if(contador === 0){
        let mostrarInfo = mostrar;
        document.getElementById(mostrarInfo).style.display = 'block';
        contador++;
    }else{
        ocultarInfo(mostrar);
        contador--;
    }
   
}

function ocultarInfo(ocultar){
    let ocultarInfo = ocultar;
    document.getElementById(ocultarInfo).style.display = 'none';
}
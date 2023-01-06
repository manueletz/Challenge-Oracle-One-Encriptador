/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

var letras = ["e","i","a","o","u"];
var letrasCodificadas=["enter","imes","ai","ober","ufat"];

function encriptarLetra(letra) {
    letraEncriptada=letra;
    for(var indice=0; indice<letras.length; indice++){
        if (letra==letras[indice]){
            letraEncriptada=letrasCodificadas[indice];
            break;
        }
    }
    return letraEncriptada;
}


textoParaEncriptar="gato";
textoEncriptado="";
console.log("Texto Original: "+ textoParaEncriptar)
for(var indice=0; indice<textoParaEncriptar.length; indice++){
    
    textoEncriptado+= encriptarLetra(textoParaEncriptar[indice]);
    //console.log(textoParaEncriptar[indice]);
    
}
console.log("Texto Encriptado: "+ textoEncriptado);
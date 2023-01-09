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
    var letraEncriptada=letra;
    for(var indice=0; indice<letras.length; indice++){
        if (letra==letras[indice]){
            letraEncriptada=letrasCodificadas[indice];
            break;
        }
    }
    return letraEncriptada;
}

function encriptarTexto(texto) {
    textoEncriptado=""
    for (var indice=0; indice<texto.length; indice++){
        textoEncriptado+=encriptarLetra(texto[indice]);
    }
    return textoEncriptado;
}

function desencriptarTexto(texto){
    //Buscar texto de dos letras ai
    //La letra "a" es convertida para "ai"
    var textoDescriptado=""
    for(var indice=0; indice<texto.length; indice++){
        
        if (texto.slice(indice,indice+2)=="ai"){
            textoDescriptado+="a";
            if (indice+1<texto.length){
                indice+=1
            }else{
                break;
            }
        }else{
            textoDescriptado+=texto[indice]
        }

    }

    texto=textoDescriptado
    textoDescriptado=""

    //Buscar texto de cuatro letras 
    //La letra "i" es convertida para "imes"
    //La letra "o" es convertida para "ober"
    //La letra "u" es convertida para "ufat"
    //gatober
    for(var indice=0; indice<texto.length; indice++){
        if (texto.slice(indice,indice+4)=="imes" ||  texto.slice(indice,indice+4)=="ober" || texto.slice(indice,indice+4)=="ufat"){
            if (texto.slice(indice,indice+4)=="imes"){
                textoDescriptado+="i";
            }
            if (texto.slice(indice,indice+4)=="ober"){
                textoDescriptado+="o";
            }
            if (texto.slice(indice,indice+4)=="ufat"){
                textoDescriptado+="u";
            }
            
            if (indice+3<texto.length){
                indice+=3;
            }else{
                break;
            }
        }else{
            textoDescriptado+=texto[indice]
        }
    }

    texto=textoDescriptado
    textoDescriptado=""

    //Buscar texto de cinco letras
    //La letra "e" es convertida para "enter" 
    for(var indice=0; indice<texto.length; indice++){
       
        if (texto.slice(indice,indice+5)=="enter"){
            textoDescriptado+="e";
            if (indice+4<texto.length){
                indice+=4;
            }else{
                console.log("break en indice: "+indice)
                break;
            }
        }else{
            textoDescriptado+=texto[indice]
        }
    }

    return textoDescriptado
}


//textoParaEncriptar="gato";
textoParaEncriptar="eucalipto";
//textoParaEncriptar="albericoque";

textoEncriptado="";
console.log("Texto Original: "+ textoParaEncriptar)
/*
for(var indice=0; indice<textoParaEncriptar.length; indice++){
    textoEncriptado+= encriptarLetra(textoParaEncriptar[indice]);
}
*/
//textoEncriptado=encriptarTexto(textoParaEncriptar);


var texto1 = document.getElementById("texto1");
var elementosinicio = document.getElementById("elementosinicio");
var resultado = document.getElementById("resultado");

function EncriptarTexto1() {
    textoGlobal= encriptarTexto(texto1.value);
    //textoGlobal="Modificado";
    console.log(textoGlobal);
    elementosinicio.style.display='none';
    resultado.style.display='block';
    resultado.style.color= '#495057';
    resultado.innerHTML = textoGlobal;
    //return textoGlobal;
}



//mitexto = texto1.value;
//console.log(mitexto);
//buttonencriptar.onclick = console.log(encriptarTexto(texto1.value));
var buttonencriptar = document.getElementById("buttonencriptar");
var buttondesencriptar = document.getElementById("buttondesencriptar");
buttonencriptar.onclick = EncriptarTexto1;

//console.log("Texto Encriptado: "+ textoEncriptado);
//console.log("Texto Desencriptado: "+ desencriptarTexto(textoEncriptado))
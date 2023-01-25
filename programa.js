/*
Encriptador de Texto.
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encriptarLetra(letra) {
    var letras = ["e","i","a","o","u"];
    var letrasCodificadas=["enter","imes","ai","ober","ufat"];
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
    var textoEncriptado="";
    for (var indice=0; indice<texto.length; indice++){
        textoEncriptado+=encriptarLetra(texto[indice]);
    }
    return textoEncriptado;
}

function desencriptarTexto(texto){
    //Buscar texto de 2 letras ai
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

    //Buscar texto de 4 letras 
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

    //Buscar texto de 5 letras
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

var texto1 = document.getElementById("texto1");
var elementosinicio = document.getElementById("elementosinicio");
var buttonencriptar = document.getElementById("buttonencriptar");
var buttondesencriptar = document.getElementById("buttondesencriptar");
var resultado = document.getElementById("resultado");
var buttoncopiar = document.getElementById("buttoncopiar");

function encriptarTextoRemitido() {
    resultado.innerHTML = "";
    if (validarTextoPermitido(texto1.value.toLowerCase())==false){
        alert("Favor verificar el texto ingresado, existen caracteres no permitidos");
        return;
    }
    var textoFinalEncriptado= encriptarTexto(texto1.value.toLowerCase());
    elementosinicio.style.display='none';
    resultado.style.display='block';
    resultado.style.color= '#495057';
    resultado.innerHTML = textoFinalEncriptado;
    resultado.style.display='block';
    resultado.style.resize='none';
    if (textoFinalEncriptado==""){
        buttoncopiar.style.display='none';
    }else{
        buttoncopiar.style.display='block';
    }
    texto1.value="";
}

function desencriptarTextoRemitido() {
    var textoFinalDescriptado= desencriptarTexto(texto1.value.toLowerCase());
    elementosinicio.style.display='none';
    resultado.style.display='block';
    resultado.style.color= '#495057';
    resultado.innerHTML = textoFinalDescriptado;
    resultado.style.display='block';
    resultado.style.resize='none';
    buttoncopiar.style.display='block';
    if (textoFinalDescriptado==""){
        buttoncopiar.style.display='none';
    }else{
        buttoncopiar.style.display='block';
    }
    texto1.value="";
}

function copiar_texto(){
    resultado.select();
    resultado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(resultado.value);
}

buttonencriptar.onclick = encriptarTextoRemitido;
buttondesencriptar.onclick = desencriptarTextoRemitido;
buttoncopiar.onclick = copiar_texto;

texto1.addEventListener("keyup", e =>{
    texto1.style.height = "48px";
    let scHeight = e.target.scrollHeight;
    texto1.style.height = `${scHeight}px`;
});

function validarTextoPermitido(textoEvaluado){
    const textoValido="abcdefghijklmnñopqrstuüvwxyz \n";
    
    var textoPermitido = true;
    for (var indice=0; indice<textoEvaluado.length; indice++) {
        if (!textoValido.includes(textoEvaluado[indice])){
            textoPermitido = false;
            return textoPermitido;
        }
    }
    return textoPermitido;
}
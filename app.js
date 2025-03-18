// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarNombreDeAmigo() {
    
    let inputAmigo = document.getElementById ("amigo");
    let nombreAmigo = inputAmigo.value;
    if (!nombreAmigo){

        alert ("Por favor ingrese un nombre válido");
        return;    
    } 
    //Agrega el amigo a la lista de amigos
   amigos.push(nombreAmigo);
   inputAmigo.value = "";
   inputAmigo.focus();
   renderizarAmigos();
   medirListaAmigos();


}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for(let i = 0; i <amigos.length; i++){
        let item = document.createElement ("li");
        item.textContent = amigos [i];
        listaAmigos.appendChild (item);
    }
    
}

function sortearAmigos (){
    if (amigos.length === 0){
    alert ("No hay suficientes amigos para sortear o ya se han sorteado todos los amigos");
    return;
    }else{
        let amigoSorteado = Math.floor (Math.random()*amigos.length);
        let resultado = document.getElementById ("resultado");
        resultado.innerHTML = `El amigo sorteado es ${amigos[amigoSorteado]}`;
        amigos.splice(amigoSorteado,1);
        let limpiarLista = document.getElementById ("ListaAmigos");
        listaAmigos.innerHTML = "";
        
    }
}

function limpiarLista () {
    listaAmigos.innerHTML = "";
    amigos=[]
    resultado.innerHTML = "";
}


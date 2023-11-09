function valor(e){
    const ingreso=document.querySelector('input.form-control');
    //Selecciono el input junto con su clase
    let porducto=ingreso.value;
    //Agarro su valor
    ingreso.value="";
    //Borro lo que estaba en la barra de input
    return porducto;
    //Devuelvo el valor

}


function llenar(e){
    e.preventDefault();
    let ancestro2 = document.getElementById('lista-productos');
    // Busco la id de la etiqueta que busco
    let ancestro3 = document.createElement('li');
    // Creo una etiqueta li
    ancestro3.innerText=valor(e);
    // Le incerto un valor de tipo texto, llamada desde la lista valor()
    ancestro2.appendChild(ancestro3);
    // En el ancestro2, le ingreso a lo ultimo los datos de su hijo, ancestro3

    let botonLi=document.createElement('button');
    botonLi.innerText='borrar';    
    botonLi.addEventListener('click',eliminar_elemento);
    
    ancestro3.appendChild(botonLi);
}
function eliminar_elemento(evento){
    evento.target.parentElement.remove();
}

function borrar(e){
    document.getElementById('lista-productos').innerText='';
}

// function borrar_primero(){
//     let primero = document.getElementById('lista-productos');
//     let nuevoArray = primero.childNodes;
//         primero.removeChild(nuevoArray[0]);
// }

// function borrar_ultimo(){
//     let primero = document.getElementById('lista-productos');
//     let nuevoArray = primero.childNodes;

//     // Obtén el último índice en la colección de nodos secundarios
//     let ultimoIndice = nuevoArray.length - 1;

//     // Eliminar el último nodo secundario
//     primero.removeChild(nuevoArray[ultimoIndice]);
//     // console.log(nuevoArray);
    
// }
// function reiniciar_pag(e){location.reload();}

function ordenar(e){
    
        const listaProductos = document.getElementById('lista-productos');
        const elementosLi = Array.from(listaProductos.getElementsByTagName('li'));
      
        // Ordenar los elementos alfabéticamente
        elementosLi.sort((a, b) => a.textContent.localeCompare(b.textContent));
      
        // Eliminar todos los elementos de la lista original
          listaProductos.removeChild(listaProductos.firstChild);

        // Agregar los elementos ordenados de nuevo a la lista
        elementosLi.forEach((elemento) => {
          listaProductos.appendChild(elemento);
        });
      ;
      
}

 document.querySelector('ul.lista-productos');


document.querySelector('button.btn').addEventListener('click', llenar);
document.getElementById('borrar_todo').addEventListener('click',borrar);
// document.getElementById('borrar_primero').addEventListener('click',borrar_primero);
// document.getElementById('borrar_ultimo').addEventListener('click',borrar_ultimo);
// document.getElementById('reiniciar').addEventListener('click',reiniciar_pag);
document.getElementById('ordenar_alfabeticamente').addEventListener('click', ordenar)
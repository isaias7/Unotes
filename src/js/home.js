(function(){


document.getElementById("pantallaprincipal").addEventListener("click",clickonscreen);
document.getElementById("buttonNote").addEventListener("click",note);
document.getElementById("buttonLib").addEventListener("click",lib);
document.getElementById("buttonTag").addEventListener("click",tag);

document.getElementById("buttonEditar").addEventListener("click",editNameNoteBook);
document.getElementById("addBook").addEventListener("click",addBook);

notesModal = document.getElementById("notesModal");

buttonFile = document.getElementById("buttonLib");
menuLateralLib = document.getElementById("menuLateralLib");
menuLateralTag = document.getElementById("menuLateralTag");
pantallaprincipal = document.getElementById("pantallaprincipal");
inputBookname= document.getElementById("inputBook");

imgEditar = document.getElementById("imgEditar");

//Pribar e.stoppropag
var botonLibSeleccionado=false;
var botonTagSeleccionado=false;

function note() {
    notesModal.style.left="20%";
    document.getElementById("nameNote").focus();
    opacarPantalla();
}
function ocultaNotesModal() {
    notesModal.style.left = -100 + "%";
    desOpacarPantalla();
}

function mostrarNotesModal() {
    notesModal.style.left = 20 + "%";
    opacarPantalla();
}
function noteFromEsc(){
    ocultarMenuLibrerias();
    note();
}
function lib() {
    var s = menuLateralLib.style.left;
    if (s == "40%") {
        ocultarMenuLibrerias();
    }
    else {
        mostrarMenuLibrerias();
    }
}
function ocultarMenuLibrerias() {
    menuLateralLib.style.left = -40 + "%";
    botonLibSeleccionado=false;
    desOpacarPantalla();
}

function mostrarMenuLibrerias() {
    menuLateralLib.style.left = 40 + "%";
    botonLibSeleccionado=true;
    opacarPantalla();
}
function tag(){
    var s = menuLateralTag.style.left;
    if (s == "40%") {
        ocultarMenuTag();
    }
    else {
        mostrarMenuTag();
    }
}
function ocultarMenuTag() {
    menuLateralTag.style.left = -40 + "%";
    botonTagSeleccionado=false;
    desOpacarPantalla();
}

function mostrarMenuTag() {
    menuLateralTag.style.left = 40 + "%";
    botonTagSeleccionado=true;
    opacarPantalla();
}
function opacarPantalla(){
    pantallaprincipal.style.background="#000";
    pantallaprincipal.style.opacity= 0.3;
    //pantallaprincipal.style.filter= "alpha(opacity = 50)";/* required for opacity to work in IE */
}
function desOpacarPantalla(){
    pantallaprincipal.style.background="#fff";
    pantallaprincipal.style.opacity= 1;
    //pantallaprincipal.style.filter= "alpha(opacity = 50)";/* required for opacity to work in IE */
}
function clickonscreen() {
    
    var leftLib = menuLateralLib.style.left;
    var leftTag = menuLateralTag.style.left;
    
    if(!botonLibSeleccionado){
        if (leftLib == "40%") {
            ocultarMenuLibrerias();
        }
    }
    if(!botonTagSeleccionado){
         if (leftTag == "40%") {
            ocultarMenuTag();   
        }
    }
     botonTagSeleccionado=false;
     botonLibSeleccionado=false;
}

function editNameNoteBook(){
    imgEditar.src="../iconos/checked.svg";
}
function addBook(){
    console.log("new book");
  


    //TITULO DEL NOTEBOOK
    var book =inputBookname.value;
    var nombre = document.createElement("h6");
    nombre.contenteditable ="true";
    var texto = document.createTextNode(book);
    nombre.appendChild(texto);

    //ROW
    var div = document.createElement("div");
    div.setAttribute("class", "row")

    //COLUMN
    var divCol = document.createElement("div");
    divCol.setAttribute("class", "col-md-2");

    div.appendChild(divCol);
    divCol.appendChild(nombre);

    //LISTA
    var node = document.createElement("li");
    node.appendChild(div);
    document.getElementById("notebooksList").appendChild(node);
    console.log("agregado");
}


document.onkeydown = function myFunction(event) {
    if (event.keyCode == 27) {
        ocultarMenuLibrerias();
        ocultarMenuTag();
        ocultaNotesModal();
    }
}


})();


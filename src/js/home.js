(function(){


document.getElementById("buttonNote").addEventListener("click",showNotesEditor);
document.getElementById("buttonNotebook").addEventListener("click",showMenuNotebooks);
document.getElementById("addNoteBook").addEventListener("click",addNoteBook);

notesModal = document.getElementById("notesModal");
notebooks = document.getElementById("sectionFile")

inputNameNoteBook= document.getElementById("inputNoteBook");

/*document.getElementById("pantallaprincipal").addEventListener("click",clickonscreen);
document.getElementById("buttonLib").addEventListener("click",lib);
document.getElementById("buttonTag").addEventListener("click",tag);

document.getElementById("buttonEditar").addEventListener("click",editNameNoteBook);
document.getElementById("addBook").addEventListener("click",addBook);


buttonFile = document.getElementById("buttonLib");
menuLateralLib = document.getElementById("menuLateralLib");
menuLateralTag = document.getElementById("menuLateralTag");
pantallaprincipal = document.getElementById("pantallaprincipal");

imgEditar = document.getElementById("imgEditar");

//Probar e.stoppropag
var botonLibSeleccionado=false;
var botonTagSeleccionado=false;
*/
function showNotesEditor() {
    notesModal.classList.add("notesModal--show");
    document.getElementById("nameNote").focus();
    document.getElementById("mainView").classList.add("mainViewOpaque");
    notebooks.classList.remove("sectionFile--show")
}
document.onkeydown = function myFunction(event) {
    if (event.keyCode == 27) {
        //ocultarMenuLibrerias();
        //ocultarMenuTag();
        notesModal.classList.remove("notesModal--show");
        document.getElementById("mainView").classList.remove("mainViewOpaque");
        notebooks.classList.remove("sectionFile--show")   
    }
}
function showMenuNotebooks(){
    notebooks.classList.add("sectionFile--show");
    notesModal.classList.remove("notesModal--show");
    document.getElementById("mainView").classList.add("mainViewOpaque");
}
function addNoteBook(){
    console.log("new book");

    //TITULO DEL NOTEBOOK
    var name =inputNameNoteBook.value;
    var h6 = document.createElement("h6");
    h6.setAttribute("contenteditable", "true");
    
    var text = document.createTextNode(name);
    h6.appendChild(text);

    //ROW
    var div = document.createElement("div");
    div.setAttribute("class", "row sectionFile__li");

    //COLUMN
    var divCol = document.createElement("div");
    divCol.setAttribute("class", "col-md-12");

    div.appendChild(divCol);
    divCol.appendChild(h6);

    //LISTA
    var node = document.createElement("li");
    node.setAttribute("class", "sectionFile__list");

    node.appendChild(div);
    document.getElementById("notebooksList").appendChild(node);
    console.log("agregado");
}

/*

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
    menuLateralLib.style.left = 8.3 + "%";
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
    nombre.setAttribute("contenteditable", "true");
    var texto = document.createTextNode(book);
    nombre.appendChild(texto);

    //ROW
    var div = document.createElement("div");
    div.setAttribute("class", "row")

    //COLUMN
    var divCol = document.createElement("div");
    divCol.setAttribute("class", "col-md-4 col-md-offset-1");

    div.appendChild(divCol);
    divCol.appendChild(nombre);

    //LISTA
    var node = document.createElement("li");
    node.setAttribute("class", "sectionFile__list__li");


    node.appendChild(div);
    document.getElementById("notebooksList").appendChild(node);
    console.log("agregado");
}


*/
})();


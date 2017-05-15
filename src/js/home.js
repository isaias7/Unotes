(function(){


document.getElementById("buttonNote").addEventListener("click",showNotesEditor);
document.getElementById("buttonNotebook").addEventListener("click",showMenuNotebooks);
document.getElementById("addNoteBook").addEventListener("click",addNoteBook);

notesModal = document.getElementById("notesModal");
notebooks = document.getElementById("sectionFile")

inputNameNoteBook= document.getElementById("inputNoteBook");

var creatingNote=false;
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
    creatingNote =true;
}
document.onkeydown = function myFunction(event) {
    switch(event.keyCode){
        case 27:
            notesModal.classList.remove("notesModal--show");
            notebooks.classList.remove("sectionFile--show");
            document.getElementById("mainView").classList.remove("mainViewOpaque");
            creatingNote=false;
            break;
        case 13:
            createNote();
    }
}
function createNote(){
    if(creatingNote){
        var title = document.getElementById("nameNote").value;
        var content =document.getElementById("contentNote").value;

        var h3 = document.createElement("h3");
        h3.appendChild(document.createTextNode(title));

        var p = document.createElement("p");
        p.appendChild(document.createTextNode(content));
        
        
        var button1 = document.createElement("button");
        var img1 =document.createElement("img");

        img1.setAttribute("class","note__image");
        img1.setAttribute("src","../iconos/send.svg");

        button1.setAttribute("class","note__button");
        
        var button2 = document.createElement("button");
        var img2 =document.createElement("img"); 
        
        img2.setAttribute("class","note__image");
        img2.setAttribute("src","../iconos/pencil.svg");

        button2.setAttribute("class","note__button");

        var button3 = document.createElement("button");
        var img3 =document.createElement("img");
        
        img3.setAttribute("class","note__image");
        img3.setAttribute("src","../iconos/delete.svg");

        button3.setAttribute("class","note__button");

        button1.appendChild(img1);
        button2.appendChild(img2);
        button3.appendChild(img3);



        //CAPTION
        var div1 =document.createElement("div");
        div1.setAttribute("class","caption");
        var div2=document.createElement("div");
        div2.setAttribute("class","thumbnail");
        var div3=document.createElement("div");
        div3.setAttribute("class", "col-md-3");

        div1.appendChild(h3);
        div1.appendChild(p);

        //buttons
        div1.appendChild(button1);
        div1.appendChild(button2);
        div1.appendChild(button3);

        div2.appendChild(div1);
        div3.appendChild(div2);
        //thumbnails
        document.getElementById("thumbnails").appendChild(div3);
        console.log(title+"-"+content);
    }
}
/*
<div class="col-md-3">
              <div class="thumbnail">
                <div class="caption">
                  <h3>Thumbnail label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum obcaecati, hic commodi modi, consequuntur,
                    sequi et incidunt necessitatibus, id ipsum reprehenderit inventore odio. Consequatur incidunt ipsam,
                    esse recusandae iste sunt.</p>
                  <button class="note__button" href="#" id="buttonLib"><img class="note__image" src="../iconos/send.svg" alt="Send"></button>
                  <button class="note__button" href="#" id="buttonLib"><img class="note__image" src="../iconos/pencil.svg" alt="Edit"></button>
                  <button class="note__button" href="#" id="buttonLib"><img class="note__image" src="../iconos/delete.svg" alt="Delete"></button>
                </div>
              </div>
            </div>
*/
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



window.onload = function init(){
	   buttonFile = document.getElementById("buttonFile");
	   menuLateralFile = document.getElementById("menuLateralFile");
       
	   
	}

function file(){
    console.log("llamo");
	menuLateralFile = document.getElementById("menuLateralFile");
    var s = menuLateralFile.style.left;
    if(s=="40%"){
        menuLateralFile.style.left=-40+"%";
    }
    else{
        menuLateralFile.style.left=40+"%";
    }

}
document.onkeydown = function myFunction(event) {
}
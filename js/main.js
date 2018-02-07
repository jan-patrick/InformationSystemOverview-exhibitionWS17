// for resizing
var zoom = 100;

// length in milliseconds
var length_waehrungen = 4000;
var length_kaffee = 11000;

// paths
var path1 = "../../videos/waehrungen_jan.mp4";

// used length + path
var usedLength = length_waehrungen;
var usedPath = path1;

window.onload = setVariables;

function setVariables(){
    var video = document.getElementById('video');
    
    video.setAttribute("src", path1);  
    video.load();      
    resizeScreen();        
    setTimeout();
}

setTimeout(function(){
        console.log(usedLength);
        console.log(usedPath);
        //window.open(usedPath, null , null, true);
},usedLength);

function resizeScreen() {
    var c = window.innerWidth / 1920;
    zoom = c * 100;
    if (zoom <= 20) {
        zoom = 20;
    } else if (zoom >= 200) {
        zoom = 200;
    }
    var n = "" + zoom;
    document.body.style.zoom = n += "%";
}
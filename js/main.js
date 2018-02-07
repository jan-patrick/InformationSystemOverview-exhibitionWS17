// for resizing
var zoom = 100;

var a = 1;
var b = 0;
var timeOutFunction;

// length in milliseconds
var length_waehrungen = 67000;
var length_kaffee = 63000;
var length_essen = 40000; // 40000
var length_basteln = 83000; // 830000
var length_moderne = 27000;
var length_sneaker = 62000;
var length_kreauter = 39000;
var length_medizin = 69000;
var length_portfolio = 70000;

// paths
var path1 = "../../videos/essen_irma_phone.mp4";
var path2 = "../../videos/basteln_jacky_phone.mp4";
var path3 = "../../videos/moderne_ana_phone.mp4";
var path4 = "../../videos/portfolio_tobias_phone.mp4";
var path5 = "../../videos/kaffee_marcus_phone.mp4";
var path6 = "../../videos/kraeuter_vanessa_phone.mp4";
var path7 = "../../videos/medizin_mai_phone.mp4";
var path8 = "../../videos/sneaker_stefan_phone.mp4";
var path9 = "../../videos/waehrungen_jan_phone.mp4";

// used length + path
var useLength = length_essen;
var usePath = path1;

window.onload = setVariables;

function setVariables(a){
    a = a;
    var video = document.getElementById('video');
    if(a>9)a=1;
    else if(a==null || a==undefined) a = 1;
    switch(a){
        case 1:
            usePath = path1;
            useLength = length_essen;
            break;
        case 2:
            usePath = path2;
            useLength = length_basteln;
            break;
        case 3:
            usePath = path3;
            useLength = length_moderne;
            break;
        case 4:
            usePath = path4;
            useLength = length_portfolio;
            break;
        case 5:
            usePath = path5;
            useLength = length_kaffee;
            break;
        case 6:
            usePath = path6;
            useLength = length_kreauter;
            break;
        case 7:
            usePath = path7;
            useLength = length_medizin;
            break;
        case 8:
            usePath = path8;
            useLength = length_sneaker;
            break;
        case 9:
            usePath = path9;
            useLength = length_waehrungen;
            break;
        default:
            console.log(a);
        break;
    }
    checkTheCheckboxes(a);
    video.setAttribute("src", usePath);  
    video.load();      
    resizeScreen(); 
    timeOutFunction;
    //if(a!=b)window.clearTimeout(timeOutFunction); 
    //b = a;
}

timeOutFunction = setTimeout(function(){
        console.log(useLength);
        console.log(usePath);
        setVariables(a+1);
},useLength);

function checkTheCheckboxes(c) {
    switch(c){
        case 1:
            document.getElementById("ac-1").checked = true;
            document.getElementById("ac-2").checked = false;
            document.getElementById("ac-3").checked = false;
            document.getElementById("ac-4").checked = false;
            document.getElementById("ac-5").checked = false;
            document.getElementById("ac-6").checked = false;
            document.getElementById("ac-7").checked = false;
            document.getElementById("ac-8").checked = false;
            document.getElementById("ac-9").checked = false;
            break;
        case 2:
            document.getElementById("ac-1").checked = false;
            document.getElementById("ac-2").checked = true;
            document.getElementById("ac-3").checked = false;
            document.getElementById("ac-4").checked = false;
            document.getElementById("ac-5").checked = false;
            document.getElementById("ac-6").checked = false;
            document.getElementById("ac-7").checked = false;
            document.getElementById("ac-8").checked = false;
            document.getElementById("ac-9").checked = false;
            break;
        case 3:
            document.getElementById("ac-1").checked = false;
            document.getElementById("ac-2").checked = false;
            document.getElementById("ac-3").checked = true;
            document.getElementById("ac-4").checked = false;
            document.getElementById("ac-5").checked = false;
            document.getElementById("ac-6").checked = false;
            document.getElementById("ac-7").checked = false;
            document.getElementById("ac-8").checked = false;
            document.getElementById("ac-9").checked = false;
            break;
        case 4:
            document.getElementById("ac-1").checked = false;
            document.getElementById("ac-2").checked = false;
            document.getElementById("ac-3").checked = false;
            document.getElementById("ac-4").checked = true;
            document.getElementById("ac-5").checked = false;
            document.getElementById("ac-6").checked = false;
            document.getElementById("ac-7").checked = false;
            document.getElementById("ac-8").checked = false;
            document.getElementById("ac-9").checked = false;
            break;
        case 5:
            document.getElementById("ac-1").checked = false;
            document.getElementById("ac-2").checked = false;
            document.getElementById("ac-3").checked = false;
            document.getElementById("ac-4").checked = false;
            document.getElementById("ac-5").checked = true;
            document.getElementById("ac-6").checked = false;
            document.getElementById("ac-7").checked = false;
            document.getElementById("ac-8").checked = false;
            document.getElementById("ac-9").checked = false;
            break;
        case 6:
            document.getElementById("ac-1").checked = false;
            document.getElementById("ac-2").checked = false;
            document.getElementById("ac-3").checked = false;
            document.getElementById("ac-4").checked = false;
            document.getElementById("ac-5").checked = false;
            document.getElementById("ac-6").checked = true;
            document.getElementById("ac-7").checked = false;
            document.getElementById("ac-8").checked = false;
            document.getElementById("ac-9").checked = false;
            break;
        case 7:
            document.getElementById("ac-1").checked = false;
            document.getElementById("ac-2").checked = false;
            document.getElementById("ac-3").checked = false;
            document.getElementById("ac-4").checked = false;
            document.getElementById("ac-5").checked = false;
            document.getElementById("ac-6").checked = false;
            document.getElementById("ac-7").checked = true;
            document.getElementById("ac-8").checked = false;
            document.getElementById("ac-9").checked = false;
            break;
        case 8:
            document.getElementById("ac-1").checked = false;
            document.getElementById("ac-2").checked = false;
            document.getElementById("ac-3").checked = false;
            document.getElementById("ac-4").checked = false;
            document.getElementById("ac-5").checked = false;
            document.getElementById("ac-6").checked = false;
            document.getElementById("ac-7").checked = false;
            document.getElementById("ac-8").checked = true;
            document.getElementById("ac-9").checked = false;
            break;
        case 9:
            document.getElementById("ac-1").checked = false;
            document.getElementById("ac-2").checked = false;
            document.getElementById("ac-3").checked = false;
            document.getElementById("ac-4").checked = false;
            document.getElementById("ac-5").checked = false;
            document.getElementById("ac-6").checked = false;
            document.getElementById("ac-7").checked = false;
            document.getElementById("ac-8").checked = false;
            document.getElementById("ac-9").checked = true;
            break;
        default:
            console.log(a);
        break;
    }    
}

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
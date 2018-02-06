
// length in milliseconds
var length_waehrungen = 4000;
var length_kaffee = 11000;

// paths
var side2 = "../html/2.html";
var side3 = "../html/3.html";
var side4 = "../html/4.html";
var side5 = "../html/5.html";
var side6 = "../html/6.html";
var side1 = "../html/1.html";

// used length + path
var usedLength = length_waehrungen;
var usedPath = side1;

var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );

window.onload = setVariables;

function setVariables(){
    switch(page){
        case "1.html":
            usedLength=length_waehrungen;
            usedPath=side2;
            console.log("done");
            break;
        default:
            console.log("Error!");
            break;
    setTimeout();
    }
}

setTimeout(function(){
        console.log(usedLength);
        console.log(usedPath);
        window.open(usedPath, null , null, true);
},usedLength);
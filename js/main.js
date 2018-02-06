var time;
var timeOnSite = 0;
var length_waehrungen = 2;
var length_kaffee = 110;

window.onload = onReady;

function onReady() {
    timeOnSite = Date();
    loop();
}    

function loop() {
        if(timeOnSite - Date() <= length_waehrungen){
            window.location.open('../html/1.html');
            console.log("next site");
        }else{
            console.log("nope");
        }
}  

$(document).ready(function(){
    setTimeout( function(){
        dows = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
        months = new Array("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre");
        now = new Date();
        dow = now.getDay();
        d = now.getDate();
        m = now.getMonth();
        h = now.getTime();
        y = now.getFullYear();
        document.getElementById("fecha").innerHTML = d + " de " + months[m] + " de " + y;
        document.getElementById("year_01").innerHTML = y;
        document.getElementById("date_02").innerHTML =  d + " de " + months[m] + " de " + y;; 
    }, 5000)
   

})
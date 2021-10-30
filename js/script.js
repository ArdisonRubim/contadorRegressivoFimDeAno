var date = new Date("december 31, 2021").getTime();

var dias, horas, minutos, segundos;

setInterval(function () {
    var current_date = new Date().getTime();
    var seconds = (date - current_date) / 1000;
    
    dias = parseInt(seconds / 86400);
    seconds = seconds % 86400;

    horas = parseInt(seconds / 3600);
    seconds = seconds % 3600;

    minutos = parseInt(seconds / 60);
    segundos = parseInt(seconds % 60);

    document.getElementById('dia').innerHTML = dias;
    document.getElementById('hora').innerHTML = horas;
    document.getElementById('minuto').innerHTML = minutos;
    document.getElementById('segundos').innerHTML = segundos;
}, 1000);

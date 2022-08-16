const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.querySelector('.final-sms');
let boton = document.querySelector("#btn")




boton.addEventListener("click", () => {

    Swal.fire({
      title: '<strong>VER LA UBICACION <u></u></strong>',
      icon: 'success',
      html:
        ' ' +
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13362.116284155374!2d-62.86175995312315!3d-33.14773453756808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cecb64db0209df%3A0x66de93317bf35edf!2sEscuela%20MARIANO%20MORENO!5e0!3m2!1ses-419!2sar!4v1660671694388!5m2!1ses-419!2sar" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
        'and other HTML tags',
        
        
    })
  });

//Fecha a futuro
const countdownDate = new Date('Aug 26 2022 13:00:30 GMT-0300').getTime();

let interval = setInterval(function(){
//Obtener fecha actual y milisegundos
const now = new Date().getTime();

//Obtener las distancias entre ambas fechas
let distance = countdownDate - now;

//Calculos a dias-horas-minutos-segundos
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60 )) / (1000));

//Escribimos resultados
$days.innerHTML = days;
$hours.innerHTML = hours;
$minutes.innerHTML = minutes;
$seconds.innerHTML = ('0' + seconds).slice(-2);

//Cuando llegue a 0
if(distance < 0){
    clearInterval(interval);
    $finalMessage.style.transform = 'translateY(0)';
}
}, 1000);
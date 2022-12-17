let countdown = new Date ( 'Feb 12, 2023 23:59:59').getTime();
let x = setInterval (function() {
    let now = new Date ().getTime();
    let distance = countdown-now;
    let days = Math.floor(distance/(1000*60*60*24));
    let hours =  Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('demo').innerHTML = 'Il nous reste '+ days + 'd' + hours + 'h' + minutes + 'm' + seconds + 's' + 'pour devenir des vrais Superstars';

      // If the count down is finished, write some text

      if (distance <0) {
        clearInterval(x);
        document.getElementById('demo').innerHTML = 'Now you are a super star, ready to shine!';
      }
},1000);

function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }
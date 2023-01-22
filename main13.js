document.addEventListener('DOMContentLoaded', function() {
    let input = document.querySelector('input');
    let button = document.querySelector('button');
    let div = document.querySelector('div');
    let timer;
  
    function startTimer() {
      div.textContent--;
      if (div.textContent <= 0) timer = clearInterval(timer);
    }
  
    function onClick() {
      timer = clearInterval(timer);
      div.textContent=input.value;
      timer = setInterval(startTimer, 1000);
    }
  
    button.addEventListener('click', onClick);
  });
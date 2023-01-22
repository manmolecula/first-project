document.addEventListener('DOMContentLoaded', function() {
    let input = document.querySelector('input');
    let h2 = document.querySelector('h2');
    let delay;

    function copying(){
        h2.textContent=input.value;
    }
    function startDelay(){
        if(delay) clearTimeout(delay);
        delay = setTimeout(copying, 300);
    }
    input.oninput = startDelay;
});
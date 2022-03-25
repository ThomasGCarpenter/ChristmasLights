const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const dot = document.querySelectorAll("dot");

for (let i=0; i < dot.length; i++){
    dot[i].style.color=colors[i];
}
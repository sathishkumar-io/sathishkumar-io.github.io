const color1 = document.getElementById("color-bg");
const color2 = document.getElementById("color-txt");
const box = document.getElementById("cc-box");
const textBox = document.getElementById("cc-box-text");
const text = document.getElementById("text-box");

color1.addEventListener('click', function() {
    setInterval(()=> {
        box.style.backgroundColor = color1.value;
    });
});

color2.addEventListener('click', function() {
    setInterval(()=>{
        textBox.style.color = color2.value;
    });
});

text.addEventListener('click', function(){
    setInterval(()=>{
        textBox.innerText = text.value;
    });
});



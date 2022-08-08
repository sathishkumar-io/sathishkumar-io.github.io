const button = document.querySelector('.changer-btn');

button.addEventListener('click', ()=> {
    colorChange();
});

(colorChange)=()=> {
    const background = document.querySelector('section');
    const colorArray = ["1", "2", "3", "4", "5", "6", "a", "b", "c", "d", "e", "f"];
    let gradient1 = "";
    let gradient2 = "";
    for(i = 0; i < 6; i++){ 
        const colorIndex1 = Math.floor(Math.random() * colorArray.length);
        gradient1 += colorArray[colorIndex1];
        const colorIndex2 = Math.floor(Math.random() * colorArray.length);
        gradient2 += colorArray[colorIndex2];
     }
    background.style.background = "linear-gradient(to right, #"+gradient1+", #"+gradient2+")";
};
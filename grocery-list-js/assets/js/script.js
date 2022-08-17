const input = document.getElementById('grocery-input');

input.addEventListener('keydown', (event)=> {
    if(event.key==="Enter" && input.value !== "") {
        addItem();
    }
});

addItem = () => {
    const clear = document.querySelector('.clear');
    const items = document.getElementById('items');
    const ibDiv = document.createElement('div');
    const iDiv = document.createElement('div');
    const tickIcon = document.createElement('i');
    const itemDiv = document.createElement('div');
    const itemName = input.value;
    const delSpan = document.createElement('span');
    const delIcon = document.createElement('i');
    const lineSpan = document.createElement('span');

    ibDiv.className = 'item-box';
    iDiv.className = 'item';
    tickIcon.className = 'fa-regular fa-square';
    itemDiv.className = 'item-name';
    delSpan.className = 'item-del';
    delIcon.className = 'fa-solid fa-trash-can';
    lineSpan.className = 'line';

    delSpan.appendChild(delIcon);
    iDiv.appendChild(tickIcon);
    itemDiv.textContent = itemName;
    iDiv.appendChild(itemDiv);
    ibDiv.appendChild(iDiv);
    ibDiv.appendChild(delSpan);
    items.appendChild(ibDiv);
    items.appendChild(lineSpan);

    delIcon.addEventListener('click', ()=> {
        ibDiv.remove();
        lineSpan.remove();
    });

    clear.addEventListener('click', ()=> {
        items.textContent = "";
    });
    
    tickIcon.addEventListener('click', ()=> {
        if(tickIcon.className === "fa-solid fa-square-check") {
            tickIcon.className = tickIcon.className.replace("fa-solid fa-square-check", "fa-regular fa-square");
            itemDiv.style.textDecoration = "none";
        } else {
            tickIcon.className = tickIcon.className.replace("fa-regular fa-square", "fa-solid fa-square-check");
            itemDiv.style.textDecoration = "line-through";
        }
    });

    input.value = "";
};
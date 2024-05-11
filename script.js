const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const color = document.querySelector(".choiceColor");

btn.onclick = () => {
    let size;
    size = prompt("What grid size do you want to create? The maximum grid size is 100.", 32);

    while (size <= 0 || size > 100) {
        size = prompt("An incorrect value has been entered. Enter a new value.", 32);
    };
    deleteGrid();
    createGrid(size);

};

function createGrid(size) {
    for (let rows = 0; rows < size; rows++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");

        for (let squares = 0; squares < size; squares++) {
            const square = document.createElement("div");
            square.classList.add("grid-square");
            // let opacity = 0.1

            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = randomColor();
                // opacity += 0.1
                // square.style.opacity = opacity
            });
            row.appendChild(square);
        };

        container.appendChild(row);
    };
};

const deleteGrid = () => container.replaceChildren();

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb
    
}

createGrid(32);
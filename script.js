const container = document.querySelector(".container");
const btn = document.querySelector(".btn");


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

            square.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = "black"
            });
            row.appendChild(square);
        };

        container.appendChild(row);
    };
};

const deleteGrid = () => {
    container.replaceChildren();
};

createGrid(32);
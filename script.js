const container = document.querySelector(".container")

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
        }

        container.appendChild(row);
    }
}

createGrid(32)
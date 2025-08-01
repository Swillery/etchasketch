const btn = document.getElementById('btn');
const container = document.getElementById('container');

// Function for random square color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
// Grid builder function
function createGrid(size) {
    // Clear existing grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const totalSquares = size * size;

    for (let i = 0; i < totalSquares; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('square');

        newDiv.style.width = `${100 / size}%`;
        newDiv.style.aspectRatio = '1 / 1';

        newDiv.addEventListener('mouseenter', () => {
            newDiv.style.backgroundColor = getRandomColor();
        });

        container.appendChild(newDiv);
    }
}

// Initial 16×16 grid on load
createGrid(16);

// New grid prompt on button click
btn.addEventListener('click', () => {
    let sizeString = prompt('How many squares would you like on each side? (Max 100)');
    let size = parseInt(sizeString);

    if (isNaN(size) || size > 100 || size < 2) {
        alert("Invalid Input, Please Enter a Number Between 2 and 100");
        return;
    }

    createGrid(size);
});
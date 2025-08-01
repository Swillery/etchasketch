const container = document.getElementById('container');

// Create 256 squares (16x16 grid)
for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('square');

    newDiv.addEventListener('mouseenter', () => {
        newDiv.style.backgroundColor = 'black';
    });

    container.appendChild(newDiv);
}
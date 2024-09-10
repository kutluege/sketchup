document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const button = document.getElementById('getnumber');
    const MAX_GRID_SIZE = 100;

    function getGridSize() {
        let userInput = prompt(`Kenar başına kare sayısını girin (Maksimum ${MAX_GRID_SIZE}):`);
        let gridSize = parseInt(userInput);

        if (isNaN(gridSize) || gridSize <= 0) {
            alert('Lütfen 0\'dan büyük geçerli bir sayı giriniz.');
            return null;
        }

        if (gridSize > MAX_GRID_SIZE) {
            alert(`Girilen sayı ${MAX_GRID_SIZE}'yi aşıyor, maksimum ${MAX_GRID_SIZE} olarak ayarlanıyor.`);
            gridSize = MAX_GRID_SIZE;
        }

        return gridSize;
    }

    function clearGrid() {
        container.innerHTML = '';
    }

    function createGrid(gridSize) {
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

        for (let i = 0; i < gridSize * gridSize; i++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            container.appendChild(square);

            square.addEventListener('mouseenter', () => {
                square.classList.add('hovered');
            });
        }
    }

    button.addEventListener('click', () => {
        const gridSize = getGridSize();
        if (gridSize) {
            clearGrid();
            createGrid(gridSize);
        }
    });
});

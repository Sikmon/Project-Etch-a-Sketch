const container = document.getElementById('container');
const clearBtn = document.getElementById('clr');
const rows = 16;
const cols = 16;
function createGrid() {
  for (let i=0;i<rows; i++) {
      for (let j=0;j<cols; j++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'gridItem';
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'black';
        });
        container.appendChild(gridItem);
        
      }
   }
   
}  

createGrid();

function clearGrid() {
    const items = document.querySelectorAll('.gridItem');
    items.forEach(item =>{
        item.style.backgroundColor = 'white';
    })
}

clearBtn.addEventListener('click', clearGrid);
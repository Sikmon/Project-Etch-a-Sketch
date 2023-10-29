const container = document.getElementById('container');
const clearBtn = document.getElementById('clr');


function createGrid(rows,cols,size) {
    clearContainer();
    
    
    
container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
  for (let i=0;i<rows; i++) {
      for (let j=0;j<cols; j++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'gridItem';
        gridItem.style.maxHeight = size;
        gridItem.style.maxWidth = size;
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'black';
        });
        container.appendChild(gridItem);
        
      }
   }
   
}  




  createGrid(50,50,this);

  function clearContainer() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}




function clearGrid() {
    const items = document.querySelectorAll('.gridItem');
    items.forEach(item =>{
        item.style.backgroundColor = 'white';
    })
}

clearBtn.addEventListener('click', clearGrid);

const btn16 = document.getElementById('grd16');
const btn64 = document.getElementById('grd64');


btn16.addEventListener('click', createGrid16);
btn64.addEventListener('click', createGrid);







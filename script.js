const container = document.getElementById('container');
const clearBtn = document.getElementById('clr');
let mouseHold = false ;
const slider = document.getElementById('gridSize');

document.addEventListener('mousedown', () => {
    mouseHold = true;
})

document.addEventListener('mouseup', () => {
    mouseHold = false;
})

function createGrid(rows,cols,size) {
  clearContainer(); 
  container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  for (let i=0;i<rows; i++) {
      for (let j=0;j<cols; j++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'gridItem';
        gridItem.style.maxHeight = size;
        gridItem.style.maxWidth = size;
        gridItem.addEventListener('mouseover', () => {
            if (mouseHold) {
            gridItem.style.backgroundColor = 'black';
           
           }
         });
        container.appendChild(gridItem);
        
      }
   }
   
}  






  createGrid(16,16,this);

  slider.addEventListener('input', () => {
    let gSize = slider.value;
    createGrid(gSize,gSize,this);
  })

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










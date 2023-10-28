const container = document.getElementById('container');
const clearBtn = document.getElementById('clr');
let rows = 64;
let cols = 64;
let newR = 16;
let newC = 16;

function createGrid() {
    clearContainer();
    
container.style.gridTemplateColumns = 'repeat(64, 1fr)'
  for (let i=0;i<rows; i++) {
      for (let j=0;j<cols; j++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'gridItem';
        gridItem.style.maxHeight = "10px";
        gridItem.style.maxWidth = "10px";
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'black';
        });
        container.appendChild(gridItem);
        
      }
   }
   
}  




function createGrid16() {

    clearContainer();
      
    
    container.style.gridTemplateColumns = 'repeat(16, 1fr)';
    for (let i=0;i<newR; i++) {
        for (let j=0;j<newC; j++) {
          const gridItem = document.createElement('div');
          gridItem.className = 'gridItem';
          gridItem.style.maxHeight = "30px";
          gridItem.style.maxWidth = "30px";
          gridItem.addEventListener('mouseover', () => {
              gridItem.style.backgroundColor = 'black';
          });
          container.appendChild(gridItem);
          
        }
     }
     
  }  

  createGrid16();

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







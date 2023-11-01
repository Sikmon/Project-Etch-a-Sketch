const container = document.getElementById('container');
const clearBtn = document.getElementById('clr');
let mouseHold = false ;
const slider = document.getElementById('gridSize');
const showInput = document.getElementById('sliderVal');
const controls = document.getElementById('controls');
const setting = document.getElementById('set');
slider.defaultValue = 16;
let defaultValue = slider.defaultValue;
let currentColor = 'black';
const pickColor = document.getElementById('colorPicker');


function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 

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
                if (currentColor === randomColor) {
                     gridItem.style.backgroundColor = randomColor();
                    } else {
                      gridItem.style.backgroundColor = currentColor;
                    }
           
           
           }
         });
        container.appendChild(gridItem);
        
      }
   }
   
}  






  
  createGrid(defaultValue,defaultValue,this);

  showInput.textContent = `Grid size:${defaultValue}x${defaultValue}`;
  setting.insertBefore(showInput,slider);

  slider.addEventListener('input', () => {
    let gSize = slider.value;
    createGrid(gSize,gSize,this); 
    showInput.textContent = `Grid size: ${slider.value}x${slider.value}`;
    
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
const btnErase = document.getElementById('erase');
pickColor.addEventListener('input', () => {
    currentColor = pickColor.value;
})
btnErase.addEventListener('click', () => {
    currentColor = 'white';
})
btn16.addEventListener('click',changeColor);
btn64.addEventListener('click',() => {
    currentColor = 'black';
    
});


function changeColor() {
     currentColor = randomColor;
    

}










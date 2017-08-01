const addInput = document.querySelector('input.addInput'); 
const addButton = document.querySelector('button.addButton'); 
 
addButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addInput.value;
  
    if (li.textContent == 0) {
        alert("You didn't enter anything, silly!");
      }  else {
      ul.appendChild(li);
      addInput.value = ''; //to clear field after content entered
    }
 
  li.addEventListener('click',() => {
   console.log("testing"); 
   let ul2 = document.getElementsByTagName('ul')[1];
   let li2 = document.createElement('li');
  
   ul.removeChild(li); 
   li2.textContent = li.textContent;    
   ul2.appendChild(li2);
    
     

  li2.addEventListener('mouseover', () => {
      li2.textContent = li2.textContent + ' delete forever';
  });
  li2.addEventListener('mouseout', () => {
      li2.textContent = li.textContent; 
  });
  

    
    li2.addEventListener('click',() => {
      ul2.removeChild(li2); 
    });
  }); 
});  

 
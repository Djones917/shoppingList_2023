const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');



function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;
  // Validate
  if (newItem === '') {
     alert('Add an item');
     return;
  }   

  addItemToDom(newItem);

  checkUI();

  itemInput.value = '';
}


function addItemToDom(item) {
   // Create List Item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));
  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);
  // Add li to the DOM
  itemList.appendChild(li);
}

function addItemToStorage(item) {
   let itemsFromStorage;

   if (localStorage.getItem('items') === null) {
     itemsFromStorage = [];
   }else {
     itemsFromStorage = JSON.parse(localStorage.getItem('items'));
   }
}


function createButton(classes) {
   const button = document.createElement('button');
   button.className = classes;
   const icon = createIcon('fa-solid fa-xmark');
   button.appendChild(icon);
   return button;
}


function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}


function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
   if (confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();

      checkUI();
   }    
  }
}


function clearItems() {
   while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
   }
   checkUI();
}

function filterItems(e) {
   const items = itemList.querySelectorAll('li');   
   const text = e.target.value.toLowerCase();

   items.forEach((item) => {
      const itemName = item.firstChild.textContent.toLowerCase();

      if (itemName.indexOf(text) != -1) {
         item.style.display = 'flex';
      } else {
         item.style.display = 'none';
      }
   });
}


function checkUI() {
   const items = itemList.querySelectorAll('li');   
   if (items.length ===0) {
      clearBtn.style.display = 'none';
      itemFilter.style.display = 'none';
   } else {
      clearBtn.style.display = 'block';
      itemFilter.style.display = 'block';
   }
}


// EVENT LISTENERS
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);

checkUI();
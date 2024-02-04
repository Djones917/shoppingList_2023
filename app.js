const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');



function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate
  if (newItem === '') {
     alert('Add an item');
     return;
  }
  
  // Create List Item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');
}


function createButton(classes) {
   const button = document.createElement('button');
   button.className = classes;
   return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  i.className = classes;
  return icon;
}

// EVENT LISTENERS
itemForm.addEventListener('submit', addItem);
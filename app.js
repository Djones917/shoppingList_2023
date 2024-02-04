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

// EVENT LISTENERS
itemForm.addEventListener('submit', addItem);
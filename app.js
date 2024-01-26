const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
  e.preventDefault();

  // Validate
  if (itemInput.value === '') {
     alert('Add an item');
     return;
  }
  console.log('success!');
}

// EVENT LISTENERS
itemForm.addEventListener('submit', addItem);
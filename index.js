'use strict';

/* global $ */

// STORE is responsible for storing the underlying data that our app needs to keep track of in order to work. 
const STORE = [
  {name: 'apples', checked: false},
  {name: 'oranges', checked: false},
  {name: 'milk', checked: true},
  {name: 'bread', checked: false}
];

function generateItemElement(item){
  return `
    <li data-item-id="${item.id}"> 
      <span class="shopping-item js-shopping-item ${item.checked ? 'shopping-item__checked' : ''}">${item.name}</span>
      <div class='shopping-item-controls'>
        <button class='shopping-item-toggle js-item-toggle'>
          <span class='button-label'>check</span>
        </button>
        <button class='shopping-item-delete js-item-delete'>
          <span
          class='button-label'>delete</span>
        </button>
      </div>
    </li>`;
}

function generateShoppingItemsString(shoppingList) {
  console.log('Shopping list generated');
  
  const items = shoppingList.map((item, index) => generateItemElement(item, index));

  return items.join('');

}

function renderShoppingList() {
  // this function will be responsible for rendering the shopping list in the DOM
  const shoppingListsItemsString = generateShoppingItemsString(STORE);
  
  $('.js-shopping-list').html(shoppingListsItemsString);
  console.log('`renderShoppingList` ran');
}

function handleNewItemSubmit() {
  // this function will be responsible for when users add a new shopping list item
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    
  });
  console.log('`handleNewItemSubmit`');
}

function handleItemCheckClicked() {
  // this function will be responsible for when users click the "check" button on a shopping list item

  console.log('`handleItemCheckClicked` ran');
}

function handleDeleteItemClicked() {
  // this function will be responsible for when users wnat to delete a shopping list 

  console.log('`handleDeleteItemClicked` ran');
}



// callback function 
function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();

}

$(handleShoppingList);
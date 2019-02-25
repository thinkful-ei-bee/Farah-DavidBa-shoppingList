'use strict';

/* global $ */

// STORE is responsible for storing the underlying data that our app needs to keep track of in order to work. 
const STORE = [
  {id: cuid(), name: 'apples', checked: false},
  {id: cuid(), name: 'oranges', checked: false},
  {id: cuid(), name: 'milk', checked: true},
  {id: cuid(), name: 'bread', checked: false}
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
  // console.log('Shopping list generated');
  
  const items = shoppingList.map((item, index) => generateItemElement(item, index));

  return items.join('');

}

function renderShoppingList() {
  // this function will be responsible for rendering the shopping list in the DOM
  const shoppingListsItemsString = generateShoppingItemsString(STORE);
  
  $('.js-shopping-list').html(shoppingListsItemsString);
  // console.log('`renderShoppingList` ran');
}

function addItemToShoppingList(itemName){
  console.log(`Adding '${itemName}' to shopping list`);
  STORE.push({name: itemName, checked: false});
}

function handleNewItemSubmit() {
  // this function will be responsible for when users add a new shopping list item
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const newItemName = $('.js-shopping-list-entry').val();
    console.log(newItemName);
    $('.js-shopping-list-entry').val('');
    addItemToShoppingList(newItemName);
    renderShoppingList();
  });
  // console.log('`handleNewItemSubmit`');
}

function handleItemCheckClicked() {
  // this function will be responsible for when users click the "check" button on a shopping list item

 //  console.log('`handleItemCheckClicked` ran');
}

function handleDeleteItemClicked() {
  // this function will be responsible for when users wnat to delete a shopping list 

 // console.log('`handleDeleteItemClicked` ran');
}



// callback function 
function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();

}

$(handleShoppingList);
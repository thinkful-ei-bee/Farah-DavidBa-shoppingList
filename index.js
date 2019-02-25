'use strict';

/* global $ */

// STORE is responsible for storing the underlying data that our app needs to keep track of in order to work. 
const STORE = [
  {name: 'apples', checked: false},
  {name: 'oranges', checked: false},
  {name: 'milk', checked: true},
  {name: 'bread', checked: false}
];

function renderShoppingList() {
  // this function will be responsible for rendering the shopping list in the DOM

  console.log('`renderShoppingList` ran');
}

function handleNewItemSubmit() {
  // this function will be responsible for when users add a new shopping list item

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
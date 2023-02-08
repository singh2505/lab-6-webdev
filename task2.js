class Model {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    getItems() {
      return this.items;
    }
  } 
  class View {
    constructor(elementId) {
      this.app = document.querySelector(elementId);
      this.itemInput = this.app.querySelector('#itemInput');
      this.addButton = this.app.querySelector('#addButton');
      this.shoppingList = this.app.querySelector('#shoppingList');
    }
  
    addItemToList(item) {
      const newItem = document.createElement('li');
      newItem.innerText = item;
      this.shoppingList.appendChild(newItem);
    }
  
    getInputValue() {
      return this.itemInput.value;
    }
  }
  
  class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      this.view.addButton.addEventListener('click', () => {
        this.addItem();
      });
    }
  
    addItem() {
      const item = this.view.getInputValue();
      this.model.addItem(item);
      this.view.addItemToList(item);
    }
  }
  
  const appModel = new Model();
  const appView = new View('#app');
  const appController = new Controller(appModel, appView);
  const app = document.querySelector('#app');
  const itemInput = app.querySelector('#itemInput');
  const addButton = app.querySelector('#addButton');
  const shoppingList = app.querySelector('#shoppingList');
  
  addButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.innerText = itemInput.value;
    shoppingList.appendChild(newItem);
  });
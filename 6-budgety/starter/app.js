// iife allows data privacy
// BUDGET CONTROLLER
var budgetController = (function() {
  
}());

// UI CONTROLLER
var uiController = (function() {
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn'
  };
  return {
    getInput: function(){
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will be either 'inc' or 'exp'
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    // exposes DOMstrings to public
    getDOMstrings: function(){
      return DOMstrings;
    }
  }
})();

// GLOBAL APP CONTROLLER
// pass controllers into global app controller
var controller = (function(budgetCtrl, uiCtrl) {
  // pass other two modules into this controller
  var setupEventListeners = function(){
    // not an iife and will need to be called. see init function
    var DOM = uiCtrl.getDOMstrings(); // retrieves DOMstrings from UI Controller

    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
    // allows input data submission with 'enter'
    document.addEventListener('keypress', function(event){
      var key = event.which || event.keyCode;
      if (key === 13){
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function(){
    // 1. Get the field input data
    var input = uiCtrl.getInput();
    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
  };

  return {
    // make function public by returning
    init: function(){
      console.log('Application has started');
      setupEventListeners(); // originally in an iife
    }
  }

})(budgetController, uiController);

controller.init(); // without this line of code, nothing will happen

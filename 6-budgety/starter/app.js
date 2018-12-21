// iife allows data privacy
// BUDGET CONTROLLER
var budgetController = (function() {
  console.log('budget controller')
}());

// UI CONTROLLER
var uiController = (function() {
  console.log('UI controller')

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
  var DOM = uiCtrl.getDOMstrings(); // retrieves DOMstrings from UI Controller
  var ctrlAddItem = function(){
    // 1. Get the field input data
    var input = uiCtrl.getInput();
    console.log(input);
    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
  }
  // pass other two modules into this controller
  document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
  // allows input data submission with 'enter'
  document.addEventListener('keypress', function(event){
    var key = event.which || event.keyCode;
    if (key === 13){
      ctrlAddItem();
    }
  });

})(budgetController, uiController);

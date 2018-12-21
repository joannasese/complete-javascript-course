// iife allows data privacy
// BUDGET CONTROLLER
var budgetController = (function() {
  // some code
}());

// UI CONTROLLER
var uiController = (function() {
  // some code
}());

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, uiCtrl) {

  var ctrlAddItem = function(){
    console.log('hi')
    // 1. Get the field input data
    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
  }
  // pass other two modules into this controller
  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
  // allows input data submission with 'enter'
  document.addEventListener('keypress', function(event){
    var key = event.which || event.keyCode;
    if (key === 13){
      ctrlAddItem();
    }
  });

})(budgetController, uiController);

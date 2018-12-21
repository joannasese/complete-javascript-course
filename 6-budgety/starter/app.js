// iife allows data privacy
// module 1
var budgetController = (function() {
  var x = 23;
  var add = function(a){
    return x + a;
  }

  return {
    publicTest: function(b){
      return add(b);
    }
  }
}());

// module 2
var uiController = (function() {
  // some code
}());

// module 3
var controller = (function(budgetCtrl, uiCtrl) {
  // pass other two modules into this controller
  var z = budgetCtrl.publicTest(5);
  return {
    anotherPublic: function(){
      console.log(z);
    }
  }
}(budgetController, uiController));

/*
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI
(Body Mass Index), which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about
whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable
from step 3. (Something like "Is Mark's BMI higher than
John's? true").

GOOD LUCK 😀
*/

var markMass, markHeight, johnMass, johnHeight;
markMass = 72;
markHeight = 2;
johnMass = 68;
johnHeight = 2.5;

var markBMI = markMass / Math.pow(markHeight, 2);
var johnBMI = johnMass / Math.pow(johnHeight, 2);

var markHigherThanJohn = markBMI > johnBMI;

console.log(`Is Mark's BMI higher than John's?
${markHigherThanJohn}. It is ${markBMI} while
John's is ${johnBMI}.`);

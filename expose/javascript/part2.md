1. At line 12, the code will print out 3 because first off, because the "i" variable is declared as a var type, it is in the function scope and thus no matter what block it is in,
   you can access that variable "i" anywhere inside that functino. Secondly, because the input var "prices" has 3 values inside the list that means that we will be looping the for 
   loop until i >= 3. And because we are starting i = 0, and we must loop through the "prices" list 3 times to access all 3 values within it, that means that the "i" variable will 
   also be incremented 3 times. And thus i + 3 = 3. 
2. At line 13, the code will print out 150 because just like the var "i", the "discountedPrice" variable was declared as a var type and thus can be used within the function scope 
   regardless of what block it is in. And the value for "discountedPrice" = 150 because since we are working with 3 elements in the "prices" input and we are essentially redeclaring
   and reassigning the "discountedPrice" var everytime the for loop runs, that means we only pay attention to the last value inside of the "prices" element because the var 
   "discountedPrice" will no longer change once the for loop is done. And because the 3rd element inside the "prices" list is 300, we simply just follow the logic in that line and do
   300 * (1 - 0.5) = 300 * 0.5 = 150. 
3. At line 14, the code will print out 150 because just like the var "i" and the var "discountedPrice", the "finalPrice" var was declared as a var type and thus this variable is 
   accessible anywhere inside of the function. And the reason it is 150 is because just like the "discountedPrice" var, the "finalPrice" var is essentially being reassigned over and
   over within the for loop and thus the last element in the "prices" list will reassign the "finalPrice" var and because the for loops ends after that the finalPrice will no longer
   change and stay as that last assigned value. And because we calculated that the "discountedPrice" var = 150, if we just follow the logic on line 8, then we take the 
   "discountedPrice" vale = 150 * 100 = 15,000 and then do the Math.round(15,000) and since this function just rounds to the nearest integer the value stays at 15,000 and then we do 
   15,000/100 = 150. 
4. The function will return [ 50, 100, 150 ] because when the "discounted" var was declared it was initialized with [] and thus the compiler interpreted that var to be of type array. 
   And within the for loop, everytime we finish with our "finalPrice" calculations based off of the inputted "prices" and "discount" then we push that calculated "finalPrice" into 
   the "discounted" array. And the .push function adds an element to the end of the array and thus upon doing the for loop and calculations inside the values will be pushed into the
   array as 50, 100, 150.
5. The code will cause an error because now that the "i" variable is being declared as a type let, that means that now "i" is limited in use only within its block scope. This means 
   that the "i" variable can only be accessed within the curly brackets that it was declared it and thus because line 12 is trying to print out the "i" variable when it is located
   outside of the block scope of "i" it creates an error.
6. The code will cause an error because just like the "i" variable, the "discountedPrice" var is defined as type let. And thus it is limited in use to only within the block scope, 
   which is the for loop. And because line 13 tries to access the "discountedPrice" var outside of the block scope, it creates an error. The same logic as Q5.
7. At line 14, the code will print out 150 because although the variable "finalPrice" was changed to a type let just like var "i" and "discountedPrice", the "finalPrice" variable was
   declared outside of the for loop and within the function. That means that the block scope for this "finalPrice" variable is actually the whole function itself. So it kind of acts
   like a var type here and thus at line 14, where the code tries to print out the "finalPrice" it is able to access and print out 150.
8. The function will return [ 50, 100, 150 ] because just like the "finalPrice" variable, the "discounted" variable was declared as a type let but it wasn't declared inside any other
   block scope and just within the function itself and thus it becomes accessible within the entire function. And therefore, when the function tries to return the "discounted" value
   on line 16, it is able to access that variable and return [ 50, 100, 150 ].
9. At line 11 an error will occur because it the same logic as before, when we have the variable "i" as a type let, it is only accessible inside of the block scope, which in this 
    case is the for loop and thus accessing it outside of the for loop like at line 11 creates an error.
10. At line 12, the code will print out 3 because the variable "length" was declared just within the scope of the function so it can be accessible anywhere within the function and
    because it was declared as a type const and the code never attempted to reassign the "length" variable then no errors occurred revovling around the "length" variable and can be 
    printed as intended. 
11. The function will return [ 50, 100, 150 ] because although it was declared at type const and on line 8 the content of the variable "discounted" changes this is allowed in js
    because const just means that we are not allowed to reassign the variable to a new function but we are allowed to manipulate and change the contents of the variable. And thus,
    pushing values into the "discounted" array is perfectly fine as we are not changing the type of variable and only manipulating its contents. 
12. A. student.name; <br>
    B. student["Grad Year"]; <br>
    C. student.greeting(); <br>
    D. student["Favorite Teacher"].name; <br>
    E. student.courseLoad[0] (I wasn't sure if you meant "first index" as index 0 or the first as in the 1st index so index 1, but to access the different index you just put the different index number inside the bracket)
13. A. '3' + 2 = 32 because the '3' is a string and we are doing an addition operation, javascript converts the integer 2 into a string in order to do concatenation. <br>
    B. '3' - 2 = 1 because you cannot perform subraction with strings and thus the the string 3 is converted into an integer and performs the mathematical 3 - 2 = 1.<br>
    C. 3 + null = 3 because when doing mathemtical operations with null, null becomes 0 and thus 3 + 0 = 3. <br>
    D. '3' + null = 3null because we are working with strings and addition, we are essentially doing string concatenation and thus null is simply concatenated to the 3 = 3null. <br>
    E. true + 3 = 4 because when doing addition, the true value is the integer equivalent to 1 and thus 1 + 3 = 4. <br>
    F. false + null = 0 because false in its integer form is 0 and null in its integer form is also 0 and thus 0 + 0 = 0. <br>
    G. '3' + undefined = 3undefined because we are working with strings and addition and thus we are doing string concatenation and thus the undefined is concatenated to the 3 = 3undefined. <br>
    H. '3' - undefined = NaN because since we cannot subtract with strings we are using the integer form for this and the integer equivalent to undefined is NaN and thus 3-undefined = NaN. <br>
14. A. '2' > 1 = true because when comparing values of different types, the values are converted to numbers and thus 2 > 1 is true. <br>
    B. '2' < '12' = false because alphabetically when we compare the 1 from '12' to the 2 from '2' we get that the 1 > 2 is false; <br>
    C. 2 == '2' = true because since we are comparing differet types, the '2' becomes integer 2 and 2 == 2 is true. <br>
    D. 2 === '2' = false because the triple = checks the equality without type conversion and because the 2 and '2' are of different types it immediately returns false. <br>
    E. true == 2 = false because when we are comparing two different types we use integers for both and the integer equivalent of true = 1 and so 1 == 2 is false. <br>
    F. true === Boolean(2) = true because since both are type boolean and the conversion of any non-zero value to boolean is true thus true === true is true.
15. The == comparison checks the equality between two values with the help of type conversion. While the === comparison checks the equality of two values without the help of a type converter and simply compares the two values at the data types they are being compared as.
16. Inside the part2-question16.js file
17. The result from the function will be [ 2, 4, 6 ]. First, when we call the modifyArray function on line 13 we enter the function and pass in the parameters. Once inside, we create the const newArr array that will hold the values we want to eventually return to line 13. Then we go inside of a for loop starting from 0 and looping until we are < array.lenth which is 3. Inside the for loop we are pushing a value inside the newArr array and inside those parenthesis we are calling one of the parameters that we have, callback. When the modifyArray was called, it passed in the function doSomething as a parameter and thus the variable callback stored the function doSomething. And thus whenever we call the variable callback we are actually calling the function doSomething. So within the for loop and inside the push function, we are calling callback (which is basically the function doSomething) and passing in array[i]. And the doSomething will multiply the value in the array by 2 and return it to line 4 and then we will push that new calculated value into the newArr array. We will be repeating this whole process three times because we have 3 values inside of the array variable that was passed in. And thus, in the end after the for loop is finished we will return the newArr array back to line 13 which will contain the array [ 2, 4, 6 ]. 
18. Inside the part2-question18 file
19. 1 <br>
    4 <br>
    3 <br>
    2 
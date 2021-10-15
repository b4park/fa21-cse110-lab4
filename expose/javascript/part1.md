1. 20
2. 20
3. 20, however an error occurs with the rest of the code which will be explained in Q4
4. The code on line 13 returns an error because by changing the result from a var to a let type, means that the result variable is now only accessible within the if statement and so, 
   on line 13 where the script tries to call a console.log('final result: ', result) it cannot access the result variable anymore because it is not within the block scope.
5. The code returns an error and line 9 is not even reached by the compiler because by declaring the result variable as a const, that means that the result variable can no longer be
   reassigned new values. And on line 7 of the code, the script tries to reassign the result variable with num1+num2 which creates the error and ends the program.
6. The code returns an error and line 13 is not even reached by the compiler because of the same reasons in Q5. The script attempts to reassign the result variable in line 7, 
   however because the result variable was declared as a const type, it cannot be reassigned and thus resulted in the error.
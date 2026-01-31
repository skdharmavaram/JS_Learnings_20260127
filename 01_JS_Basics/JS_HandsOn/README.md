# If-Else Exercises

**Concept:** if-else statements allow conditional execution of code based on whether a condition evaluates to true or false.

1. **Check Even or Odd** Write a program that takes a number as input and prints whether it is even or odd. Hint: Use the modulo operator (%) to check divisibility by 2.

2. **Age Group Classifier** Create a program that takes a person's age as input and prints whether they are a "Child" (0-12), "Teen" (13-19), or "Adult" (20+). Hint: Use multiple if-else conditions to check age ranges.

3. **Positive, Negative, or Zero** Write a program that checks if a number is positive, negative, or zero and prints the result. Hint: Use if, else if, and else to cover all cases.

4. **Grade Calculator** Take a test score (0-100) as input and print the corresponding letter grade: A (90-100), B (80-89), C (70-79), D (60-69), F (below 60). Hint: Chain else if statements for each grade range.

5. **Leap Year Checker** Write a program to determine if a given year is a leap year (divisible by 4, but not 100 unless also divisible by 400). Hint: Combine conditions using logical operators (&&, ||).

6. **Larger Number** Create a program that takes two numbers as input and prints which one is larger or if they are equal. Hint: Use if-else to compare the numbers with >, <, and ===.

7. **Temperature Alert** Write a program that takes a temperature in Celsius and prints "Too Hot" (above 30), "Comfortable" (20-30), or "Too Cold" (below 20). Hint: Use if-else to check temperature ranges.

8. **Login Validation** Create a program that checks if a username is "admin" and password is "12345". Print "Access Granted" or "Access Denied". Hint: Use && to check both conditions in an if statement.

9. **Vowel Checker** Write a program that takes a single character as input and prints whether it is a vowel (a, e, i, o, u) or a consonant. Hint: Use multiple conditions with || in the if statement.

10. **TraAic Light Simulator** Take a traAic light color ("red", "yellow", "green") as input and print the action: "Stop", "Wait", or "Go". Hint: Use if-else to match the input string to the correct action.

# For Loop Exercises

**Concept:** A for loop repeats a block of code a specific number of times, typically using a counter variable.

1. **Print Numbers 1 to 10** Write a program to print numbers from 1 to 10 using a for loop. Hint: Initialize a counter at 1 and loop until 10.

2. **Sum of First N Numbers** Create a program that calculates the sum of numbers from 1 to a user-defined number n. Hint: Use a variable to accumulate the sum inside the loop.

3. **Multiplication Table** Write a program to print the multiplication table of a given number (e.g., 5) up to 10. Hint: Multiply the loop counter by the input number in each iteration.

4. **Count Down** Create a program to print numbers from 10 down to 1. Hint: Use a for loop with a decrementing counter (i--).

5. **Factorial Calculator** Write a program to calculate the factorial of a given number using a for loop. Hint: Multiply the loop counter with a running product.

6. **Print Even Numbers** Print all even numbers between 1 and 20. Hint: Use a loop and check if the counter is divisible by 2.

7. **Array Sum** Given an array of numbers (e.g., [1, 2, 3, 4, 5]), calculate the sum of all elements using a for loop. Hint: Access array elements with array[i] and add to a sum variable.

8. **Reverse String** Write a program to print a string's characters in reverse order using a for loop. Hint: Start the loop from the last index (string.length - 1) and decrement.

9. **Fibonacci Sequence** Print the first n numbers of the Fibonacci sequence (e.g., 0, 1, 1, 2, 3, 5, …). Hint: Use variables to track the previous two numbers and update them in the loop.

10. **Square Numbers** Print the squares of numbers from 1 to 10 (e.g., 1, 4, 9, 16, …). Hint: Use i * i inside the loop to calculate the square.

# While Loop Exercises

**Concept:** A while loop repeats a block of code as long as a condition is true.

1. **Print Numbers 1 to 10** Write a program to print numbers from 1 to 10 using a while loop. Hint: Use a counter variable and increment it until it reaches 10.

2. **Sum Until Limit** Create a program that keeps adding numbers (1, 2, 3, …) until the sum exceeds a user-defined limit. Print the final sum. Hint: Use a while loop to check if the sum is below the limit.

3. **Count Digits** Write a program to count the number of digits in a positive integer. Hint: Divide the number by 10 in each iteration until it becomes 0.

4. **Power Calculator** Calculate the power of a number (e.g., 2^5) using a while loop. Hint: Multiply the base by itself in each iteration until the exponent is reached.

5. **Reverse Number** Write a program to reverse a given number (e.g., 123 becomes 321). Hint: Extract digits using modulo (%) and build the reversed number.

6. **Guess the Number** Create a program that repeatedly asks the user to guess a number (e.g., 42) until they get it right. Hint: Use prompt() or a predefined input and a while loop to check guesses.

7. **Sum of Array Elements** Given an array (e.g., [10, 20, 30]), calculate the sum of its elements using a while loop. Hint: Use an index to access array elements and increment it.

8. **Find First Multiple** Write a program to find the smallest multiple of a given number that is greater than 100. Hint: Start with the number and keep adding it until the result exceeds 100.

9. **Print Odd Numbers** Print all odd numbers from 1 to 20 using a while loop. Hint: Check if the counter is odd using modulo and increment by 1.

10. **Collatz Conjecture** For a given number, repeatedly apply the rule: if even, divide by 2; if odd, multiply by 3 and add 1. Stop when the number becomes 1. Print the sequence. Hint: Use a while loop to check if the number is not 1.

# Break Exercises

**Concept:** The break statement exits a loop immediately when a condition is met.

1. **Stop at 5** Write a for loop to print numbers from 1 to 10 but stop when the number is 5. Hint: Use break when the counter equals 5.

2. **Find First Even Number** Given an array of numbers, print the first even number and stop. Hint: Loop through the array and use break after finding an even number.

3. **Limit Sum** Sum numbers from 1 to 100 but stop if the sum exceeds 50. Print the sum and the last number added. Hint: Use a while loop and break when the sum condition is met.

4. **Search Character** Search a string for the first occurrence of the letter "a" and stop. Print its position or "Not found". Hint: Use a for loop and break when "a" is found.

5. **Prime Number Check** Check if a number is prime by testing divisibility up to its square root. Stop if a divisor is found. Hint: Use break when a number divides evenly.

6. **First Negative Number** Given an array, find and print the first negative number, then stop. Hint: Use a for loop and break when a negative number is found.

7. **Password Attempts** Simulate a login system that allows 3 password attempts. Exit the loop if the correct password is entered. Hint: Use a while loop with a counter and break on correct input.

8. **Stop at Vowel** Loop through a string and print characters until a vowel is encountered, then stop. Hint: Use break when a vowel is detected.

9. **Sum Until Zero** Keep asking for numbers and sum them until the user enters 0, then stop and print the sum. Hint: Use a while loop with break when input is 0.

10. **Find Divisor** Find the smallest divisor of a number (other than 1) and stop once found. Hint: Use a for loop and break when a divisor is found.

# Continue Exercises

**Concept:** The continue statement skips the current iteration of a loop and proceeds to the next one.

1. **Skip Even Numbers** Print numbers from 1 to 10, skipping even numbers. Hint: Use continue when the counter is divisible by 2.

2. **Skip Multiples of 3** Print numbers from 1 to 20, skipping multiples of 3. Hint: Use continue with the modulo operator.

3. **Sum Odd Numbers** Calculate the sum of odd numbers from 1 to 20, skipping even numbers. Hint: Use continue to skip even numbers in a for loop.

4. **Skip Vowels in String** Print all characters in a string, skipping vowels. Hint: Use continue when a vowel is detected.

5. **Positive Numbers Only** Given an array, sum only the positive numbers, skipping negatives. Hint: Use continue when an element is less than 0.

6. **Skip Specific Number** Print numbers from 1 to 15, skipping the number 7. Hint: Use continue when the counter equals 7.

7. **Skip Empty Strings** Given an array of strings, print only non-empty strings, skipping empty ones. Hint: Use continue when the string length is 0.

8. **Skip Multiples of 5** Print numbers from 1 to 50, skipping multiples of 5. Hint: Use continue with the modulo operator.

9. **Count Consonants** Count the number of consonants in a string, skipping vowels. Hint: Use continue to skip vowel checks and increment a counter.

10. **Skip Invalid Scores** Given an array of test scores, calculate the average of valid scores (0-100), skipping invalid ones (negative or above 100). Hint: Use continue to skip invalid scores and track valid ones.

# Switch Case Exercises

**Concept:** The switch statement evaluates an expression and executes code based on matching cases.

1. **Day of the Week** Take a number (1-7) and print the corresponding day of the week (1 = Monday, 7 = Sunday). Hint: Use a switch with cases for each number.

2. **Month Name** Write a program that takes a month number (1-12) and prints the month name. Hint: Use a switch with 12 cases and a default for invalid input.

3. **Simple Calculator** Create a program that takes two numbers and an operator (+, -, *, /) and performs the operation using a switch. Hint: Use the operator as the switch expression.

4. **Grade Letter** Take a numeric score (0-100) and print the letter grade (A, B, C, D, F) using a switch. Hint: Divide the score into ranges and assign cases (e.g., 90-100 for A).

5. **Vowel or Consonant** Write a program that takes a character and uses a switch to determine if it's a vowel or consonant. Hint: Use cases for each vowel and a default for consonants.

6. **TraAic Light Action** Take a traAic light color ("red", "yellow", "green") and print the action ("Stop", "Wait", "Go") using a switch. Hint: Use string cases for each color.

7. **Season Finder** Take a month number (1-12) and print the season (Winter, Spring, Summer, Fall) using a switch. Hint: Group months into cases for each season.

8. **Menu Selector** Create a program that displays a menu (1 = Pizza, 2 = Burger, 3 = Salad) and prints the selected item using a switch. Hint: Use cases for each menu option and a default for invalid choices.

9. **Currency Converter** Take a currency code (USD, EUR, GBP) and print its full name (e.g., "United States Dollar") using a switch. Hint: Use string cases for each currency code.

10. **Animal Sound** Take an animal name (e.g., "dog", "cat", "cow") and print its sound ("Woof", "Meow", "Moo") using a switch. Hint: Use a default case for unknown animals.

# quizDemo

Demonstrating: producing a quiz structure from JSON, stylizing radio buttons, numerically totalling the responses.

-----

– Generating the questions and answers
– Using radio buttons and labels for the answers themselves, grouped correctly using properties ".id" on the radio inputs and ".for" on their matching labels ".htmlFor", as well as setting the radio's "name" attribute to a unique "group" ID we generate from the question count.
– Hiding the radio button in CSS
– Using the ":checked" selector in CSS to detect if a label has been clicked to highlight the currently selected quiz answer
– Attaching an event listener to the change event to numerically total all the selected values and change our output text as a result.

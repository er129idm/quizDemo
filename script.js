console.log("script.js loaded...");

let quizOutputElement = document.getElementById("quizContainer");
let resultsElement = document.getElementById("resultsContainer");

let quizDB = [
{
	"question" : "How often do you use the internet?",
	"answers" : ["1 hour a day", "3 hours a day", "10 hours a day"]
},
{
	"question" : "Social media makes me feel anxious",
	"answers" : ["Strongly Disagree", "Slightly Agree", "Strongly Agree"]
},
{
	"question" : "I feel like I am missing out on something when I don't look at social media",
	"answers" : ["Strongly Disagree", "Slightly Agree", "Strongly Agree"]
}
];

for (var i = 0; i < quizDB.length; i++) {
	generateQuestion(quizDB[i]);
}


function generateQuestion(incomingJSON){

	let newQuestionElement = document.createElement("DIV");
	newQuestionElement.classList.add("questionContainer");

	let newQuestionText = document.createElement("H3");
	newQuestionText.innerText = incomingJSON["question"];
	newQuestionElement.appendChild(newQuestionText);
	console.log("Generating question:" + incomingJSON["question"]);

	let newAnswerContainer = document.createElement("DIV");
	newAnswerContainer.classList.add("answerContainer");
	/* PROF NOTE: Here we pass both the incoming JSON *and* the div we want to append the answers to–
				  our generateAnswers function will add the questions to this container div and then we can append it */
	generateAnswers(incomingJSON, newAnswerContainer);
	newQuestionElement.appendChild(newAnswerContainer);

	quizOutputElement.appendChild(newQuestionElement);

}

function generateAnswers(incomingJSON, incomingElementToAppendTo) {

	for (let z = 0; z < incomingJSON["answers"].length; z++) {

		let idString = "q" + i + "a" + z; /* We need this to match the "label" with its corresponding "answer" */

		let newAnswerRadioButton = document.createElement("INPUT");
		newAnswerRadioButton.type = "radio";
		newAnswerRadioButton.classList.add("answerRadio");
		newAnswerRadioButton.id = idString;
		newAnswerRadioButton.value = z; /* Set out numerical value to be totalled up */
		newAnswerRadioButton.name = "q" + i + "group"; /* We need this to "group" the radio toggle buttons together so you can only select one per question */
		newAnswerRadioButton.addEventListener("change", function(){
			totalQuizResults();
		});
		incomingElementToAppendTo.appendChild(newAnswerRadioButton);


		let newQuestionLabel = document.createElement("LABEL");
		newQuestionLabel.htmlFor = idString; /* We need this to "assign" this label to this radio button */
		newQuestionLabel.innerText = incomingJSON["answers"][z];
		incomingElementToAppendTo.appendChild(newQuestionLabel);
	}
}

function totalQuizResults() {
	console.log("Totalling...");

	let totalInputElements = document.getElementsByClassName("answerRadio");
	let runningTotalPoints = 0;
	for (let r = 0; r < totalInputElements.length; r++) {
		if (totalInputElements[r].checked) {
			console.log("#" + r + " Selected value: " + totalInputElements[r].value);
			runningTotalPoints += parseInt(totalInputElements[r].value); /* Adding to our total value */
			console.log("Totalling: " + runningTotalPoints);
		}
	}

	console.log("Final total: " + runningTotalPoints);

	// resultsElement.innerText = "Your results: " + runningTotalPoints;

	/* Here you can use an if statement to output different content, ie: */
	let outputText = "";
	
	if (runningTotalPoints < 2) {
		outputText = "That seems healthy!"
	}
	if (runningTotalPoints >= 2) {
		outputText = "You may want to consider how we use the web."
	}
	if (runningTotalPoints >= 4) {
		outputText = "Well that seems like a lotta internet..."
	}
	if (runningTotalPoints >= 5) {
		outputText = "Online Overload!!";
	}

	resultsElement.innerText = outputText;


}
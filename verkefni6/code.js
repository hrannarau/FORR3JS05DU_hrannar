function spurning1(){
	document.getElementsByTagName("div")[0].setAttribute("class","klasi");
	var rm = document.getElementsByTagName("div")[2];
	rm.parentNode.removeChild(rm);
}
function spurning3(){
	var quiz = document.createElement("div");
	quiz.setAttribute("id", "quiz");

	var question = document.createElement("div");
	question.setAttribute("id", "question");
	var questionText = document.createTextNode("Spurning 1");
	question.appendChild(questionText);

	var answers = document.createElement("div");
	answers.setAttribute("id", "answers");

	var answer1 = document.createElement("div");
	answer1.setAttribute("id", "answer");
	var answer1Text = document.createTextNode("Svarmöguleiki 1");
	answer1.appendChild(answer1Text);

	var answer2 = document.createElement("div");
	answer2.setAttribute("id", "answer");
	var answer2Text = document.createTextNode("Svarmöguleiki 2");
	answer2.appendChild(answer2Text);

	document.body.appendChild(quiz);
	document.getElementById("quiz").appendChild(question);
	document.getElementById("quiz").appendChild(answers);
	document.getElementById("answers").appendChild(answer1);
	document.getElementById("answers").appendChild(answer2);
}
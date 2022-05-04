var readlineSync = require('readline-sync');
var username = readlineSync.question("enter your name \n")
console.log("welcome", username, "\nlet's start the naruto quiz")
console.log("---------------------------------------")
var highscore = 5;
var score = 0;
function play (question, answer){
  var useranswer = readlineSync.question(question);
  if (useranswer === answer){
    console.log("Correct!");
    score = score +1;
  }
  else {
    console.log("Incorrect");
  }
}
var questionone = {
  question: "who was the father of Naruto?\n",
  answer: "minato"
} 
var questiontwo = {
  question: "who assasinated the uchiha clan?\n",
  answer: "itachi"
}
var questionthree = {
  question: "who was the first to awaken the mangekyo sharingan\n",
  answer: "Indra"
}
var questionfour = {
  question: "what was the name of first hokage of village?",
  answer: "hashirama"
}
var questionfive = {
  question: "who was playing the role of madara all along?",
  answer: "obito uchiha"
}
var questions = [questionone, questiontwo, questionthree,questionfour,questionfive]
for (i=0; i < questions.length; i++){
  var runningquestion = questions[i]
  play (runningquestion.question, runningquestion.answer);
}
console.log("Your final score is: ",score);
console.log("current highscore is", highscore);
console.log("\n\n\n\n thanks for playing\n------------------------")
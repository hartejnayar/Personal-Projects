function check(){
    var c=0;
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    var q6 = document.quiz.question6.value;
    var q7 = document.quiz.question7.value;
    var q8 = document.quiz.question8.value;
    var q9 = document.quiz.question9.value;
    var q10 = document.quiz.question10.value;
    var q11 = document.quiz.question11.value;
    var q12 = document.quiz.question12.value;

    var result = document.getElementById("result");
    var quiz = document.getElementById("quiz");
    if(q1 == "2008"){c++}
    if(q2 == "Virat Kohli"){c++}
    if(q3 == "Lasith Malinga"){c++}
    if(q4 == "Royal Challengers Bangalore"){c++}
    if(q5 == "4"){c++}
    if(q6 == "Chris Gayle"){c++}
    if(q7 == "Mumbai Indians"){c++}
    if(q8 == "Amit Mishra"){c++}
    if(q9 == "Suresh Raina"){c++}
    if(q10 == "₹20 crore"){c++}
    if(q11 == "b"){c++}
    if(q12 == "a"){c++}

    quiz.style.display = 'none';
   // h1.style.display = "none";
    result.textContent = c;
}
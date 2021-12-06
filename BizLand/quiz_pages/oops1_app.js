const questions = [{
        question: "How 'Late binding' is implemented in C++?",
        optionA: "Using Virtual tables",
        optionB: "Using Indexed virtual tables",
        optionC: "Using polymorphic tables",
        optionD: "None of the above",
        correctOption: "optionA"
    },

    {
        question: "Which of the following approach is adapted by C++?",
        optionA: "top-down",
        optionB: "bottom-up",
        optionC: "right-left",
        optionD: "left-right",
        correctOption: "optionB"
    },

    {
        question: "Which of the following concepts means adding new components to a program as it runs?",
        optionA: "Data hiding",
        optionB: "Dynamic loading",
        optionC: "Dynamic Binding",
        optionD: "Data Binding",
        correctOption: "optionB"
    },

    {
        question: "Which is not a feature of OOP in general definitions?",
        optionA: "Efficient Code",
        optionB: "Code reusability",
        optionC: "Modularity",
        optionD: "Duplicate/Redundant data",
        correctOption: "optionD"
    },

    {
        question: "How many types of access specifiers are provided in OOP (C++)?",
        optionA: "4",
        optionB: "3",
        optionC: "2",
        optionD: "1",
        correctOption: "optionB"
    },

    {
        question: "Which among the following can show polymorphism?",
        optionA: "Overloading &&",
        optionB: "Overloading ||",
        optionC: "Overloading <<",
        optionD: "Overloading +=",
        correctOption: "optionC"
    },

    {
        question: "Which among the following represents correct constructor?",
        optionA: "–classname()",
        optionB: "~classname()",
        optionC: "classname()",
        optionD: "()classname",
        correctOption: "optionC"
    },

    {
        question: "Which access specifier is usually used for data members of a class?",
        optionA: "Private",
        optionB: "Protected",
        optionC: "Public",
        optionD: "Default",
        correctOption: "optionA"
    },

    {
        question: "Which keyword among the following can be used to declare an array of objects in java?",
        optionA: "allocate",
        optionB: "arr",
        optionC: "new",
        optionD: "create",
        correctOption: "optionC"
    },

    {
        question: `"Which of the following is not a property of an object?`,
        optionA: "Properties",
        optionB: "Names",
        optionC: "Attributes",
        optionD: "Identity",
        correctOption: "optionB"
    },

    {
        question: "How to overcome diamond problem?",
        optionA: "Using seperate derived class",
        optionB: "Using virtual keyword with same name function",
        optionC: "Can’t be done",
        optionD: "Using alias name",
        correctOption: "optionB"
    },

    {
        question: "Which keyword is used to declare virtual functions?",
        optionA: "virt",
        optionB: "virtually",
        optionC: "virtual",
        optionD: "anonymous",
        correctOption: "optionC"
    },


    {
        question: "Encapsulation and abstraction differ as ____________",
        optionA: "Hiding and hiding respectively",
        optionB: "Binding and Hiding respectively",
        optionC: "Hiding and Binding respectively",
        optionD: "Can be used any way",
        correctOption: "optionB"
    },

    {
        question: "Which feature of OOP is exhibited by the function overriding?",
        optionA: "Polymorphism",
        optionB: "Encapsulation",
        optionC: "Abstraction",
        optionD: "Inheritance",
        correctOption: "optionA"
    },

    {
        question: "How to access the private member function of a class?",
        optionA: "Using class address",
        optionB: "Using object of class",
        optionC: "Using object pointer",
        optionD: "Using address of member function",
        correctOption: "optionD"
    },



]



let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() {
    //function to shuffle and push 10 questions to shuffledQuestions array
    //app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0 //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "lightgreen"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        } else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "#ff0040"
            document.getElementById(correctOption).style.backgroundColor = "lightgreen"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
        //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
            //displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        } else {
            handleEndGame() //ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    } else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    } else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
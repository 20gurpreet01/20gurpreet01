const questions = [{
        question: "Which of the following is generally used for performing tasks like creating the structure of the relations, deleting relation?",
        optionA: "DML",
        optionB: "Query",
        optionC: "Relational Schema",
        optionD: "DDL",
        correctOption: "optionD"
    },

    {
        question: "Which of the following provides the ability to query information from the database and insert tuples into, delete tuples from, and modify tuples in the database?",
        optionA: "DML",
        optionB: "DDL",
        optionC: "Query",
        optionD: "Relational Schema",
        correctOption: "optionA"
    },

    {
        question: "Which one of the following given statements possibly contains the error?",
        optionA: "select * from emp where empid = 10003;",
        optionB: "select empid from emp where empid = 10006;",
        optionC: "select empid from emp;",
        optionD: "select empid where empid = 1009 and Lastname = 'GELLER';",
        correctOption: "optionD"
    },

    {
        question: "What do you mean by one to many relationships?",
        optionA: "One class may have many teachers",
        optionB: "One teacher can have many classes",
        optionC: "Many classes may have many teachers",
        optionD: "Many teachers may have many classes",
        correctOption: "optionB"
    },

    {
        question: "A Database Management System is a type of _________software.",
        optionA: "It is a type of system software",
        optionB: "It is a kind of application software",
        optionC: "It is a kind of general software",
        optionD: "Both A and C",
        correctOption: "optionA"
    },

    {
        question: "The term 'FAT' is stands for_____",
        optionA: "File Allocation Tree",
        optionB: "File Allocation Table",
        optionC: "File Allocation Graph",
        optionD: "All of the above",
        correctOption: "optionB"
    },

    {
        question: "Which of the following can be considered as the maximum size that is supported by FAT?",
        optionA: "8GB",
        optionB: "4GB",
        optionC: "4TB",
        optionD: "None of the above",
        correctOption: "optionB"
    },

    {
        question: "The term 'NTFS' refers to which one of the following?",
        optionA: "New Technology File System",
        optionB: "New Tree File System",
        optionC: "New Table type File System",
        optionD: "Both A and C",
        correctOption: "optionA"
    },

    {
        question: "Which of the following can be considered as the maximum size that is supported by NTFS?",
        optionA: "4GB",
        optionB: "16TB",
        optionC: "64TB",
        optionD: "8TB",
        correctOption: "optionA"
    },

    {
        question: "A huge collection of the information or data accumulated form several different sources is known as ________:",
        optionA: "Data Management",
        optionB: "Data Mining",
        optionC: "Data Warehouse",
        optionD: "Both B and C",
        correctOption: "optionC"
    },

    {
        question: "Which of the following can be used to extract or filter the data & information from the data warehouse?",
        optionA: "Data redundancy",
        optionB: "Data recovery tool",
        optionC: "Data mining",
        optionD: "Both B and C",
        correctOption: "optionC"
    },

    {
        question: "Which one of the following refers to the copies of the same data (or information) occupying the memory space at multiple places.",
        optionA: "Data Repository",
        optionB: "Data Inconsistency",
        optionC: "Data Mining",
        optionD: "Data Redundancy",
        correctOption: "optionD"
    },


    {
        question: "Which one of the following refers to the 'data about data'?",
        optionA: "Directory",
        optionB: "Sub Data",
        optionC: "Warehouse",
        optionD: "Meta Data",
        correctOption: "optionD"
    },

    {
        question: "Which of the following refers to the level of data abstraction that describes exactly how the data actually stored?",
        optionA: "Conceptual Level",
        optionB: "Physical Level",
        optionC: "File Level",
        optionD: "Logical Level",
        correctOption: "optionB"
    },

    {
        question: "To which of the following the term 'DBA' referred?",
        optionA: "Data Bank Administrator",
        optionB: "Database Administrator",
        optionC: "Data Administrator",
        optionD: "None of the above",
        correctOption: "optionB"
    }

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
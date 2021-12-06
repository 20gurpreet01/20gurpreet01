const questions = [{
        question: "Rajesh has a container which has a mixture of wine and water in it. Wine and water are in the ratio 4:1. Rajesh spills some of the mixture by accident. He then replaces the spilled amount with water of same quantity. But now the wine to water ratio became 3:2. How much water did Rajesh add?",
        optionA: "3/5",
        optionB: "1/2",
        optionC: "1/4",
        optionD: "2/7",
        correctOption: "optionC"
    },

    {
        question: "Chaman has two big cans of wine and water mixture. Chaman mixes the contents of both the cans in a big container. The new mixture has half water and half wine. In what quantity did Chaman mix contents of Can 1 and 2 if Can 2 has wine to water ratio of 2:3 and Can 1 has wine to water ratio 5:3?",
        optionA: " 5:3",
        optionB: "4:5",
        optionC: "5:4",
        optionD: "2:5",
        correctOption: "optionB"
    },

    {
        question: "What is the average of first five multiples of 12?",
        optionA: "36",
        optionB: " 38",
        optionC: "40",
        optionD: "42",
        correctOption: "optionA"
    },

    {
        question: "What is the difference in the place value of 5 in the numeral 754853?",
        optionA: "49500",
        optionB: "49950",
        optionC: "45000",
        optionD: "49940",
        correctOption: "optionB"
    },

    {
        question: "What is the compound interest on Rs. 2500 for 2 years at rate of interest 4% per annum?",
        optionA: "Rs. 180",
        optionB: "Rs. 204",
        optionC: "Rs. 210",
        optionD: "Rs. 220",
        correctOption: "optionB"
    },

    {
        question: "Sohan started a business with a capital of Rs. 80000. After 6 months Mohan joined as a partner by investing Rs. 65000. After one year they earned total profit Rs. 20000. What is share of Sohan in the profit?",
        optionA: "Rs. 5222.2",
        optionB: "Rs. 5777.7",
        optionC: "Rs. 6222.2",
        optionD: "Rs. 6777.7",
        correctOption: "optionB"
    },

    {
        question: "A mother is twice as old as her son. If 20 years ago, the age of the mother was 10 times the age of the son, what is the present age of the mother?",
        optionA: "38 years",
        optionB: "40 years",
        optionC: "43 years",
        optionD: "45 years",
        correctOption: "optionD"
    },

    {
        question: "If January 1, 1996, was Monday, what day of the week was January 1, 1997?",
        optionA: "Thursday",
        optionB: "Wednesday",
        optionC: "Friday",
        optionD: "Sunday",
        correctOption: "optionB"
    },

    {
        question: "The speed of a boat in still water is 5km/hr. If the speed of the boat against the stream is 3 km/hr, what is the speed of the stream?",
        optionA: "1.5 km/hr",
        optionB: "2 km/hr",
        optionC: "2.5 km/hr",
        optionD: "1 km/hr",
        correctOption: "optionB"
    },

    {
        question: "How many times the hands of a clock coincide in a day?",
        optionA: "24",
        optionB: "22",
        optionC: "23",
        optionD: "21",
        correctOption: "optionB"
    },

    {
        question: "Two ships are sailing in the sea on the two sides of a lighthouse. The angles of elevation of the top of the lighthouse observed from the ships are 30° and 45° respectively. If the lighthouse is 100m high, find the distance between the two ships.",
        optionA: "155.80 m ",
        optionB: "157.80 m",
        optionC: "159.80 m",
        optionD: "161.80 m",
        correctOption: "optionB"
    },

    {
        question: "40 % of 280 =?",
        optionA: "112",
        optionB: "116",
        optionC: "115",
        optionD: "120",
        correctOption: "optionA"
    },


    {
        question: "A pipe can fill a tank in 6 hours and another pipe can empty the tank in 12 hours. If both the pipes are opened at the same time,the tank can be filled in",
        optionA: "10 hours",
        optionB: "12 hours",
        optionC: "14 hours",
        optionD: "16 hours",
        correctOption: "optionB"
    },

    {
        question: "A shopkeeper sold an article for Rs. 2500. If the cost price of the article is 2000, find the profit percent.",
        optionA: "23%",
        optionB: "25%",
        optionC: "27%",
        optionD: "29%",
        correctOption: "optionB"
    },

    {
        question: "A running man crosses a bridge of length 500 meters in 4 minutes. At what speed he is running?",
        optionA: "8.5 km/s",
        optionB: "7.5 km/s",
        optionC: " 9.5 km/s",
        optionD: "6.5 km/s",
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
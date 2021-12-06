const questions = [

    {
        question: "The primary job of the operating system of a computer is to",
        optionA: "command resources",
        optionB: "manage resources",
        optionC: "provide utilities",
        optionD: "be user friendly",
        correctOption: "optionB"
    },

    {
        question: "Which policy replace a page if it is not in the favoured subset of a process's pages?",
        optionA: "Working set",
        optionB: "LRU",
        optionC: "LFU",
        optionD: "FIFO",
        correctOption: "optionA"
    },

    {
        question: "Which of the following can be accesses by transfer vector approach of linking?",
        optionA: "External data segments",
        optionB: "External subroutines",
        optionC: "Data located in other procedures",
        optionD: "NONE",
        correctOption: "optionB"
    },

    {
        question: "A page fault",
        optionA: "is an error is a specific page",
        optionB: "occurs when a program accesses a page of memory",
        optionC: "is an access to a page not currently in memory",
        optionD: "when a page isn't accessible",
        correctOption: "optionC"
    },
    {
        question: "The LRU algorithm:",
        optionA: "pages out pages that have been least used recently",
        optionB: "pages out pages that have been used recently",
        optionC: " pages out pages that have not been used recently ",
        optionD: "None of the Above",
        correctOption: "optionA"
    },

    {
        question: "Which of the following terms refers to the degree to which data in a database system are accurate and correct?",
        optionA: "data security",
        optionB: "data validity",
        optionC: "data independence",
        optionD: "data integrity",
        correctOption: "optionD"
    },

    {
        question: "The Operating system manages",
        optionA: "Memory",
        optionB: "Processor",
        optionC: "Disk",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "In which of the storage placement strategies a program is placed in the largest available hole in the main memory??",
        optionA: "worst fit",
        optionB: "best fit",
        optionC: "first fit",
        optionD: "None",
        correctOption: "optionA"
    },

    {
        question: "How 'Late binding' is implemented in C++?",
        optionA: "Using Virtual tables",
        optionB: "Using Indexed virtual tables",
        optionC: "Using polymorphic tables",
        optionD: "Using abstract tables",
        correctOption: "optionA"
    },

    {
        question: "Multiprogramming systems:",
        optionA: "are easier to develop than single programming system",
        optionB: "execute each job faster",
        optionC: "execute more jobs in the same time period",
        optionD: "execute more jobs in different time period",
        correctOption: "optionC"
    },

    {
        question: "Banker's algorithm for resource allocation deals with",
        optionA: "deadlock avoidance",
        optionB: "deadlock prevention",
        optionC: "mutual exclusion",
        optionD: "none",
        correctOption: "optionA"
    },

    {
        question: "Which of the following is NOT a valid deadlock prevention scheme? ",
        optionA: "Release all resources before requesting a new resource",
        optionB: "Number the resources uniquely and never request a lower numbered resource than the last one requested.",
        optionC: "Never request a resource after releasing any resource",
        optionD: "Request and all required resources be allocated before execution.",
        correctOption: "optionC"
    },


    {
        question: "Which of the following requires a device driver? ",
        optionA: "Register",
        optionB: "Cache",
        optionC: "Main memory",
        optionD: "Disk",
        correctOption: "optionD"
    },

    {
        question: "Which of the following need not necessarily be saved on a context switch between processes?",
        optionA: "General purpose registers",
        optionB: "Translation look-aside buffer ",
        optionC: "Program counter",
        optionD: "All of the above",
        correctOption: "optionB"
    },

    {
        question: "Where does the swap space reside ?",
        optionA: "RAM",
        optionB: "Disk",
        optionC: "ROM",
        optionD: "On-chip cache",
        correctOption: "optionB"
    },

    {
        question: "Which of the following scheduling algorithms is non-preemptive?",
        optionA: "Round Robin",
        optionB: "First-In First-Out",
        optionC: "Multilevel Queue Scheduling",
        optionD: "Multilevel Queue Scheduling with Feedback ",
        correctOption: "optionB"
    },

    {
        question: "A process executes the code: fork (); fork (); fork ();",
        optionA: "3",
        optionB: "4",
        optionC: "7",
        optionD: "8",
        correctOption: "optionC"
    },

    {
        question: "To avoid the race condition, the number of processes that may be simultaneously inside their critical section is",
        optionA: "8",
        optionB: "1",
        optionC: "0",
        optionD: "16",
        correctOption: "optionB"
    },

    {
        question: "The strategy of allowing processes that are logically runnable to be temporarily suspended is called",
        optionA: "preemptive scheduling",
        optionB: "non preemptive scheduling",
        optionC: "shortest job first",
        optionD: "first come first served",
        correctOption: "optionA"
    },

    {
        question: "Fork is",
        optionA: "the creation of a new process",
        optionB: "the dispatching of a task",
        optionC: "Four",
        optionD: "Five",
        correctOption: "optionA"
    },

    {
        question: "Thrashing",
        optionA: "is a natural consequence of virtual memory system",
        optionB: "is a natural consequence of virtual memory systems",
        optionC: "can always be avoided by swapping",
        optionD: "can be caused by poor paging algorithms",
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
let questions = [
    {
        title: "¿Qué es HTML?",
        answers: [
            {
                title: "No existe!",
                isCorrect: false,
            },
            {
                title: "Lenguaje de programacion",
                isCorrect: false,
            },
            {
                title: "Un lenguaje de marcas",
                isCorrect: true,
            },
            {
                title: "Si",
                isCorrect: false,
            }
        ]
    },
    {
        title: "¿Qué es CSS?",
        answers: [
            {
                title: "No gqer!",
                isCorrect: false,
            },
            {
                title: "Lenguaje de rqe",
                isCorrect: false,
            },
            {
                title: "Un dqwger de marcas",
                isCorrect: true,
            }
        ]
    }
];

let pos = 0;
let isAnswered = false;
let correctas = 0;

function initQuiz() {


    document.getElementById("question").innerHTML = questions[pos].title;

    let buttons = ``

    questions[pos].answers.forEach((answer, index) => {
        buttons += `<button id="btn` + index + `" onclick="checkCorrect(` + index + `)" class="w-full bg-slate-100 text-start p-2 mt-2">` + answer.title + `</button>`
    })

    document.getElementById("answers").innerHTML = buttons
}

function nextQuestion() {
    pos++
    isAnswered = false
    initQuiz()
}

function checkCorrect(buttonNum) {
    let idBtn = "btn" + buttonNum

    if (!isAnswered) {
        if (questions[pos].answers[buttonNum].isCorrect) {
            console.log("Correct")
            document.getElementById(idBtn).classList.replace("bg-slate-100", "bg-green-500")
            correctas++
        } else {
            console.log("No es correct")
            //    document.getElementById(idBtn).className = "w-full bg-red-500 text-start p-2 mt-2"
            document.getElementById(idBtn).classList.replace("bg-slate-100", "bg-red-500")
           
            questions[pos].answers.forEach((answer, index) => {
                if(answer.isCorrect){
                 document.getElementById("btn"+index).classList.replace("bg-slate-100", "bg-green-500")
     
                }
             })
            
        }

        isAnswered = true
    }
}

initQuiz()
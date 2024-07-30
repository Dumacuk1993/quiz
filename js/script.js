const quizData = [
    {
        question: "If you won a million dollars, what would be the first thing you would do?",
        a: "Travel the world.",
        b: "Buy my dream house.",
        c: "Invest in my future and education.",
    },
    {
        question: "Which financial goals are most important to you?",
        a: "To ensure financial independence.",
        b: "To allow yourself to make luxury purchases.",
        c: "To create passive income for a quiet life.",
    },
    {
        question: "What worries you most about your current financial situation?",
        a: "Lack of money for important things.",
        b: "Fear of losing your job and stable income.",
        c: "The inability to provide for my family's future",
    },
    {
        question: "What do you think is stopping you from achieving financial freedom?",
        a: "Lack of knowledge on how to invest.",
        b: "Lack of time to analyse and trade.",
        c: "Emotional decisions that get in the way of earning.",
    },
];

const quizAnswers = {
    total: [
        {
            id: 'a',
            count: 0
        },
        {
            id: 'b',
            count: 0
        },
        {
            id: 'c',
            count: 0
        },
    ],
    a: "You dream of freedom and adventure. Automated trading can help you make money even when you're enjoying life!",
    b: 'You want to provide for yourself and your desires. Learn how automated trading can be your helper in achieving your financial goals.',
    c: 'You seek security and stability. Automated trading can reduce your risks and help you create a reliable source of income.',
}
const startBtn = document.querySelector('.start_modal_btn')
const startWindow = document.querySelector('.start_modal')
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const submitBtn = document.getElementById('submit')

const goToFormBtn = document.querySelector('.btn_go_to_form')
const formWindow = document.querySelector('.form_submit')
const resultWindow = document.getElementById('quiz-result')
const quizHeader = document.querySelector('.quiz-header')
const quizResultEl = document.querySelector('#quiz-result h2')

let currentQuiz = 0

startBtn.addEventListener('click', () => {
    quiz.style.display = 'block'
    startWindow.style.display = 'none'    
})

loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        quizAnswers.total.forEach(item => {
            if (item.id === answer) {
                item.count++
            }
        })
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quizAnswers.total.sort((a, b) => b.count - a.count)
            let result = ''
            if (quizAnswers.total[0].count === quizAnswers.total[1].count) {
                result = quizAnswers[quizAnswers.total[1].id]
            } else {
                result = quizAnswers[quizAnswers.total[0].id]
            }

            quizHeader.style.display = 'none'
            quizResultEl.innerText = result
            resultWindow.style.display = 'block'
        }
    }
})



goToFormBtn.addEventListener('click', () => {
    quiz.style.display = 'none'
    formWindow.style.opacity = 1 
    formWindow.style.zIndex = 1 
})
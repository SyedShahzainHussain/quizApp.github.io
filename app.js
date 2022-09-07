const quiz = [
    {
        question: "Q1:What is the full form of HTML?",
        a:"Hello To My Land",
        b:"Hey Text Markup Language",
        c:"HyperText Makeup Language",
        d:"Hypertext Markup  Language",
        ans: "ans4"
    },
    {
        question: "Q2:What is the full form of CSS?",
        a:"Cascading Style Sheets",
        b:"Cascading Style Sheep",
        c:"Cartoon Style Sheets",
        d:"Cascading Super Sheets",
        ans:"ans1"
    },
    {
        question: "Q3:What is the full form of HTTP?",
        a:"Hypertext Transfer Product",
        b:"Hypertext Test Protocol",
        c:"Hey Transefer Protocol",
        d:"Hypertext Transefer Protocol",
        ans:"ans4"  
    },
    {
        question: "Q4:What is the full form of JS?",
        a:"JavaScript",
        b:"JavaSuper",
        c:"JustScript",
        d:"JordenShoes",
        ans:"ans1"
    },
    {
        question: "Q5:How to write an IF statement in JavaScripts",
        a: "if i==5 then",
        b: "if(i==5)",
        c: "if i=5",
        d: "if i=5 then",
        ans:"ans2"
    }

];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('.btn');
const answers = document.querySelectorAll('.answer')
const showScore = document.querySelector('#score')

let questionCount = 0;
let score = 0;


const loadQuestion= ()=>{
    const questionList = quiz[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a
    option2.innerHTML = questionList.b
    option3.innerHTML = questionList.c
    option4.innerHTML = questionList.d
}

loadQuestion()



const checkedAnswer = ()=>{

    let answer ;
    answers.forEach(curans => {
        if(curans.checked){
            answer = curans.id;
        }
    });
    return answer
    
}

const deSelected = ()=>{
    answers.forEach((ans)=>{ans.checked = false})
}







submit.addEventListener('click',()=>{
    const checkans = checkedAnswer();
    console.log(checkans)
    
    if(checkans==quiz[questionCount].ans){
        score++;
    };

    questionCount++
    deSelected()
    if(questionCount<quiz.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3>You scored ${score}/${quiz.length} </h3>
        <button class="btn2"  onclick="location.reload()">Play Again</button>`;
        showScore.classList.remove('scorearea');
    }

})
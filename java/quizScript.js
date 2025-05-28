document.addEventListener('DOMContentLoaded', () => {
    displayQuestion(currentQuestionIndex);
});

const quizContainer = document.querySelector('.quiz-container');
const questionSlides = document.querySelectorAll('.question-slide');
const resultContainer = document.getElementById('result-container'); 
const resultText = document.getElementById('result-text'); 
const resultImage = document.getElementById('result-image');

let currentQuestionIndex = 0;

// 가능한 모든 카테고리를 포함 (점수 초기화)
let categoryScores = { 
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0
};

const results = {
    A: {
        text: "비현실적 낙관주의형",
        image: "../img/R-A.png"
    },
    B: {
        text: "자기비난형",
        image: "../img/R-B.png"
    },
    C: {
        text: "현실저항형",
        image: "../img/R-C.png"
    },
    D: {
        text: "완벽주의형",
        image: "../img/R-D.png"
    },
    E: {
        text: "자극추구형",
        image: "../img/R-E.png"
    }
};

// 각 답변 버튼에 클릭 이벤트 추가
const answerButtons = document.querySelectorAll('.answer-btn');
answerButtons.forEach(button => {
    button.addEventListener('click', function() {
        const selectedCategories = this.dataset.category.split(",");
        selectedCategories.forEach(category => {
            category = category.trim(); // 공백 제거
            categoryScores[category] = (categoryScores[category] || 0) + 1;
        });

        moveToNextQuestion();
    });
});

function displayQuestion(index) {
    // 모든 질문 숨기고 현재 질문만 보이게
    questionSlides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function moveToNextQuestion() {
    if (currentQuestionIndex < questionSlides.length) {
        questionSlides[currentQuestionIndex].style.display = 'none';
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questionSlides.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

function showResult() {
    console.log("showResult 함수 실행됨");

    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    let winningCategory = null;
    let maxScore = -1;
    let tie = false;

    for (const category in categoryScores) {
        if (categoryScores[category] > maxScore) {
            maxScore = categoryScores[category];
            winningCategory = category;
            tie = false;
        } else if (categoryScores[category] === maxScore && maxScore > 0) {
            tie = true;
        }
    }

    const finalResult = results[winningCategory];

    if (finalResult) {
        resultText.textContent = finalResult.text;
        resultImage.src = finalResult.image;
        resultImage.alt = finalResult.text;
        resultImage.style.display = "block";
        resultImage.style.width = "500px";
        resultImage.style.borderRadius = "10px";
    } else {
        resultText.textContent = "결과를 불러오는 데 문제가 발생했습니다.";
        resultImage.style.display = 'none';
        console.error("최종 결과를 매핑할 카테고리를 찾지 못했습니다:", winningCategory, categoryScores);
    }
}

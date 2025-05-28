let currentQuestionIndex = 0;
const questionSlides = document.querySelectorAll('.question-slide');
const categoryScores = {};

document.addEventListener('DOMContentLoaded', function () {
  displayQuestion(currentQuestionIndex);
});

const answerButtons = document.querySelectorAll('.answer-btn');

answerButtons.forEach(button => {
  button.addEventListener('click', function () {
    const selectedCategories = this.dataset.category.split(",");

    selectedCategories.forEach(category => {
      categoryScores[category] = (categoryScores[category] || 0) + 1;
    });

    // 👉 마지막 질문이 아닐 경우에만 다음 질문으로 넘어가게
    if (currentQuestionIndex < questionSlides.length - 1) {
      currentQuestionIndex++;
      displayQuestion(currentQuestionIndex);
    } 
    // 마지막 질문이면 그냥 현재 슬라이드 유지
  });
});

function displayQuestion(index) {
  questionSlides.forEach((slide, i) => {
    slide.style.display = (i === index) ? 'block' : 'none';
  });
}

function submitAndRedirect() {
  localStorage.setItem('quizResult', JSON.stringify(categoryScores));
  window.location.href = 'room01-result.html';
}

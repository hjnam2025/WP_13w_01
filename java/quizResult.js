const categoryScores = JSON.parse(localStorage.getItem('quizResult') || '{}');

    const results = {
      A: { text: "비현실적 낙관주의형", image: "../img/R-A.png" },
      B: { text: "자기비난형", image: "../img/R-B.png" },
      C: { text: "현실저항형", image: "../img/R-C.png" },
      D: { text: "완벽주의형", image: "../img/R-D.png" },
      E: { text: "자극추구형", image: "../img/R-E.png" }
    };

    let max = -1;
    let winner = null;

    for (let key in categoryScores) {
      if (categoryScores[key] > max) {
        max = categoryScores[key];
        winner = key;
      }
    }

    const result = results[winner];
    if (result) {
      document.getElementById("result-text").textContent = result.text;
      const img = document.getElementById("result-image");
      img.src = result.image;
      img.alt = result.text;
    }

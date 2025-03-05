const questions = [
    {
        text: "何年目のスタッフですか？",
        options: ["1年目のスタッフ", "2年目以降のスタッフ"],
        next: [1, 2]
    },
    {
        text: "講座実施形態はどれですか？",
        options: ["対面講座実施の大学", "オンライン講座実施の大学"],
        next: [3, 4]
    },
    {
        text: "講座実施形態はどれですか？",
        options: ["対面講座実施の大学", "オンライン講座実施の大学"],
        next: [5, 6]
    },
    {
        text: "役職はどれですか？",
        options: ["講師", "マネージャー", "アシスタント"],
        next: ["result1", "result2", "result3"]
    },
    {
        text: "役職はどれですか？",
        options: ["講師", "マネージャー", "アシスタント"],
        next: ["result4", "result5", "result6"]
    },
    {
        text: "役職はどれですか？",
        options: ["講師", "マネージャー", "アシスタント"],
        next: ["result7", "result8", "result9"]
    },
    {
        text: "役職はどれですか？",
        options: ["講師", "マネージャー", "アシスタント"],
        next: ["result10", "result11", "result12"]
    }
];

const results = {
    result1: "サポーター研修（対面）・講師トレーニング①（対面）・講師トレーニング②（対面）",
    result2: "サポーター研修（対面）・マネージャー研修（対面）",
    result3: "サポーター研修（対面）",
    result4: "サポーター研修（オンライン）・講師トレーニング①（オンライン）・講師トレーニング②（オンライン）",
    result5: "サポーター研修（オンライン）・マネージャー研修（オンライン）",
    result6: "サポーター研修（オンライン）",
    result7: "アドバンス研修（対面）・講師トレーニング①（対面）・講師トレーニング②（対面）",
    result8: "アドバンス研修（対面）・マネージャー研修（対面）",
    result9: "アドバンス研修（対面）",
    result10: "アドバンス研修・講師トレーニング①（オンライン）・講師トレーニング②（オンライン）",
    result11: "アドバンス研修・マネージャー研修（オンライン）",
    result12: "アドバンス研修"
};

let currentStep = 0;

function renderQuestion() {
    const questionContainer = document.getElementById("question-container");
    const resultContainer = document.getElementById("result-container");
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options");

    questionContainer.style.display = "block";
    resultContainer.style.display = "none";

    const question = questions[currentStep];
    questionText.textContent = question.text;
    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => handleAnswer(question.next[index]);
        optionsContainer.appendChild(button);
    });
}

function handleAnswer(nextStep) {
    if (typeof nextStep === "string") {
        showResult(nextStep);
    } else {
        currentStep = nextStep;
        renderQuestion();
    }
}

function showResult(resultKey) {
    const questionContainer = document.getElementById("question-container");
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");

    questionContainer.style.display = "none";
    resultContainer.style.display = "block";

    resultText.textContent = results[resultKey];
}

function restart() {
    currentStep = 0;
    renderQuestion();
}

// 初回の表示
window.onload = renderQuestion;

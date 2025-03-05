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
    result1: "あなたが受ける研修は、\nサポーター研修（対面）・講師トレーニング①（対面）・講師トレーニング②（対面）\nです。",
    result2: "あなたが受ける研修は、\nサポーター研修（対面）・マネージャー研修（対面）\nです。",
    result3: "あなたが受ける研修は、\nサポーター研修（対面）\nです。",
    result4: "あなたが受ける研修は、\nサポーター研修（オンライン）・講師トレーニング①（オンライン）・講師トレーニング②（オンライン）\nです。",
    result5: "あなたが受ける研修は、\nサポーター研修（オンライン）・マネージャー研修（オンライン）\nです。",
    result6: "あなたが受ける研修は、\nサポーター研修（オンライン）\nです。",
    result7: "あなたが受ける研修は、\nアドバンス研修（対面）・講師トレーニング①（対面）・講師トレーニング②（対面）\nです。",
    result8: "あなたが受ける研修は、\nアドバンス研修（対面）・マネージャー研修（対面）\nです。",
    result9: "あなたが受ける研修は、\nアドバンス研修（対面）\nです。",
    result10: "あなたが受ける研修は、\nアドバンス研修・講師トレーニング①（オンライン）・講師トレーニング②（オンライン）\nです。",
    result11: "あなたが受ける研修は、\nアドバンス研修・マネージャー研修（オンライン）\nです。",
    result12: "あなたが受ける研修は、\nアドバンス研修\nです。"
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

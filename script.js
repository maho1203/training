const questions = [
    {
        text: "何年目のスタッフですか？",
        options: ["1年目のスタッフ or ブランクがあるスタッフ", "2年目以降のスタッフ"],
        next: [1, 2]
    },
    {
        text: "講座実施形態はどれですか？",
        options: ["対面講座実施の大学", "オンライン講座実施の大学", "遠隔地の大学"],
        next: [3, 4, 5]
    },
    {
        text: "講座実施形態はどれですか？",
        options: ["対面講座実施の大学", "オンライン講座実施の大学", "遠隔地の大学"],
        next: [6, 7, 8]
    },
    {
        // 1年目かつ対面
        text: "役職はどれですか？",
        options: ["講師", "マネージャー", "アシスタント"],
        next: ["result1", "result2", "result3"]
    },
    {
        // 1年目かつオンライン
        text: "役職はどれですか？",
        options: ["講師", "マネージャー", "アシスタント"],
        next: ["result4", "result5", "result6"]
    },
    {
        // 2年目以降かつ対面
        text: "役職はどれですか？",
        options: ["講師", "マネージャー", "アシスタント"],
        next: ["result7", "result8", "result9"]
    },
    {
        // 2年目以降かつオンライン
        text: "役職はどれですか？",
        options: ["講師", "マネージャー", "アシスタント"],
        next: ["result10", "result11", "result12"]
    },
    {
        //1年目かつ遠隔地
        text: "役職はどれですか？",
        options: ["講師", "マネージャー", "アシスタント"],
        next: ["result13", "result14", "result15"]
    },
    {
        // 2年目以降かつ遠隔地
        text: "役職はどれですか？",
        options: ["講師", "マネージャー", "アシスタント"],
        next: ["result16", "result17", "result18"]
    }
];

const results = {
    result1: "・サポーター研修（対面）\n・講師トレーニング①（対面）\n・講師トレーニング②（対面）\n",
    result2: "・サポーター研修（対面）\n・マネージャー研修（対面）\n",
    result3: "・サポーター研修（対面\n）",
    result4: "・サポーター研修（オンライン）\n・講師トレーニング①（オンライン）\n・講師トレーニング②（オンライン）\n",
    result5: "・サポーター研修（オンライン）\n・マネージャー研修（オンライン）\n",
    result6: "・サポーター研修（オンライン）\n",
    result7: "・アドバンス研修\n・講師トレーニング①（対面）\n・講師トレーニング②（対面）\n",
    result8: "・アドバンス研修\n・マネージャー研修（対面\n）",
    result9: "・アドバンス研修\n",
    result10: "・アドバンス研修\n・講師トレーニング①（オンライン）\n・講師トレーニング②（オンライン）\n",
    result11: "・アドバンス研修\n・マネージャー研修（オンライン）\n",
    result12: "・アドバンス研修\n",
    result13: "・サポーター研修（遠隔地）\n・講師トレーニング①（遠隔地）\n・講師トレーニング②（遠隔地）\n",
    result14: "・サポーター研修（遠隔地）\n・マネージャー研修（遠隔地）\n",
    result15: "・サポーター研修（遠隔地）\n",
    result16: "・アドバンス研修\n・・講師トレーニング②（遠隔地）\n",
    result17: "・アドバンス研修\n・マネージャー研修（遠隔地）\n",
    result18: "・アドバンス研修\n"
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

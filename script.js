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
        options: ["講師", "マネージャー", "アシスタント", "ディレクター"],
        next: ["result1", "result2", "result3", "result30"]
    },
    {
        // 1年目かつオンライン
        text: "役職はどれですか？",
        options: ["講師", "マネージャー", "アシスタント", "ディレクター"],
        next: ["result4", "result5", "result6", "result31"]
    },
    {
        // 2年目以降かつ対面
        text: "役職はどれですか？",
        options: ["講師", "マネージャー", "アシスタント", "ディレクター"],
        next: ["result7", "result8", "result9", "result33"]
    },
    {
        // 2年目以降かつオンライン
        text: "役職はどれですか？",
        options: ["講師", "マネージャー", "アシスタント", "ディレクター"],
        next: ["result10", "result11", "result12", "result33"]
    },
    {
        //1年目かつ遠隔地
        text: "役職はどれですか？",
        options: ["講師", "マネージャー", "アシスタント", "ディレクター"],
        next: ["result13", "result14", "result15", "result32"]
    },
    {
        // 2年目以降かつ遠隔地
        text: "役職はどれですか？",
        options: ["講師", "マネージャー", "アシスタント", "ディレクター"],
        next: ["result16", "result17", "result18", "result33"]
    }
];

const results = {
    result1: "・サポーター研修（対面）・講師トレーニング①（対面）・講師トレーニング②（対面）",
    result2: "・サポーター研修（対面）・マネージャー研修（対面）",
    result3: "・サポーター研修（対面）",

    result4: "・サポーター研修（オンライン）・講師トレーニング①（オンライン）・講師トレーニング②（オンライン）",
    result5: "・サポーター研修（オンライン）・マネージャー研修（オンライン）",
    result6: "・サポーター研修（オンライン）",

    result7: "・アドバンス研修・講師トレーニング①（対面）・講師トレーニング②（対面）",
    result8: "・アドバンス研修・マネージャー研修（対面）",
    result9: "・アドバンス研修",

    result10: "・アドバンス研修・講師トレーニング①（オンライン）・講師トレーニング②（オンライン）",
    result11: "・アドバンス研修・マネージャー研修（オンライン）",
    result12: "・アドバンス研修",

    result13: "・サポーター研修（遠隔地）・講師トレーニング①（遠隔地）・講師トレーニング②（遠隔地）",
    result14: "・サポーター研修（遠隔地）・マネージャー研修（遠隔地）",
    result15: "・サポーター研修（遠隔地）",

    result16: "・アドバンス研修・講師トレーニング②（遠隔地）",
    result17: "・アドバンス研修・マネージャー研修（遠隔地）",
    result18: "・アドバンス研修",

    result30: "サポーター研修（対面）・マネージャー研修（対面）・講師トレーニング①（対面）・講師トレーニング②（対面）・アドバンス研修",
    result31: "サポーター研修（オンライン）・マネージャー研修（オンライン）・講師トレーニング①（オンライン）・講師トレーニング②（オンライン）・アドバンス研修" ,
    result32: "サポーター研修（遠隔地）・マネージャー研修（遠隔地）・講師トレーニング①（遠隔地）・講師トレーニング②（遠隔地）・アドバンス研修",
    result33: "アドバンス研修"
};

function formatResult(result) {
    return "<ul>" + result.split("・").filter(e => e).map(e => `<li>${e}</li>`).join("") + "</ul>";
}

document.getElementById("output").innerHTML = formatResult(results.result1);


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

const questions = [
    { text: "何年目のスタッフですか？", options: ["1年目のスタッフ or ブランクがあるスタッフ", "2年目以降のスタッフ"], next: [1, 2] },
    { text: "講座実施形態はどれですか？", options: ["対面講座実施の大学", "オンライン講座実施の大学", "遠隔地の大学"], next: [3, 4, 5] },
    { text: "講座実施形態はどれですか？", options: ["対面講座実施の大学", "オンライン講座実施の大学", "遠隔地の大学"], next: [6, 7, 8] },
];

const roles = ["講師", "マネージャー", "アシスタント", "ディレクター"];
const locations = ["対面", "オンライン", "遠隔地"];
const levels = ["サポーター研修", "アドバンス研修"];

const results = {};
locations.forEach((loc, locIdx) => {
    roles.forEach((role, roleIdx) => {
        const key1 = `result${locIdx * 4 + roleIdx + 1}`;
        const key2 = `result${locIdx * 4 + roleIdx + 13}`;
        results[key1] = `・${levels[0]}（${loc}）\n・${role}トレーニング①（${loc}）\n・${role}トレーニング②（${loc}）\n`;
        results[key2] = `・${levels[1]}\n・${role}トレーニング②（${loc}）\n`;
    });
});

let currentStep = 0;

function renderQuestion() {
    const { text, options, next } = questions[currentStep] || {};
    document.getElementById("question-text").textContent = text || "";
    document.getElementById("options").innerHTML = options?.map((opt, i) => `<button onclick='handleAnswer(${JSON.stringify(next[i])})'>${opt}</button>`).join('') || "";
    document.getElementById("question-container").style.display = "block";
    document.getElementById("result-container").style.display = "none";
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
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("result-text").textContent = results[resultKey] || "該当する研修はありません。";
}

function restart() {
    currentStep = 0;
    renderQuestion();
}

window.onload = renderQuestion;
let currentUnit = null;
let mode = "enToJa";

// ★ クイズ用グローバル変数
let quizQuestions = [];


function showGrade(grade) {
    let html = "";

    for (let unit of gradeUnits[grade]) {
        html += `
            <button onclick="showUnit('${unit}')">
                ${unitTitles[unit]}
            </button>
        `;
    }

    document.getElementById("menu").innerHTML = html;
    document.getElementById("content").innerHTML = "";
}

function showUnit(unitName) {
    currentUnit = unitName;

    let html = `
        <p class="point">${unitPoints[unitName]}</p>
    `;

    for (let i = 0; i < grammarData[unitName].length; i++) {
        const item = grammarData[unitName][i];

        html += `
            <div>
                <p>${mode === "enToJa" ? item.english : item.japanese}</p>

                <p>
                    <span
                        id="toggle${i}"
                        class="translation-link"
                        onclick="showTranslation(${i})"
                    >
                        ${mode === "enToJa" ? "訳を見る" : "英語を見る"}
                    </span>

                    <span id="translation${i}"></span>
                </p>
            </div>
            <hr>
        `;
    }

    document.getElementById("content").innerHTML = html;
}

function showTranslation(index) {

    const item = grammarData[currentUnit][index];

    const translationElement =
        document.getElementById(`translation${index}`);

    const toggleElement =
        document.getElementById(`toggle${index}`);

    if (translationElement.textContent === "") {

        if (mode === "enToJa") {
            translationElement.textContent = "　" + item.japanese;
            toggleElement.textContent = "訳を隠す";
        } else {
            translationElement.textContent = "　" + item.english;
            toggleElement.textContent = "英語を隠す";
        }

    } else {

        translationElement.textContent = "";
        toggleElement.textContent =
            mode === "enToJa" ? "訳を見る" : "英語を見る";
    }
}

function getAllQuestions() {

    let all = [];

    for (let unit in grammarData) {
        for (let item of grammarData[unit]) {
            all.push(item);
        }
    }

    return all;
}

function getRandomQuestions(count = 3) {

    let all = getAllQuestions();

    // シャッフル（簡単版）
    all.sort(() => Math.random() - 0.5);

    return all.slice(0, count);
}

function showQuizMode() {
    quizQuestions = getRandomQuestions(3);

    let html = "<h2>全単元からランダム出題</h2>";

    for (let i = 0; i < quizQuestions.length; i++) {
        const q = quizQuestions[i];

        html += `
            <div>
                <p>${mode === "enToJa" ? q.english : q.japanese}</p>

                <p>
                    <span
                        id="quizBtn${i}"
                        class="translation-link"
                        onclick="showQuizAnswer(${i})"
                    >
                        答えを見る
                    </span>

                    <span id="quizText${i}"></span>
                </p>
            </div>
            <hr>
        `;
    }

    document.getElementById("content").innerHTML = html;
}

function showQuizAnswer(index) {
    const q = quizQuestions[index];

    const text = document.getElementById(`quizText${index}`);
    const btn = document.getElementById(`quizBtn${index}`);

    const isEmpty = !text.textContent.trim();

    if (isEmpty) {
        if (mode === "enToJa") {
            text.textContent = "　" + q.japanese;
        } else {
            text.textContent = "　" + q.english;
        }

        btn.textContent = "隠す";
    } else {
        text.textContent = "";
        btn.textContent = "答えを見る";
    }
}
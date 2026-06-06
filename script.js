let currentUnit = null;

let mode = "enToJa"; // or "jaToEn"


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

    let html = `<h2>${unitTitles[unitName]}</h2>`;

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

    let questions = getRandomQuestions(3);

    let html = "<h2>全単元からランダムで出題されます。<br>押すたびに問題が変わるよ。</h2>";

    for (let i = 0; i < questions.length; i++) {

        let q = questions[i];

        html += `
            <div>
                <p>${mode === "enToJa" ? q.english : q.japanese}</p>

                <p>
                    <span id="quizAns${i}" class="translation-link"
                        onclick="showQuizAnswer(${i}, '${q.english}', '${q.japanese}')">
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

function showQuizAnswer(index, en, ja) {

    const text = document.getElementById(`quizText${index}`);
    const btn = document.getElementById(`quizAns${index}`);

    if (text.textContent === "") {

        if (mode === "enToJa") {
            text.textContent = "　" + ja;
        } else {
            text.textContent = "　" + en;
        }

        btn.textContent = "隠す";

    } else {

        text.textContent = "";
        btn.textContent = "答えを見る";
    }
}
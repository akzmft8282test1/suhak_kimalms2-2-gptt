
"use strict";

const $ = (selector) => document.querySelector(selector);

const concepts = {
  5: [
    {
      title: "이등변삼각형의 뜻과 성질",
      body: "두 변의 길이가 같은 삼각형을 이등변삼각형이라고 한다. 같은 두 변이 만나는 각을 꼭지각, 꼭지각의 대변을 밑변, 밑변과 만나는 두 각을 밑각이라고 한다.",
      formula: "AB = AC이면 ∠B = ∠C",
      proof: "꼭지각 ∠A의 이등분선이 밑변 BC와 만나는 점을 D라 하자. 삼각형 ABD와 ACD에서 AB=AC, AD는 공통, ∠BAD=∠CAD이다. 따라서 두 삼각형은 SAS 합동이고, 대응각이 같으므로 ∠B=∠C이다."
    },
    {
      title: "이등변삼각형의 역",
      body: "삼각형에서 두 각의 크기가 같으면 그 두 각의 대변의 길이도 같다.",
      formula: "∠B = ∠C이면 AB = AC",
      proof: "두 각이 같은 삼각형에서 각의 이등분선 또는 합동 관계를 이용하면 대응하는 두 변의 길이가 같음을 보일 수 있다."
    },
    {
      title: "직각삼각형의 합동",
      body: "두 직각삼각형은 빗변과 한 예각, 빗변과 한 변, 두 변의 조건 등을 이용하여 합동을 판별한다. 교과서에서 제시한 합동 조건의 이름과 대응 관계를 구별한다.",
      formula: "직각삼각형의 합동 조건을 확인할 때는 직각, 빗변, 대응하는 변과 각을 먼저 표시한다.",
      proof: "직각삼각형은 두 삼각형 모두 한 각이 90°이므로, 주어진 변과 각의 조건에 삼각형의 합동 조건을 적용하여 합동임을 정당화한다."
    },
    {
      title: "삼각형의 외심",
      body: "삼각형의 세 변의 수직이등분선은 한 점에서 만나며, 그 점을 외심이라고 한다. 외심에서 세 꼭짓점까지의 거리는 같다.",
      formula: "OA = OB = OC",
      proof: "두 변의 수직이등분선 위의 점은 그 변의 양 끝점에서 거리가 같다. 두 수직이등분선의 교점을 O라 하면 OA=OB, OB=OC이므로 OA=OB=OC이다."
    },
    {
      title: "삼각형의 내심",
      body: "삼각형의 세 내각의 이등분선은 한 점에서 만나며, 그 점을 내심이라고 한다. 내심에서 세 변까지의 거리는 같다.",
      formula: "내심에서 세 변에 내린 수선의 길이는 모두 같다.",
      proof: "각의 이등분선 위의 점은 그 각의 두 변까지의 거리가 같다. 두 내각의 이등분선의 교점을 이용하면 세 변까지의 거리가 같음을 알 수 있다."
    }
  ],
  6: [
    {
      title: "평행사변형의 성질",
      body: "평행사변형은 두 쌍의 대변이 각각 평행한 사각형이다.",
      formula: "대변의 길이가 각각 같다. / 대각의 크기가 각각 같다. / 두 대각선은 서로를 이등분한다.",
      proof: "대각선을 그어 생기는 두 삼각형에서 엇각과 평행선의 성질, 공통인 변을 이용해 합동을 보인다. 합동인 대응변과 대응각으로 성질을 정당화한다."
    },
    {
      title: "평행사변형이 되는 조건",
      body: "사각형에서 두 쌍의 대변이 각각 평행하거나, 두 쌍의 대변의 길이가 각각 같거나, 한 쌍의 대변이 평행하고 그 길이가 같거나, 두 대각선이 서로를 이등분하는 등의 조건을 이용한다.",
      formula: "사각형의 두 대각선이 서로를 이등분하면 평행사변형이다.",
      proof: "대각선의 교점을 기준으로 두 삼각형을 잡고 맞꼭지각과 주어진 길이 조건을 이용해 합동을 보인다. 합동으로 엇각이 같음을 얻어 두 쌍의 대변이 평행함을 정당화한다."
    },
    {
      title: "직사각형",
      body: "네 내각이 모두 직각인 사각형이다. 직사각형은 평행사변형의 성질을 가지며 두 대각선의 길이가 같다.",
      formula: "AC = BD",
      proof: "직사각형의 두 대각선으로 생기는 두 삼각형에서 대응하는 두 변과 끼인각을 비교하여 합동을 보이거나, 피타고라스 정리를 이용해 대각선의 길이가 같음을 보인다."
    },
    {
      title: "마름모",
      body: "네 변의 길이가 모두 같은 사각형이다. 두 대각선은 서로를 수직이등분한다.",
      formula: "대각선은 서로 수직이고 서로를 이등분한다.",
      proof: "마름모의 네 변이 같다는 조건과 평행사변형의 대각선 성질을 이용한다. 대각선으로 생기는 삼각형의 합동을 이용해 대각선이 수직임을 정당화한다."
    },
    {
      title: "정사각형과 등변사다리꼴",
      body: "정사각형은 네 변의 길이가 같고 네 각이 모두 직각인 사각형이다. 등변사다리꼴은 한 쌍의 대변이 평행하고 두 밑각의 크기가 각각 같은 사다리꼴이다.",
      formula: "정사각형은 직사각형이면서 마름모이다. 등변사다리꼴의 두 대각선의 길이는 같다.",
      proof: "정사각형은 직사각형과 마름모의 조건을 모두 만족한다. 등변사다리꼴은 대칭 또는 합동인 삼각형을 이용하여 두 대각선의 길이가 같음을 보인다."
    }
  ],
  7: [
    {
      title: "닮은 도형",
      body: "모양은 같고 크기는 다를 수 있는 두 도형을 닮은 도형이라고 한다. 대응하는 각의 크기는 같고 대응하는 변의 길이의 비는 일정하다.",
      formula: "대응변의 길이의 비 = 일정한 값(닮음비)",
      proof: "대응각이 각각 같고 대응변의 길이의 비가 일정한지 확인하여 닮음을 판단한다."
    },
    {
      title: "삼각형의 닮음 조건",
      body: "두 삼각형은 두 쌍의 대응각의 크기가 각각 같을 때, 두 쌍의 대응변의 길이의 비가 같고 그 끼인각이 같을 때, 세 쌍의 대응변의 길이의 비가 같을 때 닮음이다.",
      formula: "AA 닮음 / SAS 닮음 / SSS 닮음",
      proof: "AA는 나머지 한 각도 같다는 점과 삼각형의 내각의 합을 이용한다. SAS와 SSS는 대응변의 비와 끼인각 또는 세 변의 비가 같음을 이용해 닮음을 정당화한다."
    },
    {
      title: "닮음비와 넓이의 비",
      body: "닮은 도형의 대응변의 길이의 비가 m:n이면 넓이의 비는 m²:n²이다.",
      formula: "닮음비 m:n → 넓이의 비 m²:n²",
      proof: "넓이는 밑변과 높이의 곱에 비례한다. 닮음비가 m:n이면 밑변과 높이가 모두 같은 비율로 변하므로 넓이는 그 비율의 제곱으로 변한다."
    },
    {
      title: "삼각형과 평행선",
      body: "삼각형의 한 변과 평행한 직선을 그으면 생기는 작은 삼각형은 원래 삼각형과 닮음이다. 대응변의 길이의 비가 성립한다.",
      formula: "BC ∥ DE이면 △ADE ∼ △ABC",
      proof: "평행선에서 동위각 또는 엇각이 같고 공통각이 같으므로 AA 닮음 조건을 만족한다. 따라서 대응변의 길이의 비가 같다."
    },
    {
      title: "삼각형의 무게중심",
      body: "삼각형의 세 중선은 한 점에서 만나며, 그 점을 무게중심이라고 한다. 무게중심은 각 중선을 꼭짓점 쪽과 변의 중점 쪽으로 2:1로 나눈다.",
      formula: "꼭짓점에서 무게중심 : 무게중심에서 변의 중점 = 2 : 1",
      proof: "중점 연결 정리와 삼각형의 넓이 관계를 이용하여 무게중심이 중선을 2:1로 나눔을 정당화한다."
    },
    {
      title: "피타고라스 정리",
      body: "직각삼각형에서 빗변의 길이의 제곱은 나머지 두 변의 길이의 제곱의 합과 같다.",
      formula: "a² + b² = c² (c는 빗변)",
      proof: "직각삼각형의 닮음을 이용하면 작은 직각삼각형과 원래 삼각형의 대응변의 비가 성립한다. 이를 정리하면 두 직각변의 제곱의 합이 빗변의 제곱과 같음을 얻는다."
    }
  ]
};

function renderConcepts() {
  for (const chapter of [5, 6, 7]) {
    const target = $(`#concept-${chapter}`);
    target.innerHTML = concepts[chapter].map((item, index) => `
      <article class="concept-block">
        <h3>${index + 1}. ${item.title}</h3>
        <p>${item.body}</p>
        <div class="formula">${item.formula}</div>
        <div class="proof">
          <strong>증명 및 정당화</strong>
          <p>${item.proof}</p>
        </div>
      </article>
    `).join("");
  }
}

function gcd(a, b) {
  return b === 0 ? Math.abs(a) : gcd(b, a % b);
}

function simplify(n, d) {
  const g = gcd(n, d);
  return `${n / g}/${d / g}`;
}

function makeQuestion(id, chapter, type, prompt, answer, explanation, choices = null) {
  return {
    id, chapter, type, prompt, answer: String(answer),
    explanation, choices
  };
}


function mcQuestion(id, chapter, prompt, answer, explanation, distractors) {
  const unique = [];
  for (const value of [String(answer), ...distractors.map(String)]) {
    if (!unique.includes(value)) unique.push(value);
  }

  let filler = 1;
  while (unique.length < 5) {
    const candidate = `보기 ${filler++}`;
    if (!unique.includes(candidate)) unique.push(candidate);
  }

  const choices = unique.slice(0, 5);
  const shift = id % 5;
  const shuffled = choices.slice(shift).concat(choices.slice(0, shift));

  return makeQuestion(
    id, chapter, "mc", prompt, String(answer), explanation, shuffled
  );
}

function generateQuestions() {
  const questions = [];
  let id = 1;

  // 5단원: 이등변삼각형, 외심, 내심
  for (let i = 0; i < 400; i++) {
    const x = 30 + (i % 50);
    const y = 30 + ((i * 7) % 50);
    const base = 180 - x - y;

    if (base <= 0) continue;

    const angle = 180 - 2 * x;
    const validAngle = angle > 0 && angle < 180 ? angle : 60;

    questions.push(mcQuestion(
      id++, 5,
      `이등변삼각형 ABC에서 AB=AC이고 ∠B=${x}°일 때 ∠C의 크기는?`,
      `${x}°`,
      "이등변삼각형에서 두 밑각의 크기는 같다.",
      [`${validAngle}°`, `${180-x}°`, `${90-x}°`, `${y}°`]
    ));
  }

  for (let i = 0; i < 250; i++) {
    const a = 3 + (i % 20);
    const b = 4 + ((i * 3) % 20);

    questions.push(mcQuestion(
      id++, 5,
      `삼각형의 외심 O에 대하여 OA=${a}cm, OB=${a}cm이다. 외심의 성질에 따라 OC의 길이는?`,
      `${a}cm`,
      "외심에서 삼각형의 세 꼭짓점까지의 거리는 같다.",
      [`${b}cm`, `${a+b}cm`, `${Math.abs(a-b)}cm`, `${2*a}cm`]
    ));
  }

  for (let i = 0; i < 250; i++) {
    const d = 2 + (i % 18);
    questions.push(mcQuestion(
      id++, 5,
      `삼각형의 내심에서 한 변까지의 거리가 ${d}cm이다. 내심에서 나머지 두 변까지의 거리는 각각?`,
      `${d}cm`,
      "내심에서 삼각형의 세 변까지의 거리는 같다.",
      [`${d+1}cm`, `${2*d}cm`, `${d/2}cm`, `${d+2}cm`]
    ));
  }

  // 6단원: 평행사변형, 직사각형, 마름모
  for (let i = 0; i < 350; i++) {
    const a = 40 + (i % 70);
    questions.push(mcQuestion(
      id++, 6,
      `평행사변형 ABCD에서 ∠A=${a}°일 때 ∠C의 크기는?`,
      `${a}°`,
      "평행사변형에서 두 대각의 크기는 같다.",
      [`${180-a}°`, `${a/2}°`, `${90}°`, `${360-a}°`]
    ));
  }

  for (let i = 0; i < 250; i++) {
    const a = 5 + (i % 35);
    questions.push(mcQuestion(
      id++, 6,
      `직사각형의 한 대각선 AC의 길이가 ${a}cm이다. 다른 대각선 BD의 길이는?`,
      `${a}cm`,
      "직사각형의 두 대각선의 길이는 같다.",
      [`${2*a}cm`, `${a+2}cm`, `${a/2}cm`, `${a+4}cm`]
    ));
  }

  // 7단원: 닮음비, 넓이비, 무게중심, 피타고라스
  for (let i = 0; i < 300; i++) {
    const m = 2 + (i % 8);
    const n = 3 + ((i * 5) % 9);
    questions.push(mcQuestion(
      id++, 7,
      `두 닮은 도형의 닮음비가 ${m}:${n}일 때 넓이의 비는?`,
      `${m*m}:${n*n}`,
      "닮은 도형의 넓이의 비는 닮음비의 제곱이다.",
      [`${m}:${n}`, `${m*m*m}:${n*n*n}`, `${m+n}:${m+n}`, `${m*2}:${n*2}`]
    ));
  }

  for (let i = 0; i < 300; i++) {
    const a = 3 + (i % 12);
    const b = 4 + (i % 9);
    const c2 = a*a + b*b;
    const c = Math.sqrt(c2);
    const answer = Number.isInteger(c) ? c : `√${c2}`;

    questions.push(mcQuestion(
      id++, 7,
      `직각삼각형의 두 직각변의 길이가 ${a}, ${b}일 때 빗변의 길이는?`,
      String(answer),
      "피타고라스 정리 a²+b²=c²를 이용한다.",
      [`${a+b}`, `${Math.abs(a-b)}`, `${a*b}`, `${c2}`]
    ));
  }

  // 객관식은 정확히 1,875문항이 되도록 보충
  while (questions.length < 1875) {
    const i = questions.length;
    const a = 5 + (i % 20);
    questions.push(mcQuestion(
      id++, 7,
      `직각삼각형에서 두 직각변의 길이가 각각 ${a}cm, ${a+1}cm일 때 빗변의 제곱은?`,
      `${a*a + (a+1)*(a+1)}`,
      "피타고라스 정리에 따라 빗변의 제곱은 두 직각변의 제곱의 합이다.",
      [`${a*a}`, `${(a+1)*(a+1)}`, `${2*a+1}`, `${a*(a+1)}`]
    ));
  }

  // 주관식 125문항
  for (let i = 0; i < 125; i++) {
    const a = 3 + (i % 12);
    const b = 4 + (i % 9);
    const sum = a*a + b*b;

    questions.push(makeQuestion(
      id++, 7, "short",
      `직각삼각형의 두 직각변의 길이가 ${a}cm, ${b}cm이다. 빗변의 길이의 제곱을 구하시오.`,
      sum,
      `피타고라스 정리에 의해 c²=${a}²+${b}²=${sum}이다.`
    ));
  }
  
  const mc = questions
    .filter(q => q.type === "mc")
    .slice(0, 1875);

  const short = questions
    .filter(q => q.type === "short")
    .slice(0, 125);

  return [...mc, ...short];


  return questions;
}

const allQuestions = generateQuestions();

function renderQuestions() {
  const type = $("#question-type").value;
  const chapter = $("#chapter-filter").value;

  const filtered = allQuestions.filter(q =>
    (type === "all" || q.type === type) &&
    (chapter === "all" || String(q.chapter) === chapter)
  );

  $("#question-count").textContent =
    `현재 ${filtered.length.toLocaleString("ko-KR")}문항 표시`;

  $("#question-list").innerHTML = filtered.map(q => `
    <article class="question-card" id="q-${q.id}">
      <div class="question-title">
        ${q.id}. [${q.chapter}단원] ${q.type === "mc" ? "객관식" : "주관식"}
      </div>
      <p>${q.prompt}</p>
      ${q.type === "mc"
        ? `<ol class="choices" type="①">
            ${q.choices.map((choice, i) =>
              `<li>${["①","②","③","④","⑤"][i]} ${choice}</li>`
            ).join("")}
          </ol>`
        : `<input class="short-input" id="input-${q.id}"
             type="text" placeholder="답 입력" aria-label="문제 ${q.id}의 답">`
      }
      <button type="button" onclick="checkAnswer(${q.id})">정답 확인</button>
      <div class="feedback" id="feedback-${q.id}" aria-live="polite"></div>
    </article>
  `).join("");
}

window.checkAnswer = function(id) {
  const q = allQuestions.find(item => item.id === id);
  const feedback = $(`#feedback-${id}`);

  if (!q) return;

  if (q.type === "short") {
    const value = $(`#input-${id}`).value.trim().replace(/\s/g, "");
    const answer = q.answer.replace(/\s/g, "");
    feedback.textContent = value === answer
      ? "정답입니다."
      : `다시 생각해 보세요. 정답은 정답·해설 부분에서 확인할 수 있습니다.`;
  } else {
    feedback.textContent =
      `정답: ${q.answer}. ${q.explanation}`;
  }
};

function renderAnswers() {
  $("#answer-list").innerHTML = allQuestions.map(q => `
    <div class="answer-entry">
      <strong>${q.id}번 · ${q.answer}</strong>
      <p>${q.explanation}</p>
    </div>
  `).join("");
}

$("#load-questions").addEventListener("click", renderQuestions);

$("#show-answers").addEventListener("click", () => {
  const list = $("#answer-list");
  list.hidden = !list.hidden;
  $("#show-answers").textContent =
    list.hidden ? "정답 및 해설 펼치기" : "정답 및 해설 접기";
});

renderConcepts();
renderAnswers();
renderQuestions();

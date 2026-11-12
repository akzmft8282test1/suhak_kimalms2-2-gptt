
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// SVG 좌표 기반 삼각형 도형 생성
// 실제 변의 길이 비율을 좌표에 반영한다.
function triangleSVG(a, b, c) {
  // a: BC, b: CA, c: AB
  // A를 원점 기준으로 놓고 코사인 법칙으로 C 계산
  const scale = 55;
  const A = { x: 70, y: 210 };
  const B = { x: A.x + c * scale, y: A.y };

  const cx = (b * b + c * c - a * a) / (2 * c);
  const cy2 = b * b - cx * cx;

  if (cy2 <= 0 || !Number.isFinite(cy2)) {
    return `<svg viewBox="0 0 420 260" role="img"
      aria-label="삼각형을 그릴 수 없는 길이입니다">
      <text x="20" y="40">삼각형 길이를 확인해 주세요.</text>
    </svg>`;
  }

  const C = {
    x: A.x + cx * scale,
    y: A.y - Math.sqrt(cy2) * scale
  };

  const points = `${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`;

  return `
  <svg viewBox="0 0 420 260"
       xmlns="http://www.w3.org/2000/svg"
       role="img" aria-label="변의 길이 비율을 반영한 삼각형">
    <polygon points="${points}"
      fill="#dbeafe" fill-opacity="0.55"
      stroke="#1d4ed8" stroke-width="2.5"/>
    <text x="${A.x - 18}" y="${A.y + 18}">A</text>
    <text x="${B.x + 8}" y="${B.y + 18}">B</text>
    <text x="${C.x}" y="${C.y - 12}">C</text>
    <text x="${(A.x+B.x)/2}" y="${A.y+22}">${c}</text>
    <text x="${(A.x+C.x)/2-20}" y="${(A.y+C.y)/2}">${b}</text>
    <text x="${(B.x+C.x)/2+8}" y="${(B.y+C.y)/2}">${a}</text>
  </svg>`;
}

app.get("/api/diagram/triangle", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const c = Number(req.query.c);

  if (![a, b, c].every(Number.isFinite) ||
      Math.min(a, b, c) <= 0 ||
      a + b <= c || a + c <= b || b + c <= a) {
    return res.status(400).json({
      error: "삼각형의 세 변의 길이를 확인해 주세요."
    });
  }

  res.type("image/svg+xml").send(triangleSVG(a, b, c));
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Math Final Master running on port ${PORT}`);
});

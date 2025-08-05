const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
const scorePass = students.filter((student) => student.score >= 50);
console.log(scorePass);

const scoreAdd = scorePass.map((student) => {
  return { name:student.name,
        score: +(student.score *110 /100) .toFixed(1)
  };
  });

console.log(scoreAdd);

const totalScore = scoreAdd.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);
const students = [
  { name: "John", marks: [80, 90, 85] },
  { name: "Emma", marks: [95, 92, 98] },
  { name: "Alex", marks: [60, 70, 65] }
];

const result = students
  .map(s => ({
    name: s.name,
    avg: s.marks.reduce((a, b) => a + b, 0) / s.marks.length
  }))
  .filter(s => s.avg >= 85)
  .sort((a, b) => b.avg - a.avg)
  .map(s => s.name);

console.log(result);
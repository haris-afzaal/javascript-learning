let employees = [
    { name: "Ali", skills: ["JavaScript", "HTML"] },
    { name: "Ahmed", skills: ["Node.js", "Express"] },
    { name: "Hamza", skills: ["MongoDB", "React"] }
];
let s=employees.map(function(single){
    return single.skills;
})
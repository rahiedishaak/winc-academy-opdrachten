let grades = [];
for (let i = 60; i <= 100; i++) {
    grades.push(i);
}

for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];
    if (grade >= 90) console.log(`For ${grade}, you got a A`);
    else if (grade >= 80) console.log(`For ${grade}, you got a B`);
    else if (grade >= 70) console.log(`For ${grade}, you got a C`);
    else if (grade >= 60) console.log(`For ${grade}, you got a D`);
}
let income = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let total = 0;
for (i of income) {
    console.log(i)
    total += i;
}
console.log(total);


let fullName = "Hi This is Coding God, ES6";
for (char in fullName) {
    console.log(fullName[char]);
}
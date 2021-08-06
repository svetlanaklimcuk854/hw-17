function createBudget() {
    let budget = 0;
    return function (salary) {
        budget += salary;
        console.log(budget);
    };
};

const firstBudget = createBudget();
firstBudget(20);
firstBudget(320);

const secondBudget = createBudget();
secondBudget(25);
secondBudget(650);

const thirdBudget = createBudget();
thirdBudget(42);
thirdBudget(513);

const fourthBudget = createBudget();
fourthBudget(65);
fourthBudget(850);



// 2

const multiple = (a, b) => {
    const stamp = new Date().getTime();
    while (new Date().getTime() < stamp + 2000) { }
    return a * b;
};
function decorate() {
    const cashe = new Map();
    return function (a, b) {
        const key = `$(a) - $(b)`;
        if (cashe.has(key)) {
            return cashe.get(key);
        } else {
            const result = multiple(a, b);
            cashe.set(key, result);
            return result;
        }
    };
}
const newMultiple = decorate();

console.log(newMultiple(5, 1));
console.log(newMultiple(4, 1));
console.log(newMultiple(3, 1));
console.log(newMultiple(2, 1));
console.log(newMultiple(1, 1));
console.log(newMultiple(5, 1));
console.log(newMultiple(4, 1));
console.log(newMultiple(3, 1));
console.log(newMultiple(2, 1));
console.log(newMultiple(1, 1));


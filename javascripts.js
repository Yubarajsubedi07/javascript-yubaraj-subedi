let incomeSources = [{ source: "Job", amount: 1000 }, { source: "Freelancing", amount: 500 }, { source: "Selling Art", amount: 250 }];
let expenses = [{ item: "Rent", cost: 300 }, { item: "Groceries", cost: 150 }, { item: "Utilities", cost: 100 }, { item: "Subscription Services", cost: 50 }];

function addIncome(source, amount) {
    incomeSources.push({ source: source, amount: amount });
}

function addExpense(item, cost) {
    expenses.push({ item: item, cost: cost });
}

function calculateSavings() {
    let totalIncome = 0;
    let totalExpenses = 0;

    // Calculate total income
    for (let income of incomeSources) {
        totalIncome += income.amount;
    }

    // Calculate total expenses
    for (let expense of expenses) {
        totalExpenses += expense.cost;
    }

    // Calculate savings
    let savings = totalIncome - totalExpenses;
    return savings;
}

// Add new income sources
addIncome("Investment", 300);
addIncome("Side Hustle", 200);

// Add new expenses
addExpense("Dining Out", 80);
addExpense("Transportation", 50);
addExpense("Entertainment", 120);

// Print summaries
console.log("Income Sources:");
for (let income of incomeSources) {
    console.log(`- ${income.source}: $${income.amount}`);
}
console.log`Total Income: $${calculateTotalIncome()}`);

console.log("\nExpenses:");
for (let expense of expenses) {
    console.log(`- ${expense.item}: $${expense.cost}`);
}
console.log(`Total Expenses: $${calculateTotalExpenses()}`);

console.log(`\nTotal Savings for the Month: $${calculateSavings()}`);

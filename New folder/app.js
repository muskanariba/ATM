const users = [
    { name: "ariba", pin: 1234, balance: 100000 },
    { name: "esha", pin: 5678, balance: 50000 },
    { name: "humna", pin: 8956, balance: 75000 },
    { name: "afifa", pin: 9823, balance: 120000 },
    { name: "dua", pin: 9012, balance: 60000 },
    { name: "fiza", pin: 6723, balance: 90000 },
    { name: "aisha", pin: 4578, balance: 65000 },
    { name: "ramen", pin: 2367, balance: 110000 },
    { name: "hira", pin: 7856, balance: 70000 },
    { name: "laiba", pin: 5434, balance: 85000 }
];

function handleTransaction(type) {
    const name = document.getElementById("name").value;
    const pin = document.getElementById("pin").value;
    const amount = parseFloat(document.getElementById("amount").value);

    // Validate inputs
    if (!name || !pin || isNaN(amount) || amount <= 0) {
        alert("Please enter valid inputs.");
        return;
    }

    const user = users.find(u => u.name === name && u.pin == pin);
    
    if (!user) {
        alert("Invalid name or PIN.");
        return;
    }

    // Handle withdraw or deposit
    if (type === 'withdraw') {
        if (amount > user.balance) {
            alert("Insufficient balance.");
            return;
        }
        user.balance -= amount;
    } else if (type === 'deposit') {
        user.balance += amount;
    } else {
        alert("Invalid transaction type.");
        return;
    }

    alert(`Transaction successful! New balance: $${user.balance}`);
}

document.getElementById("withdrawBtn").onclick = () => handleTransaction('withdraw');
document.getElementById("depositBtn").onclick = () => handleTransaction('deposit');

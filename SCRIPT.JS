// Step 1: Create JSON Data

const jsonData = `[
    {
        "username": "Alice",
        "mobileNum": "9876543210",
        "age": 25
    },
    {
        "username": "Bob",
        "mobileNum": "9123456780",
        "age": 30
    },
    {
        "username": "Charlie",
        "mobileNum": "9001122334",
        "age": 17
    }
]`;

// Step 2: Convert JSON string to JavaScript object

const users = JSON.parse(jsonData);

// Step 3: Display the Data

for (let i = 0; i < users.length; i++) {
    console.log(
        users[i].username + " - " +
        users[i].mobileNum + " - " +
        users[i].age
    );
}

// Step 4: Convert JavaScript object back to JSON

const jsonOutput = JSON.stringify(users, null, 2);

// Print JSON output
console.log(jsonOutput);
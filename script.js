class User {
    // Constructor

    constructor(username, mobileNum, age) {
        this.username = username;
        this.mobileNum = mobileNum;
        this.age = age;
    }

    // Method 1: Get User Details

    getUserDetails() {
        return `Username: ${this.username}
Mobile: ${this.mobileNum}
Age: ${this.age}`;
    }

    // Method 2: Check Adult

    isAdult() {
        return this.age >= 18;
    }
}

// Create User Objects

const user1 = new User("Alice", "9876543210", 22);
const user2 = new User("Bob", "9123456780", 16);
const user3 = new User("Charlie", "9001122334", 25);

// Store Users in an Array

const users = [user1, user2, user3];

// Display User Details

for (let i = 0; i < users.length; i++) {
    console.log(users[i].getUserDetails());
    console.log("Adult: " + users[i].isAdult());
}

const users = [
    { name: "John", age: 30, eyeColor: "blue", gender: "male", isActive: true, email: "john@example.com" },
    { name: "Jane", age: 25, eyeColor: "green", gender: "female", isActive: false, email: "jane@example.com" },
    { name: "Jim", age: 35, eyeColor: "blue", gender: "male", isActive: true, email: "jim@example.com" },
    { name: "Jack", age: 28, eyeColor: "brown", gender: "male", isActive: false, email: "jack@example.com" }
];

// Завдання 1
function getAllUserNames(users) {
    return users.map(user => user.name);
}

// Завдання 2
function getUsersByEyeColor(users, eyeColor) {
    return users.filter(user => user.eyeColor === eyeColor);
}

// Завдання 3
function getUserNamesByGender(users, gender) {
    return users.filter(user => user.gender === gender).map(user => user.name);
}

// Завдання 4
function getInactiveUsers(users) {
    return users.filter(user => !user.isActive);
}

// Завдання 5
function getUserByEmail(users, email) {
    return users.find(user => user.email === email);
}

// Завдання 6
function getUsersInAgeRange(users, min, max) {
    return users.filter(user => user.age >= min && user.age <= max);
}

// Приклад використання
console.log(getAllUserNames(users)); 
console.log(getUsersByEyeColor(users, "blue")); 
console.log(getUserNamesByGender(users, "male")); 
console.log(getInactiveUsers(users)); 
console.log(getUserByEmail(users, "jim@example.com"));
console.log(getUsersInAgeRange(users, 25, 30)); 

// Connect to the MongoDB database
use("operators_db");

// Create demo data for users collection
db.users.insertMany([
  {
    name: "Alice",
    age: 28,
    email: "alice@example.com",
    tags: ["mongodb", "database", "developer"],
    isActive: true,
    comments: [
      { score: 85, text: "Great performance!" },
      { score: 72, text: "Needs improvement." }
    ]
  },
  {
    name: "Bob",
    age: 35,
    email: "bob@example.com",
    tags: ["mongodb", "devops"],
    isActive: false,
    comments: [
      { score: 92, text: "Excellent work!" },
      { score: 65, text: "Room for improvement." }
    ]
  },
  {
    name: "Charlie",
    age: 24,
    email: "charlie@example.com",
    tags: ["mongodb", "backend", "developer"],
    isActive: true,
    comments: [
      { score: 90, text: "Very efficient!" },
      { score: 80, text: "Well done!" }
    ]
  },
  {
    name: "David",
    age: 40,
    email: "david@example.com",
    tags: ["mongodb", "database", "architect"],
    isActive: true,
    comments: [
      { score: 95, text: "Perfect work!" },
      { score: 88, text: "Strong knowledge." }
    ]
  }
]);

// 1. Comparison Operators Example

// Find users where age is greater than 30
db.users.find({ age: { "$gt": 30 } });

// Find users where name is not equal to 'Bob'
db.users.find({ name: { "$ne": "Bob" } });

// Find users where age is less than 30
db.users.find({ age: { "$lt": 30 } });

// Find users where age is equal to 28
db.users.find({ age: { "$eq": 28 } });


// 2. Logical Operators Example

// Find users who are either active OR have the tag 'mongodb'
db.users.find({
  "$or": [
    { isActive: true },
    { tags: "mongodb" }
  ]
});

// Find users who are active and are older than 30
db.users.find({
  "$and": [
    { isActive: true },
    { age: { "$gt": 30 } }
  ]
});

// Find users who are not active
db.users.find({ isActive: { "$not": true } });


// 3. Element Operators Example

// Find users where the 'email' field exists
db.users.find({ "email": { "$exists": true } });

// Find users where the 'comments' field is an array
db.users.find({ "comments": { "$type": "array" } });


// 4. Evaluation Operators Example

// Find users whose 'age' is greater than 25 using $expr for aggregation
db.users.find({
  "$expr": { "$gt": ["$age", 25] }
});

// Find users whose email starts with 'alice' using $regex
db.users.find({
  "email": { "$regex": "^alice" }
});


// 5. Array Operators Example

// Find users who have all of the tags: 'mongodb' and 'developer'
db.users.find({
  tags: { "$all": ["mongodb", "developer"] }
});

// Find users whose 'tags' array has exactly 3 elements
db.users.find({ tags: { "$size": 3 } });

// Find users with comments that have a score greater than 80
db.users.find({
  "comments": { "$elemMatch": { "score": { "$gt": 80 } } }
});

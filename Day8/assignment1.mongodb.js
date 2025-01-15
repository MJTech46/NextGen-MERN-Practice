// Connect to the libraryDB database
use("libraryDB");

// create members collection
db.createCollection("members");

// Insert sample data into the members collection
db.members.insertMany([
    {
      name: "John Doe",
      membershipID: "M001",
      email: "john.doe@example.com",
      books_issued: [
        { title: "The Great Gatsby", issue_date: ISODate("2024-01-10"), return_date: ISODate("2024-02-10") },
        { title: "1984", issue_date: ISODate("2024-01-12"), return_date: ISODate("2024-02-12") }
      ],
      membership_status: "Active"
    },
    {
      name: "Jane Smith",
      membershipID: "M002",
      email: "jane.smith@example.com",
      books_issued: [
        { title: "To Kill a Mockingbird", issue_date: ISODate("2024-01-15"), return_date: ISODate("2024-02-15") }
      ],
      membership_status: "Active"
    },
    {
      name: "Alice Brown",
      membershipID: "M003",
      email: "alice.brown@example.com",
      books_issued: [
        { title: "Pride and Prejudice", issue_date: ISODate("2024-01-20"), return_date: ISODate("2024-02-20") },
        { title: "Moby Dick", issue_date: ISODate("2024-01-22"), return_date: ISODate("2024-02-22") }
      ],
      membership_status: "Inactive"
    },
    {
      name: "Bob Johnson",
      membershipID: "M004",
      email: "bob.johnson@example.com",
      books_issued: [
        { title: "War and Peace", issue_date: ISODate("2024-01-05"), return_date: ISODate("2024-02-05") }
      ],
      membership_status: "Active"
    },
    {
      name: "Charlie Davis",
      membershipID: "M005",
      email: "charlie.davis@example.com",
      books_issued: [],
      membership_status: "Inactive"
    }
]);

// selection all the records
db.members.find();


// modifying the membership status to active of ID M005
db.members.updateOne(
  {membershipID:"M005"}, 
  {$set:{membership_status:"Active"}}
);


// Find active members with no issued books
db.members.find({
    membership_status: "Active",
    "books_issued": { "$size": 0 }
});


// delete a record
db.members.deleteOne({"membershipID": "M005"});


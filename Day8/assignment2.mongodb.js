// Switch to HRDB database (if it doesn't exist, it will be created)
use('HRDB');

// Create a collection named 'employee' (if it doesn't exist, it will be created automatically)

// Sample employee data to insert
const employees = [
  {
    empID: "E12345",
    name: "John Doe",
    department: "Engineering",
    email: "john.doe@example.com",
    salary: 75000,
    projects: [
      {
        projectName: "Project Alpha",
        role: "Software Engineer",
        startDate: new Date("2024-01-01"),
        endDate: new Date("2024-12-31")
      },
      {
        projectName: "Project Beta",
        role: "Lead Developer",
        startDate: new Date("2025-01-01"),
        endDate: new Date("2025-12-31")
      }
    ],
    status: "Active"
  },
  {
    empID: "E12346",
    name: "Jane Smith",
    department: "Marketing",
    email: "jane.smith@example.com",
    salary: 65000,
    projects: [
      {
        projectName: "Campaign X",
        role: "Marketing Manager",
        startDate: new Date("2023-05-01"),
        endDate: new Date("2023-11-30")
      }
    ],
    status: "Inactive"
  },
  {
    empID: "E12347",
    name: "Emma Brown",
    department: "Human Resources",
    email: "emma.brown@example.com",
    salary: 55000,
    projects: [
      {
        projectName: "Employee Onboarding",
        role: "HR Specialist",
        startDate: new Date("2024-03-01"),
        endDate: new Date("2024-08-31")
      }
    ],
    status: "Active"
  }
];

// Insert sample data into the 'employee' collection
db.employee.insertMany(employees);

// Query to verify the inserted data
db.employee.find();

// New employee with no projects
db.employee.insertOne({
    empID: "E67890",
    name: "Bob Smith",
    department: "Finance",
    email: "bob.smith@example.com",
    salary: 60000,
    projects: [], // No projects
    status: "Active"
});

// Update John Doe's (empID: E12345) document to add a new project
db.employee.updateOne(
  { empID: "E12345" }, // Select John Doe using empID
  {
    $push: { // Use the $push operator to add an element to the 'projects' array
      projects: {
        projectName: "Project B",
        role: "Consultant",
        startDate: new Date("2025-01-15"),
        endDate: new Date("2025-06-15")
      }
    }
  }
);
// Verify the update by fetching John Doe's data
db.employee.find({ empID: "E12345" });

// delete the emp with empID of E12345
db.employee.deleteOne({ empID: "E12345" });



// creation + using of an db
use("testDB");

//creating table
db.createCollection("docCollection");

// single record insertion
db.docCollection.insertOne(
    {id:"doc000", name:"nisan"}
);

// insertion many doc at once
db.docCollection.insertMany([
    { id: "doc001", name: "nisan" },
    { id: "doc002", name: "john" },
    { id: "doc003", name: "alice" },
    { id: "doc004", name: "bob" },
    { id: "doc005", name: "charlie" },
    { id: "doc006", name: "david" },
    { id: "doc007", name: "eva" },
    { id: "doc008", name: "frank" },
    { id: "doc009", name: "grace" },
    { id: "doc010", name: "hannah" },
    { id: "doc011", name: "ian" },
    { id: "doc012", name: "julia" },
    { id: "doc013", name: "kevin" },
    { id: "doc014", name: "lucas" },
    { id: "doc015", name: "mona" },
    { id: "doc016", name: "noah" },
    { id: "doc017", name: "olivia" },
    { id: "doc018", name: "peter" },
    { id: "doc019", name: "quincy" },
    { id: "doc020", name: "rose" },
    { id: "doc021", name: "sam" },
    { id: "doc022", name: "tina" },
    { id: "doc023", name: "uriel" },
    { id: "doc024", name: "violet" },
    { id: "doc025", name: "will" }
]);


// select or view the table contents
db.docCollection.find();

// selecting specific content
db.docCollection.find({id : "doc025"});

// updating records
db.docCollection.updateMany({ id: "doc025", name: "Will" }, {$set:{name: "Denny" }});

// deletion of records
db.docCollection.deleteOne({id : "doc025"});
    // deleteMany() is also available
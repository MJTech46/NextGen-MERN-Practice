import fs from 'fs'; // core module

const filePath = "./demo.txt";

fs.readFile(filePath, "utf8", (err, data) => {

    if (err) {
        console.error("error while reading file: ", err);
        return;
    }
    console.log("file content is: ", data);
});
import fs from "fs";

const targetFilePath = "./demo.txt";
const newContent = "This is the new content."

fs.writeFile(targetFilePath, newContent, "utf8", (err) => {
    if (err) {
        console.error("Error while writing the file: ", err)
    }
    console.log("File overwritten successfully")
});
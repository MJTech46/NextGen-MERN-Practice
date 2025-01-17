// error log 
import fs from "fs";

const filePath = "./error.log";

function logError(err) {
    let formattedContent = `[${new Date().toISOString().replace('T', ' ').slice(0, 19)}] Error: ${err}\nStack Trace: ${err.stack}\n`;
    fs.appendFile(filePath, formattedContent, "utf8", (err) =>{
        if (err) {
            console.error("Error occurred at writing file.");
        }
        console.log("Error log successfully")
    });
}


// Simulate an error
function simulateError() {
    try {
      // Intentionally throw an error
      throw new Error('Simulated error ;)');
    } catch (err) {
      logError(err); // Log the error to a file
    }
  }
  
  // Call the function to simulate the error
  simulateError();

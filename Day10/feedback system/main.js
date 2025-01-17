import fs from 'fs';

function saveFeedback(feedback) {
  // Format the feedback
  const feedbackContent = `Name: ${feedback.name}\nEmail: ${feedback.email}\nMessage: ${feedback.message}\n\n`;

  // Define the filename for the feedback
  const filename = 'feedback.txt';

  // Try to append the feedback to the file
  try {
    fs.appendFileSync(filename, feedbackContent, 'utf8');
    console.log('Feedback saved successfully.');
  } catch (error) {
    console.error('Error writing feedback to file:', error);
  }
}

// Example usage
const feedbackData = {
  name: 'jose k j',
  email: 'josekj@example.com',
  message: 'This website is really good.'
};

saveFeedback(feedbackData);

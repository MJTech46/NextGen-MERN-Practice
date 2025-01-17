import fs from 'fs';

function generateSalesReport(sales) {
  // Get the current date in the required format (YYYY-MM-DD)
  const dateToday = new Date().toISOString().split('T')[0];

  // Calculate total revenue
  const totalRevenue = sales.reduce((total, sale) => total + (sale.quantity * sale.price), 0);

  // Build the report content
  let reportContent = `\nDate: ${dateToday}\nItems Sold:\n`;
  sales.forEach(sale => {
    reportContent += `${sale.item} Quantity: ${sale.quantity}, Price: ${sale.price}\n`;
  });
  
  reportContent += `Total Revenue: ${totalRevenue}\n`;

  // Define the filename for the report
  const filename = `sales_report_${dateToday}.txt`;

  // Write the content to the file (overwrite if the file exists)
  fs.appendFileSync(filename, reportContent, 'utf8');
  
  console.log(`Sales report for ${dateToday} generated and saved to ${filename}`);
}

// Example sales data
const salesData = [
  { item: "Widget", quantity: 10, price: 15.99 },
  { item: "Gadget", quantity: 5, price: 22.50 }
];

// Call the function
generateSalesReport(salesData);

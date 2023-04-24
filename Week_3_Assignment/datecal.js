// Create a new Date object and add 12 months to it
let today = new Date();
today.setMonth(today.getMonth() + 12);      // Get the month of 'today', then add 12, then set it using 'setMonth'

// Display the future date on the web page
document.getElementById("futureDate").textContent = today;
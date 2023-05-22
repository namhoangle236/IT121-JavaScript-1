/* Create an array of 1 to 9, then for each Number, multiply it with 1 to 9 */

for (let i = 1; i <= 9; i++) {
    // Create an empty string to store the row
    let row = "";
    
    // Loop through each column (number from 1 to 9) in the row
    for (let j = 1; j <= 9; j++) {
      // Multiply that row number by the column number (1 to 9) and add it to the row string
      row += i * j + "\t";
    }
    
    // Print the completed row
    console.log(row);
  }
  
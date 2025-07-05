function createTable() {
  // Get user input
  const rows = prompt("Input number of rows");
  const cols = prompt("Input number of columns");

  // Validate input
  const rn = parseInt(rows);
  const cn = parseInt(cols);

  // Check if input is valid
  if (isNaN(rn) || isNaN(cn)) return;
  if (rn <= 0 || cn <= 0) {
    alert("Number of rows and columns must be positive integers.");
    return;
  }

  // Get the table element
  const table = document.getElementById("myTable");

  // Clear previous table content
  table.innerHTML = "";

  // Generate table rows and columns
  for (let i = 0; i < rn; i++) {
    const row = table.insertRow();
    for (let j = 0; j < cn; j++) {
      const cell = row.insertCell();
      cell.innerText = `Row-${i} Column-${j}`;
    }
  }
}

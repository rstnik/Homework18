let table = document.querySelector("#myTable");
for (let i = 1; i <= 10; i++) {
  let row = table.insertRow();

  for (let j = 1; j <= 10; j++) {
    let cell = row.insertCell();

    let cellValue = (i - 1) * 10 + j;

    cell.textContent = cellValue;
  }
}

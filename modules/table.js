import { employees } from "./employees.js";
import { updateModal } from "./modal.js"
let tableIndex = 0;
let table = `
  <table class="table table-striped table-hover" id="tableSalaries">
    <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Department</th>
      <th scope="col">Position</th>
      <th scope="col">Gross Pay</th>
    </tr>
    </thead>
    <tbody id="tableBody">
    </tbody>
  </table>`;
function populateTable(){
  let trs = '';
  let len = tableIndex + 100;
  if(len > employees.length) len = employees.length;
  for(let i = tableIndex; i < len; i++){
    trs += `
      <tr id="${i}">
        <td>${ employees[i][0] }</td>
        <td>${ employees[i][1] }</td>
        <td>${ employees[i][2] }</td>
        <td>${ employees[i][10] }</td>
      </tr>`;
  }
  document.getElementById("tableBody").innerHTML = trs;
  if(tableIndex >= 100){
    document.getElementById("prevButton").disabled = false;
  }
  else {
    document.getElementById("prevButton").disabled = true;
  }
  if(tableIndex + 100 < employees.length){
    document.getElementById("nextButton").disabled = false;
  }
  else {
    document.getElementById("nextButton").disabled = true;
  }
  document.getElementById("tableSection").innerHTML = len + " / " + employees.length;
  addListeners();
}
function nextPage(){
  tableIndex += 100;
  populateTable();
}
function prevPage(){
  tableIndex -= 100;
  populateTable();
}
function addListeners(){
  let rows = document.getElementsByTagName("tr");
  for (let i=0; i < rows.length; i++) {
    rows[i].addEventListener("click", () => { updateModal(employees[rows[i].id]); }, false);
  } 
}

export { table, populateTable, nextPage, prevPage };
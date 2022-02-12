import { initModal } from "./modules/modal.js";
import { table, populateTable, nextPage, prevPage } from "./modules/table.js";
document.getElementById("salaryTable").innerHTML = table;

const elNextButton = document.getElementById("nextButton");
elNextButton.addEventListener("click", nextPage, false);

const elPrevButton = document.getElementById("prevButton");
elPrevButton.addEventListener("click", prevPage, false);

populateTable();
initModal();
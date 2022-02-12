import { dataset } from "./data.js";
let employees = [];
dataset.data.forEach(employee => {
  employees.push(
    employee.splice(8,11)
  );
});
employees.sort((a,b) => {
  return b[10] - a[10];
});
export { employees };
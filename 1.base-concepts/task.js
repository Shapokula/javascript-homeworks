"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  let d = b ** 2 - 4 * a * c;
  if (d.toFixed(5) < 0) {
    return arr; }
  else if (+d.toFixed(5) === 0) {
    arr.push(-b / (2 * a)); }
  else {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a)); }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let monthPercent = +percent / 100 / 12;
  let principal = +amount - +contribution;
  let monthlyPayment = principal * (monthPercent + (monthPercent / (((1 + monthPercent) ** +countMonths) - 1)));
  let sum = +(monthlyPayment * countMonths).toFixed(2);
  if (!sum) {
    return false; }
  else {
  return sum; }
}

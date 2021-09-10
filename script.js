function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = principal * rate * 0.0025 * years;
  var year = new Date().getFullYear() + parseInt(years-1);
  if (principal >= 1) {
    document.getElementById("result").innerText = "If you deposit " + principal + ",\n" + " at an interest rate of " + rate * 0.25 + "%.\n"  + " You will receive an amount of " + interest + ",\n" + " in the year " + year + ".\n.";
  }
  else {
    document.getElementById("result").innerText = "Enter a positive number\n."
  }
}
function updateRate() {
  var rateval = document.getElementById("rate").value;
  var ratev = rateval * 0.25
  document.getElementById("rate_val").innerText = ratev + "%";
}

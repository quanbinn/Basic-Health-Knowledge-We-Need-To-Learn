function handleSubmit(){
  var protein = document.getElementById("protein").value;
  
  var proteinDVPercentFloatNum = protein / 60 * 100;  // Calculate your BMI(kg/m2)   
  var proteinDVPercent = proteinDVPercentFloatNum.toFixed(0);  // Calculate your BMI round(0)   

  alert("蛋白质含量占每日摄取参考值（NRV）的百分比是："+ proteinDVPercent + "%"); 

  document.getElementById("proteinDVPercentInfo").textContent = "蛋白质含量占每日摄取参考值（NRV）的百分比" +  proteinDVPercent +  "%";  
}
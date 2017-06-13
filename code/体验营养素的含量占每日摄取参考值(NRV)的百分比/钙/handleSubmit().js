function handleSubmit(){
  var calcium = document.getElementById("calcium").value;
  
  var calciumDVPercentFloatNum = calcium / 800 * 100;  // Calculate your BMI(kg/m2)   
  var calciumDVPercent = calciumDVPercentFloatNum.toFixed(0);  // Calculate your BMI round(0)   

  alert("钙含量占每日摄取参考值（NRV）的百分比"+ calciumDVPercent + "%"); 

  document.getElementById("calciumDVPercentInfo").textContent = "钙含量占每日摄取参考值（NRV）的百分比" +  calciumDVPercent +  "%";  
}
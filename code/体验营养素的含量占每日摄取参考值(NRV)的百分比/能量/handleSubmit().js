function handleSubmit(){
  var totalFat = document.getElementById("totalFat").value;
  
  var totalFatDVPercentFloatNum = totalFat / 8400 * 100;  // Calculate your BMI(kg/m2)   
  var totalFatDVPercent = totalFatDVPercentFloatNum.toFixed(0);  // Calculate your BMI round(0)   

  alert("能量占每日摄取参考值（NRV）的百分比："+ totalFatDVPercent + "%"); 

  document.getElementById("totalFatDVPercentInfo").textContent = "能量占每日摄取参考值（NRV）的百分比：" +  totalFatDVPercent +  "%";  
}
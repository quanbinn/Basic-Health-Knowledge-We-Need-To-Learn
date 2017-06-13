function handleSubmit(){
  var totalFat = document.getElementById("totalFat").value;
  
  var totalFatDVPercentFloatNum = totalFat / 60 * 100;  // Calculate your BMI(kg/m2)   
  var totalFatDVPercent = totalFatDVPercentFloatNum.toFixed(0);  // Calculate your BMI round(0)   

  alert("总脂肪含量占每日摄取参考值（NRV）的百分比是："+ totalFatDVPercent + "%"); 

  document.getElementById("totalFatDVPercentInfo").textContent = "总脂肪含量占每日摄取参考值（NRV）的百分比是：" +  totalFatDVPercent +  "%";  
}
function handleSubmit(){
  var saturatedFat = document.getElementById("saturatedFat").value;
  
  var saturatedFatDVPercentFloatNum = saturatedFat * 100  / 20;  // Calculate your BMI(kg/m2)   
  var saturatedFatDVPercent = saturatedFatDVPercentFloatNum.toFixed(0);  // Calculate your BMI round(0)   

  alert("饱和脂肪的每天占比"+ saturatedFatDVPercent + "%"); 

  document.getElementById("saturatedFatDVPercentInfo").textContent = "饱和脂肪的每天占比是" +  saturatedFatDVPercent +  "%";  
}
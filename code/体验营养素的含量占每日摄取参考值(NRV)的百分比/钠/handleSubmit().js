function handleSubmit(){
  var sodium = document.getElementById("sodium").value;
  
  var sodiumDVPercentFloatNum = sodium / 2400 * 100;  // Calculate your BMI(kg/m2)   
  var sodiumDVPercent = sodiumDVPercentFloatNum.toFixed(0);  // Calculate your BMI round(0)   

  alert("钠的每天占比"+ sodiumDVPercent + "%"); 

  document.getElementById("sodiumDVPercentInfo").textContent = "钠的每天占比是" +  sodiumDVPercent +  "%";  
}

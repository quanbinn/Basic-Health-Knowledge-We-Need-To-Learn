function handleSubmit(){
  var carbohydrate = document.getElementById("carbohydrate").value;
  
  var carbohydrateDVPercentFloatNum = carbohydrate / 65 * 100;  // Calculate your BMI(kg/m2)   
  var carbohydrateDVPercent = carbohydrateDVPercentFloatNum.toFixed(0);  // Calculate your BMI round(0)   

  alert("碳水化合物的每天占比"+ carbohydrateDVPercent + "%"); 

  document.getElementById("carbohydrateDVPercentInfo").textContent = "碳水化合物的每天占比是" +  carbohydrateDVPercent +  "%";  
}
function handleSubmit(){
  var dietaryFiber = document.getElementById("dietaryFiber").value;
  
  var dietaryFiberDVPercentFloatNum = dietaryFiber / 65 * 100;  // Calculate your BMI(kg/m2)   
  var dietaryFiberDVPercent = dietaryFiberDVPercentFloatNum.toFixed(0);  // Calculate your BMI round(0)   

  alert("膳食纤维的每天占比"+ dietaryFiberDVPercent + "%"); 

  document.getElementById("dietaryFiberDVPercentInfo").textContent = "膳食纤维的每天占比是" +  dietaryFiberDVPercent +  "%";  
}

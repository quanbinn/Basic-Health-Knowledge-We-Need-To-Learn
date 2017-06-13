function handleSubmit(){
  var cholesterol = document.getElementById("cholesterol").value;
  
  var cholesterolDVPercentFloatNum = cholesterol * 100  / 300;  // Calculate your BMI(kg/m2)   
  var cholesterolDVPercent = cholesterolDVPercentFloatNum.toFixed(0);  // Calculate your BMI round(0)   

  alert("胆固醇的每天占比"+ cholesterolDVPercent + "%"); 

  document.getElementById("cholesterolDVPercentInfo").textContent = "胆固醇的每天占比是" +  cholesterolDVPercent +  "%";  
}
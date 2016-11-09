function handleSubmit(){
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;

  var BMIFloatNum = weight / ((height / 100) * (height / 100));// Calculate your BMI(kg/m2)    
  var BMI = BMIFloatNum.toFixed(1);     // Calculate your BMI round(1)

  var minimumNormalWeightFloatNum =  ((height / 100) * (height / 100)) * 18.5;
  var maximumNormalWeightFloatNum =  ((height / 100) * (height / 100)) * 24.0;  

  var minimumNormalWeight = minimumNormalWeightFloatNum.toFixed(1);
  var maximumNormalWeight = maximumNormalWeightFloatNum.toFixed(1);

  // output your BMI description according to China's official BMI recommendation
  if (BMI < 18.5) {
    alert("你的BMI是"+ BMI + "\n你的体重过轻"); 
    alert("\n你的正常体重应该在" + minimumNormalWeight + " - " + maximumNormalWeight + "公斤的范围内。");   
  } else if (BMI >= 18.5 && BMI < 24.0) {
    alert("你的BMI是"+ BMI + "\n你的体重正常"); 
    alert("\n你的正常体重应该在" + minimumNormalWeight + " - " + maximumNormalWeight + "公斤的范围内。"); 
  } else if (BMI >= 24.0 && BMI < 28.0) {
    alert("你的BMI是"+ BMI + "\n你的体重超重"); 
    alert("\n你的正常体重应该在" + minimumNormalWeight + " - " + maximumNormalWeight + "公斤的范围内。"); 
  } else {
    alert("你的BMI是"+ BMI + "\n你的体重肥胖"); 
    alert("\n你的正常体重应该在" + minimumNormalWeight + " - " + maximumNormalWeight + "公斤的范围内。"); 
  }

  // render the BMI info filled
  document.getElementById("heightInfo").textContent = "你的身高是 " + height +".";  
  document.getElementById("weightInfo").textContent = "你的体重是 " + weight +".";  
  document.getElementById("BMIInfo").textContent = "你的BMI是 " + BMI +".";  
  document.getElementById("healthyWeight").textContent = "你的正常体重应该在" + minimumNormalWeight + " - " + maximumNormalWeight + "公斤的范围内。";  
}
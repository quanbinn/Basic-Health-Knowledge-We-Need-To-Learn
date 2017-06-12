function handleSubmit(){
  var totalFat = document.getElementById("totalFat").value;
  
  var totalFatDVPercentFloatNum = totalFat / 65;
  var totalFatDVPercent = totalFatDVPercentFloatNum.toFixed(2);   

  alert("计算出总脂肪的每天占比"+ totalFatDVPercent); 


  document.getElementById("totalFatDVPercentInfo").textContent =  totalFatDVPercent;  

  document.getElementById("totalFatDVPercent1").textContent =  totalFatDVPercent;  
}
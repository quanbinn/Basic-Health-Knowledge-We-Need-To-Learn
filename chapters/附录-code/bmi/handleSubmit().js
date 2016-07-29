function handleSubmit(){
	var myHeight = document.getElementById("myHeight").value;
  var myWeight = document.getElementById("myWeight").value;
  
	var myBMIFloatNum = myWeight / ((myHeight / 100) * (myHeight / 100));// Calculate my BMI(kg/m2)    
  var myBMI = myBMIFloatNum.toFixed(1);     // Calculate my BMI round(1)
  
  // render the BMI info filled
  document.getElementById("myHeightInfo").textContent = "我的身高是 " + myHeight +".";  
  document.getElementById("myWeightInfo").textContent = "我的体重是 " + myWeight +".";  
  document.getElementById("myBMIInfo").textContent = "我的BMI是 " + myBMI +".";  

  // output my BMI description according to Hong Kong's BMI recommendation
  if (myBMI < 18.5) {
    alert("我的BMI是"+ myBMI + "\n我的体重过轻"); 
    alert("\n我应该多吃含高脂肪的食品" + "\n我应该适当吃一些含超高脂肪的食品" + "\n我应该少吃含高胆固醇的食品"  + "\n我应该少吃含超高胆固醇的食品"); 
  } else if (myBMI >= 18.5 && myBMI < 23.0) {
    alert("我的BMI是"+ myBMI + "\n我的体重正常"); 
    alert("\n我应该少吃含高胆固醇的食品" + "\n我应该少吃含超高胆固醇的食品"); 
  } else if (myBMI >= 23.0 && myBMI < 25.0) {
    alert("我的BMI是"+ myBMI + "\n我的体重超重，有健康危险"); 
    alert("\n我应该少吃含高脂肪的食品" + "\n我应该少吃含超高脂肪的食品" + "\n我应该少吃含高饱和脂肪的食品"  + "\n我应该少吃含超高饱和脂肪的食品" + "\n我应该少吃含高胆固醇的食品" + "\n我应该少吃含超高胆固醇的食品"); 
  } else if (myBMI >= 25.0 && myBMI < 30.0) {
    alert("我的BMI是"+ myBMI + "\n我的体重超重，属于中度肥胖"); 
    alert("\n我应该少吃含高脂肪的食品" + "\n我应该少吃含超高脂肪的食品" + "\n我应该少吃含高饱和脂肪的食品"  + "\n我应该少吃含超高饱和脂肪的食品" + "\n我应该少吃含高胆固醇的食品" + "\n我应该少吃含超高胆固醇的食品"); 
  } else {
    alert("我的BMI是"+ myBMI + "\n我的体重超重，属于严重肥胖"); 
    alert("\n我应该少吃含高脂肪的食品" + "\n我应该少吃含超高脂肪的食品" + "\n我应该少吃含饱和脂肪的食品"  + "\n我应该少吃含超高饱和脂肪的食品" + "\n我应该少吃含高胆固醇的食品" + "\n我应该少吃含超高胆固醇的食品"); 
  }
}
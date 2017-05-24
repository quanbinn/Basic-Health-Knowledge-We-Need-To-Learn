function handleSubmit(){
  // Get value from form element
  var unit = document.getElementById("unit").value;
  var calory = document.getElementById("calory").value;
  var totalFat = document.getElementById("totalFat").value;
  var saturatedFat = document.getElementById("saturatedFat").value;
  var cholesterol = document.getElementById("cholesterol").value;

  var caloryPercentDV = (calory * 100 / 2000).toFixed(0);             // get calories's %DV
  var totalFatPercentDV = (totalFat * 100  / 65).toFixed(0);           // get total fat's %DV
  var saturatedFatPercentDV = (saturatedFat * 100  / 20).toFixed(0);   // get saturated fat's %DV
  var cholesterolPercentDV = (cholesterol * 100  / 300).toFixed(0);    // get cholesterol's %DV

  // get the quotient of totalFat's %DV / calories's %DV 
  var totalFatPercentDVQuotient = (totalFatPercentDV / caloryPercentDV).toFixed(1);  
  // get the quotient of saturatedFat's %DV / calories's %DV
  var saturatedFatPercentDVQuotient = (saturatedFatPercentDV / caloryPercentDV).toFixed(1);
  // get the quotient of cholesterol's %DV / calories's %DV  
  var cholesterolPercentDVQuotient = (cholesterolPercentDV / caloryPercentDV).toFixed(1);
  
  alert("这种食品的单位: " + unit + "克\n这种食品的能量: " + calory + "卡路里\n这种食品的总脂肪: " + totalFat + "克\n这种食品的饱和脂肪: " + saturatedFat +"克\n这种食品的胆固醇: " + cholesterol +"毫克");
  
  // render the food info filled 
  document.getElementById("foodUnit").textContent = "单位: " + unit +"克";  
  document.getElementById("foodCalory").textContent = "能量 " + calory +"卡路里";  
  document.getElementById("foodTotalFat").textContent = "总脂肪: " + totalFat +"克";  
  document.getElementById("foodSaturatedFat").textContent = "饱和脂肪: " + saturatedFat +"克";  
  document.getElementById("foodCholesterol").textContent = "胆固醇: " + cholesterol +"毫克";  

  alert("占卡路里每天需求总量的：" + caloryPercentDV +"%\n占总脂肪每天需求总量的：" + totalFatPercentDV +"%\n占饱和脂肪每天需求总量的：" + saturatedFatPercentDV +"%\n占饱和脂肪每天需求总量的：" + saturatedFatPercentDV +"%\n占胆固醇每天需求总量的：" + cholesterolPercentDV +"%");

  document.getElementById("foodCaloryPercentDV").textContent = "占卡路里每天需求总量的：" + caloryPercentDV +"%";  
  document.getElementById("foodTotalFatPercentDV").textContent = "占总脂肪每天需求总量的：" + totalFatPercentDV +"%";  
  document.getElementById("foodSaturatedFatPercentDV").textContent = "占饱和脂肪每天需求总量的：" + saturatedFatPercentDV +"%"; 
  document.getElementById("foodCholesterolPercentDV").textContent = "占胆固醇每天需求总量的：" + cholesterolPercentDV +"%";  

  alert("总脂肪占比/卡路里占比：" + totalFatPercentDVQuotient + ".\n饱和脂肪占比/卡路里占比：" + saturatedFatPercentDVQuotient + ".\n胆固醇占比/卡路里占比：" + cholesterolPercentDVQuotient);

  document.getElementById("foodTotalFatPercentDVQuotient").textContent = "总脂肪占比/卡路里占比：" + totalFatPercentDVQuotient; 
  document.getElementById("foodSaturatedFatPercentDVQuotient").textContent = "饱和脂肪占比/卡路里占比：" + saturatedFatPercentDVQuotient ; 
  document.getElementById("foodCholesterolPercentDVQuotient").textContent = "胆固醇占比/卡路里占比：" + cholesterolPercentDVQuotient;  
 }
function handleSubmit(){
  // Get value from form element
  var calory = document.getElementById("calory").value;
  var cholesterol = document.getElementById("cholesterol").value;

  var caloryPercentDV = (calory * 100 / 2000).toFixed(0);             // get calories's %DV
  var cholesterolPercentDV = (cholesterol * 100  / 300).toFixed(0);    // get cholesterol's %DV

  // get the quotient of cholesterol's %DV / calories's %DV  
  var cholesterolPercentDVQuotient = (cholesterolPercentDV / caloryPercentDV).toFixed(1);
  
  alert("能量: " + calory + "卡路里\n这种食品的胆固醇: " + cholesterol +"毫克");
  
  // render the food info filled 
  document.getElementById("foodCalory").textContent = "能量 " + calory +"卡路里";  
  document.getElementById("foodCholesterol").textContent = "胆固醇: " + cholesterol +"毫克";  

  alert("占卡路里每天需求总量的：" + caloryPercentDV +"%\n占胆固醇每天需求总量的：" + cholesterolPercentDV +"%");

  document.getElementById("foodCaloryPercentDV").textContent = "占卡路里每天需求总量的：" + caloryPercentDV +"%";  
  document.getElementById("foodCholesterolPercentDV").textContent = "占胆固醇每天需求总量的：" + cholesterolPercentDV +"%";  

  alert("胆固醇占比/卡路里占比：" + cholesterolPercentDVQuotient);

  document.getElementById("foodCholesterolPercentDVQuotient").textContent = "胆固醇占比/卡路里占比：" + cholesterolPercentDVQuotient; 
  
  // output your 胆固醇占比/卡路里占比 description according to HealthyDecision's recommendation
  if (cholesterolPercentDVQuotient >= 0 && cholesterolPercentDVQuotient <= 0.5 ) {
    alert("这种食品的胆固醇占比/卡路里占比是"+ cholesterolPercentDVQuotient + "。"); 
    alert("\n从胆固醇含量来看，这种食品含有低胆固醇。");   
  } else if ( cholesterolPercentDVQuotient > 0.5 && cholesterolPercentDVQuotient <= 1.5 ) {
    alert("这种食品的胆固醇占比/卡路里占比是"+ cholesterolPercentDVQuotient + "。"); 
    alert("\n从胆固醇含量来看，这种食品含有含量适中的胆固醇。"); 
  } else if ( cholesterolPercentDVQuotient > 1.5 && cholesterolPercentDVQuotient <= 10 ) {
    alert("这种食品的胆固醇占比/卡路里占比是"+ cholesterolPercentDVQuotient + "。"); 
    alert("\n从胆固醇含量来看，这种食品含有高胆固醇。"); 
  } else {
    alert("这种食品的胆固醇占比/卡路里占比是"+ cholesterolPercentDVQuotient + "。"); 
    alert("\n从胆固醇含量来看，这种食品含有超高胆固醇。"); 
  }
  
 }
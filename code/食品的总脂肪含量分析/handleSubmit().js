function handleSutotalFatPercentDVQuotientt(){
  // Get value from form element
  var unit = document.getElementById("unit").value;
  var calory = document.getElementById("calory").value;
  var totalFat = document.getElementById("totalFat").value;

  var caloryPercentDV = (calory * 100 / 2000).toFixed(0);             // get calories's %DV
  var totalFatPercentDV = (totalFat * 100  / 65).toFixed(0);           // get total fat's %DV

  // get the quotient of totalFat's %DV / calories's %DV 
  var totalFatPercentDVQuotient = (totalFatPercentDV / caloryPercentDV).toFixed(1);  
  
  alert("这种食品的单位: " + unit + "克\n这种食品的能量: " + calory + "卡路里\n这种食品的总脂肪: " + totalFat + "克");
  
  // render the food info filled 
  document.getElementById("foodUnit").textContent = "单位: " + unit +"克";  
  document.getElementById("foodCalory").textContent = "能量 " + calory +"卡路里";  
  document.getElementById("foodTotalFat").textContent = "总脂肪: " + totalFat +"克";  

  alert("占卡路里每天需求总量的：" + caloryPercentDV +"%\n占总脂肪每天需求总量的：" + totalFatPercentDV +"%");

  document.getElementById("foodCaloryPercentDV").textContent = "占卡路里每天需求总量的：" + caloryPercentDV +"%";  
  document.getElementById("foodTotalFatPercentDV").textContent = "占总脂肪每天需求总量的：" + totalFatPercentDV +"%";  

  alert("总脂肪占比/卡路里占比：" + totalFatPercentDVQuotient + ".");

  document.getElementById("foodTotalFatPercentDVQuotient").textContent = "总脂肪占比/卡路里占比：" + totalFatPercentDVQuotient; 

   // output your 总脂肪占比/卡路里占比 description according to HealthyDecision recommendation
  if (totalFatPercentDVQuotient <= 1) {
    alert("这种食品的总脂肪占比/卡路里占比是"+ totalFatPercentDVQuotient + "。"); 
    alert("\n从总脂肪含量来看，这是均衡食品？？。");   
  } else if ( totalFatPercentDVQuotient > 1 && totalFatPercentDVQuotient <= 2 ) {
    alert("这种食品的总脂肪占比/卡路里占比是"+ totalFatPercentDVQuotient + "。"); 
    alert("\n从总脂肪含量来看，这种食品含有高脂肪。"); 
  } else {
    alert("这种食品的总脂肪占比/卡路里占比是"+ totalFatPercentDVQuotient + "。"); 
    alert("\n从总脂肪含量来看，这种食品含有超高脂肪。"); 
  }

 }

/*

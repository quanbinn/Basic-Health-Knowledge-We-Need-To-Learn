function handleSubmit(){
  // Get value from form element
  var calory = document.getElementById("calory").value;
  var saturatedFat = document.getElementById("saturatedFat").value;

  var caloryPercentDV = (calory * 100 / 2000).toFixed(0);             // get calories's %DV
  var saturatedFatPercentDV = (saturatedFat * 100  / 20).toFixed(0);   // get saturated fat's %DV

  // get the quotient of saturatedFat's %DV / calories's %DV
  var saturatedFatPercentDVQuotient = (saturatedFatPercentDV / caloryPercentDV).toFixed(1);
  
  alert("这种食品的能量: " + calory + "卡路里\n这种食品的饱和脂肪: " + saturatedFat +"克");
  
  // render the food info filled 
  document.getElementById("foodCalory").textContent = "能量 " + calory +"卡路里";  
  document.getElementById("foodSaturatedFat").textContent = "饱和脂肪: " + saturatedFat +"克";  

  alert("占卡路里每天需求总量的：" + caloryPercentDV +"%\n占饱和脂肪每天需求总量的：" + saturatedFatPercentDV +"%");

  document.getElementById("foodCaloryPercentDV").textContent = "占卡路里每天需求总量的：" + caloryPercentDV +"%";  
  document.getElementById("foodSaturatedFatPercentDV").textContent = "占饱和脂肪每天需求总量的：" + saturatedFatPercentDV +"%"; 

  alert("饱和脂肪占比/卡路里占比：" + saturatedFatPercentDVQuotient + ".");

  document.getElementById("foodSaturatedFatPercentDVQuotient").textContent = "饱和脂肪占比/卡路里占比：" + saturatedFatPercentDVQuotient ; 
  
  // output your 饱和脂肪占比/卡路里占比 description according to HealthyDecision's recommendation
  if (saturatedFatPercentDVQuotient >= 0 && saturatedFatPercentDVQuotient <= 0.5) {
    alert("这种食品的饱和脂肪占比/卡路里占比是" + saturatedFatPercentDVQuotient + "。");
    alert("\n从饱和脂肪含量来看，这种食品含有低饱和脂肪。");
  } else if (saturatedFatPercentDVQuotient > 0.5 && saturatedFatPercentDVQuotient <= 1.3) {
    alert("这种食品的饱和脂肪占比/卡路里占比是" + saturatedFatPercentDVQuotient + "。");
    alert("\n从饱和脂肪含量来看，这种食品含有含量适中的饱和脂肪。");
  } else if (saturatedFatPercentDVQuotient > 1.3 && saturatedFatPercentDVQuotient <= 2.0) {
    alert("这种食品的饱和脂肪占比/卡路里占比是" + saturatedFatPercentDVQuotient + "。");
    alert("\n从饱和脂肪含量来看，这种食品含有高饱和脂肪。");
  } else {
    alert("这种食品的饱和脂肪占比/卡路里占比是" + saturatedFatPercentDVQuotient + "。");
    alert("\n从饱和脂肪含量来看，这种食品含有超高饱和脂肪。");
  };
 }
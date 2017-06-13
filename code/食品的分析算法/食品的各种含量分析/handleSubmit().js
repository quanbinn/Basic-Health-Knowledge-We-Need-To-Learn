function handleSubmit() {
  // Get value from form element
  var calory = document.getElementById("calory").value;
  var totalFat = document.getElementById("totalFat").value;
  var saturatedFat = document.getElementById("saturatedFat").value;
  var cholesterol = document.getElementById("cholesterol").value;
  var sodium = document.getElementById("sodium").value;
  var calcium = document.getElementById("calcium").value;

  var caloryPercentDV = (calory * 100 / 2000).toFixed(0); // get calories's %DV
  var totalFatPercentDV = (totalFat * 100 / 65).toFixed(0); // get total fat's %DV
  var saturatedFatPercentDV = (saturatedFat * 100 / 20).toFixed(0); // get saturated fat's %DV
  var cholesterolPercentDV = (cholesterol * 100 / 300).toFixed(0); // get cholesterol's %DV
  var sodiumPercentDV = (sodium * 100 / 2000).toFixed(0); // get total fat's %DV
  var calciumPercentDV = (calcium * 100  / 800).toFixed(0);           // get total fat's %DV

  // get the quotient of totalFat's %DV / calories's %DV 
  var totalFatPercentDVQuotient = (totalFatPercentDV / caloryPercentDV).toFixed(1);
  // get the quotient of saturatedFat's %DV / calories's %DV
  var saturatedFatPercentDVQuotient = (saturatedFatPercentDV / caloryPercentDV).toFixed(1);
  // get the quotient of cholesterol's %DV / calories's %DV  
  var cholesterolPercentDVQuotient = (cholesterolPercentDV / caloryPercentDV).toFixed(1);
  // get the quotient of sodium's %DV / calories's %DV 
  var sodiumPercentDVQuotient = (sodiumPercentDV / caloryPercentDV).toFixed(1);
  // get the quotient of calcium's %DV / calories's %DV 
  var calciumPercentDVQuotient = (calciumPercentDV / caloryPercentDV).toFixed(1);  

  alert("这种食品的能量: " + calory + "卡路里\n这种食品的总脂肪: " + totalFat + "克\n这种食品的饱和脂肪: " + saturatedFat + "克\n这种食品的胆固醇: " + cholesterol + "毫克\n这种食品的钠: " + sodium + "毫克\n这种食品的钙: " + calcium + "毫克");

    // render the food info filled 
    document.getElementById("foodCalory").textContent = "能量 " + calory + "卡路里"; 
    document.getElementById("foodTotalFat").textContent = "总脂肪: " + totalFat + "克";
    document.getElementById("foodSaturatedFat").textContent = "饱和脂肪: " + saturatedFat + "克";
    document.getElementById("foodCholesterol").textContent = "胆固醇: " + cholesterol + "毫克";
    document.getElementById("foodSodium").textContent = "钠: " + sodium + "毫克";
    document.getElementById("foodCalcium").textContent = "钙: " + calcium +"毫克";  

    alert("占卡路里每天需求总量的：" + caloryPercentDV + "%\n占总脂肪每天需求总量的：" + totalFatPercentDV + "%\n占饱和脂肪每天需求总量的：" + saturatedFatPercentDV + "%\n占饱和脂肪每天需求总量的：" + saturatedFatPercentDV + "%\n占胆固醇每天需求总量的：" + cholesterolPercentDV + "%\n占钠每天需求总量的：" + sodiumPercentDV + "%\n占钙每天需求总量的：" + calciumPercentDV +"%");

  document.getElementById("foodCaloryPercentDV").textContent = "占卡路里每天需求总量的：" + caloryPercentDV + "%";    document.getElementById("foodTotalFatPercentDV").textContent = "占总脂肪每天需求总量的：" + totalFatPercentDV + "%";  document.getElementById("foodSaturatedFatPercentDV").textContent = "占饱和脂肪每天需求总量的：" + saturatedFatPercentDV + "%"; document.getElementById("foodCholesterolPercentDV").textContent = "占胆固醇每天需求总量的：" + cholesterolPercentDV + "%";   document.getElementById("foodSodiumPercentDV").textContent = "占钠每天需求总量的：" + sodiumPercentDV + "%";
  document.getElementById("foodCalciumPercentDV").textContent = "占钙每天需求总量的：" + calciumPercentDV +"%";  

    alert("总脂肪占比/卡路里占比：" + totalFatPercentDVQuotient + ".\n饱和脂肪占比/卡路里占比：" + saturatedFatPercentDVQuotient + ".\n胆固醇占比/卡路里占比：" + cholesterolPercentDVQuotient + ".\n钠占比/卡路里占比：" + sodiumPercentDVQuotient + ".\n钙占比/卡路里占比：" + calciumPercentDVQuotient + ".");

    document.getElementById("foodTotalFatPercentDVQuotient").textContent = "总脂肪占比/卡路里占比：" + totalFatPercentDVQuotient;
    document.getElementById("foodSaturatedFatPercentDVQuotient").textContent = "饱和脂肪占比/卡路里占比：" + saturatedFatPercentDVQuotient;
    document.getElementById("foodCholesterolPercentDVQuotient").textContent = "胆固醇占比/卡路里占比：" + cholesterolPercentDVQuotient;
    document.getElementById("foodSodiumPercentDVQuotient").textContent = "钠占比/卡路里占比：" + sodiumPercentDVQuotient;
    document.getElementById("foodCalciumPercentDVQuotient").textContent = "钙占比/卡路里占比：" + calciumPercentDVQuotient; 

    // output your 总脂肪占比/卡路里占比 description according to HealthyDecision recommendation
    if (totalFatPercentDVQuotient >= 0 && totalFatPercentDVQuotient <= 0.5) {
      alert("这种食品的总脂肪占比/卡路里占比是"+ totalFatPercentDVQuotient + "。"); 
      alert("\n从总脂肪含量来看，这种食品含有低脂肪。");   
    } else if ( totalFatPercentDVQuotient > 0.5 && totalFatPercentDVQuotient <= 1.3 ) {
      alert("这种食品的总脂肪占比/卡路里占比是"+ totalFatPercentDVQuotient + "。"); 
      alert("\n从总脂肪含量来看，这种食品含有含量适中的脂肪。"); 
    } else if ( totalFatPercentDVQuotient > 1.3 && totalFatPercentDVQuotient <= 2.0 ) {
      alert("这种食品的总脂肪占比/卡路里占比是"+ totalFatPercentDVQuotient + "。"); 
      alert("\n从总脂肪含量来看，这种食品含有高脂肪。"); 
    } else {
      alert("这种食品的总脂肪占比/卡路里占比是"+ totalFatPercentDVQuotient + "。"); 
      alert("\n从总脂肪含量来看，这种食品含有超高脂肪。"); 
    };

    // output your 饱和脂肪占比/卡路里占比 description according to HealthyDecision's recommendation
    if (saturatedFatPercentDVQuotient <= 1) {
      alert("这种食品的饱和脂肪占比/卡路里占比是" + saturatedFatPercentDVQuotient + "。");
      alert("\n从饱和脂肪含量来看，这是均衡食品？？。");
    } else if (saturatedFatPercentDVQuotient > 1 && saturatedFatPercentDVQuotient <= 2) {
      alert("这种食品的饱和脂肪占比/卡路里占比是" + saturatedFatPercentDVQuotient + "。");
      alert("\n从饱和脂肪含量来看，这种食品含有高饱和脂肪。");
    } else {
      alert("这种食品的饱和脂肪占比/卡路里占比是" + saturatedFatPercentDVQuotient + "。");
      alert("\n从饱和脂肪含量来看，这种食品含有超高饱和脂肪。");
    };

    // output your 胆固醇占比/卡路里占比 description according to HealthyDecision's recommendation
    if (cholesterolPercentDVQuotient <= 1) {
      alert("这种食品的胆固醇占比/卡路里占比是" + cholesterolPercentDVQuotient + "。");
      alert("\n从胆固醇含量来看，这是均衡食品？？。");
    } else if (cholesterolPercentDVQuotient > 1 && cholesterolPercentDVQuotient <= 2) {
      alert("这种食品的胆固醇占比/卡路里占比是" + cholesterolPercentDVQuotient + "。");
      alert("\n从胆固醇含量来看，这种食品含有高胆固醇。");
    } else {
      alert("这种食品的胆固醇占比/卡路里占比是" + cholesterolPercentDVQuotient + "。");
      alert("\n从胆固醇含量来看，这种食品含有超高胆固醇。");
    };

    // output your 钠占比/卡路里占比 description according to HealthyDecision recommendation
    if (sodiumPercentDVQuotient <= 1) {
      alert("这种食品的钠占比/卡路里占比是" + sodiumPercentDVQuotient + "。");
      alert("\n从钠含量来看，这是均衡食品？？。");
    } else if (sodiumPercentDVQuotient > 1 && sodiumPercentDVQuotient <= 2) {
      alert("这种食品的钠占比/卡路里占比是" + sodiumPercentDVQuotient + "。");
      alert("\n从钠含量来看，这种食品含有高钠。");
    } else {
      alert("这种食品的钠占比/卡路里占比是" + sodiumPercentDVQuotient + "。");
      alert("\n从钠含量来看，这种食品含有超高钠。");
    };
    
    // output your 钙占比/卡路里占比 description according to HealthyDecision recommendation
    if (calciumPercentDVQuotient <= 1) {
      alert("这种食品的钙占比/卡路里占比是"+ calciumPercentDVQuotient + "。"); 
      alert("\n从钙含量来看，这是均衡食品？？。");   
    } else if ( calciumPercentDVQuotient > 1 && calciumPercentDVQuotient <= 2 ) {
      alert("这种食品的钙占比/卡路里占比是"+ calciumPercentDVQuotient + "。"); 
      alert("\n从钙含量来看，这种食品含有高钙。"); 
    } else {
      alert("这种食品的钙占比/卡路里占比是"+ calciumPercentDVQuotient + "。"); 
      alert("\n从钙含量来看，这种食品含有超高钙。"); 
    }
  
  }

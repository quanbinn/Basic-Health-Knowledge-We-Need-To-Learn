function handleSubmit(){
  // Get value from form element
  var calory = document.getElementById("calory").value;
  var sodium = document.getElementById("sodium").value;

  var caloryPercentDV = (calory * 100 / 2000).toFixed(0);             // get calories's %DV
  var sodiumPercentDV = (sodium * 100 / 2000).toFixed(0);           // get total fat's %DV

  // get the quotient of sodium's %DV / calories's %DV 
  var sodiumPercentDVQuotient = (sodiumPercentDV / caloryPercentDV).toFixed(1);  
  
  alert("这种食品的能量: " + calory + "卡路里\n这种食品的钠: " + sodium + "毫克");
  
  // render the food info filled 
  document.getElementById("foodCalory").textContent = "能量 " + calory +"卡路里";  
  document.getElementById("foodSodium").textContent = "钠: " + sodium +"毫克";  

  alert("占卡路里每天需求总量的：" + caloryPercentDV +"%\n占钠每天需求总量的：" + sodiumPercentDV +"%");

  document.getElementById("foodCaloryPercentDV").textContent = "占卡路里每天需求总量的：" + caloryPercentDV +"%";  
  document.getElementById("foodSodiumPercentDV").textContent = "占钠每天需求总量的：" + sodiumPercentDV +"%";  

  alert("钠占比/卡路里占比：" + sodiumPercentDVQuotient + ".");

  document.getElementById("foodSodiumPercentDVQuotient").textContent = "钠占比/卡路里占比：" + sodiumPercentDVQuotient; 
  
  // output your 钠占比/卡路里占比 description according to HealthyDecision recommendation
  if (sodiumPercentDVQuotient >= 0 && sodiumPercentDVQuotient <= 0.5 ) {
    alert("这种食品的钠占比/卡路里占比是"+ sodiumPercentDVQuotient + "。"); 
    alert("\n从钠含量来看，这种食品含有低钠。");   
  } else if ( sodiumPercentDVQuotient > 0.5 && sodiumPercentDVQuotient <= 1.5 ) {
    alert("这种食品的钠占比/卡路里占比是"+ sodiumPercentDVQuotient + "。"); 
    alert("\n从钠含量来看，这种食品含有含量适中的钠。"); 
  } else if ( sodiumPercentDVQuotient > 1.5 && sodiumPercentDVQuotient <= 3 ) {
    alert("这种食品的钠占比/卡路里占比是"+ sodiumPercentDVQuotient + "。"); 
    alert("\n从钠含量来看，这种食品含有高钠。"); 
  } else {
    alert("这种食品的钠占比/卡路里占比是"+ sodiumPercentDVQuotient + "。"); 
    alert("\n从钠含量来看，这种食品含有超高钠。"); 
  }
 }
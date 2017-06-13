function handleSubmit(){
  // Get value from form element
  var calory = document.getElementById("calory").value;
  var calcium = document.getElementById("calcium").value;

  var caloryPercentDV = (calory * 100 / 2000).toFixed(0);             // get calories's %DV
  var calciumPercentDV = (calcium * 100  / 800).toFixed(0);           // get total fat's %DV

  // get the quotient of calcium's %DV / calories's %DV 
  var calciumPercentDVQuotient = (calciumPercentDV / caloryPercentDV).toFixed(1);  
  
  alert("这种食品的能量: " + calory + "卡路里\n这种食品的钙: " + calcium + "毫克");
  
  // render the food info filled 
  document.getElementById("foodCalory").textContent = "能量 " + calory +"卡路里";  
  document.getElementById("foodCalcium").textContent = "钙: " + calcium +"毫克";  

  alert("占卡路里每天需求总量的：" + caloryPercentDV +"%\n占钙每天需求总量的：" + calciumPercentDV +"%");

  document.getElementById("foodCaloryPercentDV").textContent = "占卡路里每天需求总量的：" + caloryPercentDV +"%";  
  document.getElementById("foodCalciumPercentDV").textContent = "占钙每天需求总量的：" + calciumPercentDV +"%";  

  alert("钙占比/卡路里占比：" + calciumPercentDVQuotient + ".");

  document.getElementById("foodCalciumPercentDVQuotient").textContent = "钙占比/卡路里占比：" + calciumPercentDVQuotient; 
  
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
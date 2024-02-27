 function greeting(greetingHandler,name){
    greetingHandler(name);
 }

//  const name = 'Fuscca mama';
//  const numers= [45,56,76];
//  const laptop = {price:45000,brand:'lenovo',memory:'8gb'};

 function greetingHandler(name){
   console.log('Good Morning',name);
 }

 function greetingEvening(name){
   console.log('Good Evenging',name);
 }

 function  greetingNight(name){
   console.log('Good Night',name);
 }

 greeting(greetingHandler,'Zaheen Rakib');
 greeting(greetingHandler,'Hamim');
 greeting(greetingHandler,'Tom Cruise');
 greeting(greetingEvening,'Tome Bosh');
 greeting(greetingNight, 'Bulbul');

 function submitHadler(){
   console.log("Submit Button Clicked");
 }
 document.getElementById('btn-submit').addEventListener('click',submitHadler)
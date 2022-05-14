 

const button = document.getElementById('button');


    // let todayS= new Date().getSeconds();        
    // let todayM = new Date().getMinutes();
    // let todayG = new Date().getHours();
    // let seconds =  todayS.toFixed(0);
    // let minutes = todayM.toFixed(0);
    // let houses = todayG.toFixed(0);
    

    // t3.innerHTML = seconds;
    // t2.innerHTML = minutes;
    // t1.innerHTML = houses;

button.addEventListener('click' , ()=>{
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
 
    let today = new Date();


    time  = () => {

    
    let todayS= new Date().getSeconds();        
    let todayM = new Date().getMinutes();
    let todayG = new Date().getHours();
    let seconds =  todayS.toFixed(0);
    let minutes = todayM.toFixed(0);
    let houses = todayG.toFixed(0);
    

    t3.innerHTML = seconds;
    t2.innerHTML = minutes;
    t1.innerHTML = houses;


        }

             
    setInterval(time , 1000);
          




}) 




   
 
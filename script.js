let timeDisplay=document.querySelector('h1');
   
setInterval(function(){
    let date= new Date();
let time= date.toLocaleTimeString();
    timeDisplay.innerText=time;
},1000);



//cursor animation//

document.addEventListener('mousemove',function(e){
    let main= document.getElementById('main');
    let cursor= document.getElementById('cursor');
    cursor.style.left= e.x+'px';
    cursor.style.top= e.y+'px'; 
},false)
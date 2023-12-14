'use strict';
const switcher = document.querySelector('.mode')
switcher.addEventListener(
    'click', function(){
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    const className = document.body.className;
    if(className == "light-theme"){
        
    } else {
        
    }
}
)


const switcher2 = document.querySelector('.sel')
switcher2.addEventListener(
    'click', function(){
        var x = document.getElementById("Auto");
        var y = document.getElementById("res");
        x.style.display = "block";
         y.style.display = "none";
         if(x.style.display === "none") {
         x.style.display = "block";
         y.style.display = "none";
         } else {
          document.getElementByClass(".sel").disabled = true;
          y.style.display = "none";
          x.style.display = "block";
}
    }
)
const switcher1 = document.querySelector('.sel1')
switcher1.addEventListener(
    'click', function(){
        var y = document.getElementById("res");
        var x = document.getElementById("Auto");
        y.style.display = "block";
        x.style.display = "none";
         if(y.style.display === "none") {
         y.style.display = "block";
         x.style.display = "none";
       } else {
        document.getElementByClass(".sel1").disabled = true;
        y.style.display = "block";
        y.style.display = "none";
       
        
}
    }
)


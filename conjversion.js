var div = document.createElement("DIV");     
var h1 = document.createElement("H1"); 
var po = document.createElement("P"); 
var pt = document.createElement("P"); 
var pth = document.createElement("P");
 
var inpo = document.createElement("INPUT"); 
var inpt = document.createElement("INPUT"); 
var btn = document.createElement("BUTTON"); 
var auto = document.createElement("BUTTON"); 
var quit = document.createElement("BUTTON"); 

var t = document.createTextNode("Controls");
var a = document.createTextNode("Vocab");
var c = document.createTextNode("Start");
var d = document.createTextNode("Quit");
var e = document.createTextNode("Attempts");
var f = document.createTextNode("AutoComplete");


quit.appendChild(d);
btn.appendChild(c);
auto.appendChild(f);
h1.appendChild(t);
div.appendChild(h1);
div.appendChild(po);
div.appendChild(pt);
div.appendChild(inpt);
div.appendChild(pth);



div.appendChild(btn);
div.appendChild(quit);
div.appendChild(auto);
po.appendChild(inpo);
pt.appendChild(a);
pth.appendChild(e);



document.body.insertBefore(div, document.body.firstChild);
inpt.setAttribute("type", "number");
inpt.setAttribute("id", "maxattempts");
inpo.setAttribute("type", "text-area");
pt.setAttribute("id", "box");
h1.setAttribute("id", "box");
btn.setAttribute("id", "box");
div.setAttribute("id", "box");
quit.setAttribute("onClick", "exit()");
btn.setAttribute("onClick", "start()");
auto.setAttribute("onClick", "autocomp()");
inpo.setAttribute("id", "per");
po.setAttribute('style', 'font-size:16px !important; letter-spacing: opx !important; font-family: arial !important; opacity: 1 !important;');
inpo.setAttribute('style', 'font-size:16px !important; letter-spacing: opx !important; font-family: arial !important; opacity: 1 !important; background-color: white !important; border: black solid 1px !important; text-align: center !important;');


inpt.style.width="80%";
inpt.style.height="8.333%";


div.style.color="black";
div.style.height="300px";
div.style.width="250px";
div.style.backgroundColor = "rgb(217, 230, 252)";
div.style.position = "fixed";
div.style.zIndex = "9999999";
div.style.marginLeft = "5%";
div.style.marginTop = "7.5%";
div.style.opacity = ".7";
div.style.borderRadius = "20px";
div.style.border = "black solid .5px";
div.style.textAlign = "center";

h1.style.fontSize = "20px";
h1.style.fontFamily = "arial";
h1.style.backgroundColor = "rgba(255,255,255,1)";
h1.style.opacity = "1";
h1.style.marginTop = "5%";
h1.style.border = "black solid .5px";
h1.style.borderBottom = "black solid 2px";
h1.style.fontWeight = "400";
h1.style.lineHeight = "100%";
h1.style.textDecoration = "none";
h1.style.letterSpacing = "0px";


p.style.color = "black";
p.style.marginTop = "5%";
p.style.fontWeight = "400";
p.style.lineHeight = "100%";
p.style.textDecoration = "none";



function exit(){

    
document.getElementById("box").remove();
document.body.removeEventListener('click', function(e) {
    e.target.innerHTML = document.getElementById('per').value + "%";
});
var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {return(true);};
    }
}




function autocomp(){
   
    var mx = Math.floor(Math.random()*(8-2+1)+2);
    var rep = 0;
    var inrect = 0;
      var max = Math.floor(Math.random()*(42-40+1)+40);
    while(rep === 0){
        var incor = 0;
    scoreChec();
        if(incor === 0){
     getAlon();
        }
    clickButto(); 
    }
    
    
    
    
    
    
    function scoreChec(){
     
        var score = document.getElementsByClassName("ratio col-lg-4 pull-left")[0].getAttribute("title");
        
        var scr = score.substr(score.indexOf("/")+1 ,score.length);
        
        
        
        
      
        var wong = document.getElementsByTagName("SPAN")[26].getAttribute("class");
       
        if(wong == "bubble incorrect"){
            
            var find = document.getElementsByTagName("SPAN")[26].getElementsByTagName("SPAN")[0].innerHTML;
            
            var qu = document.getElementById('answer-input').value = find;
            
            incor = 1;
            
        }
        if(scr == max){
            rep = 1;
        }
       
        
       
    }
    
    function clickButto(){
        document.getElementById("check-button").click();
        
    }


function getAlon() {
var strine = document.getElementById('per').value;
var text = strine.replace(/[0-9]/g, '');
var peri = text.replace(/\s+/g, ' ');
var res = peri.split("  . ");


var arr = res.filter(function(e){return e}); 
    var lengo = arr.length / 2;
    for(var t = 1; t < lengo; t += 2){
        if(arr[t].indexOf("/") > -1){
            var h = arr[t].indexOf("/");
            
            var zazz = arr[t].substring(0 , arr[t].indexOf('/'));
            arr.splice(t, 1, zazz);
                
            
        }
        
    }
  
  
     

var quest = document.getElementById('question-input');

    var ans = 0;
    for(var i = 0; i < arr.length; i++){

        if(arr[i] == quest.innerHTML){
            ans = i;
           
        }else{
          
        }
       
    }
    var scor = document.getElementsByClassName("ratio col-lg-4 pull-left")[0].getAttribute("title");
        
        var sc = scor.substr(scor.indexOf("/")+1 ,scor.length);
    
      var scre = document.getElementsByClassName("ratio col-lg-4 pull-left")[0].getAttribute("title");
        
        var sr = scre.substr(scre.indexOf("/")+1 ,scre.length);
    
    if(sr < mx){
 document.getElementById('answer-input').value = arr[ans + 2];
    }else{
   
    
       document.getElementById('answer-input').value = arr[ans + 1];
    }
}
}




function start(){

    var rep = 0;
    while(rep === 0){
        var incor = 0;
    scoreCheck();
        if(incor === 0){
     getAlone();
        }
    clickButton(); 
    }
    
    
    
    
    
    
    function scoreCheck(){
     
        var score = document.getElementsByClassName("ratio col-lg-4 pull-left")[0].getAttribute("title");
        
        var scr = score.substr(score.indexOf("/")+1 ,score.length);
        
        
        var max = document.getElementById('maxattempts').value;
        var wong = document.getElementsByTagName("SPAN")[26].getAttribute("class");
       
        if(wong == "bubble incorrect"){
            
            var find = document.getElementsByTagName("SPAN")[26].getElementsByTagName("SPAN")[0].innerHTML;
            
            var qu = document.getElementById('answer-input').value = find;
            
            incor = 1;
            
        }
        if(scr == max){
            rep = 1;
        }
       
        
       
    }
    
    function clickButton(){
        document.getElementById("check-button").click();
        
    }


function getAlone() {
var strine = document.getElementById('per').value;
var text = strine.replace(/[0-9]/g, '');
var peri = text.replace(/\s+/g, ' ');
var res = peri.split("  . ");


var arr = res.filter(function(e){return e}); 
     var lengo = arr.length / 2;
    for(var t = 1; t < lengo; t += 2){
        if(arr[t].indexOf("/") > -1){
            var h = arr[t].indexOf("/");
            
            var zazz = arr[t].substring(0 , arr[t].indexOf('/'));
            arr.splice(t, 1, zazz);
                
            
        }
        
    }
  
     

var quest = document.getElementById('question-input');

    var ans = 0;
    for(var i = 0; i < arr.length; i++){

        if(arr[i] == quest.innerHTML){
            ans = i;
           
        }else{
          
        }
       
    }
    
document.getElementById('answer-input').value = arr[ans + 1];
}
    



}

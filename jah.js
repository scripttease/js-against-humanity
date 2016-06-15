window.onload=function(){
var mySVG=document.createElementNS("http://www.w3.org/2000/svg", "svg");
mySVG.setAttribute("width",800);
mySVG.setAttribute("height",500);
mySVG.setAttribute("id","dev-black");
document.querySelector("body").appendChild(mySVG);
var devBlack=document.createElementNS("http://www.w3.org/2000/svg", "rect");
devBlack.setAttribute("class","dev-black");
devBlack.setAttribute("width",200);
devBlack.setAttribute("height",200);
devBlack.setAttribute("x", 5);
devBlack.setAttribute("y", 5);
devBlack.setAttribute("fill", "black");
mySVG.appendChild(devBlack);
}
var svgText = document.createElementNS("http://www.w3.org/2000/svg", "text");
svgText.setAttribute("viewBox", "0 0 250 350");
svgText.setAttribute("id", "black-card");
svgText.setAttribute("class", "black-card-text");
svgText.setAttribute("width",250);
svgText.setAttribute("height",350);
svgText.setAttribute("font-family", "Arial");
svgText.setAttribute("font-size", "55");
svgText.setAttribute("fill", "white");
svgText.setAttribute("x",30) ;
svgText.setAttribute("y",95);

mySVG.appendChild(svgText);

var txt = document.getElementById("black-card");
txt.innerHTML = txt.innerHTML + "Pick a card, any card";


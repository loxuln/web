
//滑条背景

function setSlide(){
	var slide=document.getElementsByTagName("tbody")[1];
	for(var i=0;i<=360;i++){
	     var tr=document.createElement("tr");
		 var td=document.createElement("td");
		 hsl="hsl("+i+","+"90%"+","+"50%"+")";
		 td.style.backgroundColor=hsl;
		 tr.appendChild(td);
		 slide.appendChild(tr);
		 
		 
	}
}
//调色板
function color(){
	 var slde=document.getElementsByTagName("tbody")[0];
	 for(var i=0;i<100;i++){
	     var tr=document.createElement("tr");
		     for(var j=0;j<100;j++){
				 var td=document.createElement("td");
				 var h=document.getElementById("h").value;
				 
				 hsl="hsl("+h+","+j+"%"+","+i+"%"+")";
		         td.style.backgroundColor=hsl;
		         tr.appendChild(td);
			 }		 
		 slde.appendChild(tr);
		 
		 
	}
}
//鼠标位置
function loc(){
	var clr=document.getElementById("color");
	clr.addEventListener("mousemove",lo);
    function lo(){
		 
		 var e=event||window.event;
		 var thisY=e.clientY-document.getElementById("color").offsetTop;
		 var thisX=e.clientX-document.getElementById("color").offsetLeft;
		 var h=document.getElementById("h").value;//获得h值
		 var s=(0.25*thisX).toFixed(0);//高是400px，所以乘以0.25
		 var l=(0.25*thisY).toFixed(0);
		 var ii="hsl("+h+","+s+","+l+")";
		 var rgb=ii.hsl2Rgb().replace(/rgb\(|\)|\s/gi, '').split(',');//利用hsl2Rgb函数转换，然后将结果拆成数组
		 var r=document.getElementById("r");
		 var g=document.getElementById("g");
		 var b=document.getElementById("b");
		 r.value=rgb[0];
		 g.value=rgb[1];
		 b.value=rgb[2];
		 var ss=document.getElementById("s");
		 var ll=document.getElementById("l");
		 var iii="rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")";
		 var hsl=iii.rgb2Hsl().replace(/hsl\(|\)|\s/gi, '').split(',');
		 ss.value=hsl[1];
		 ll.value=hsl[2];
		 colorPanel();//调用函数实时显示颜色变化
		 
	}
	
	
	
}
//移动滑块
function moveSlide(){
	 var img=document.getElementById("img");
     var sld=document.getElementById("slide");
     sld.ondragover=function(e){e.preventDefault();}
     sld.ondrop=function(){
         var e=event||window.event;
		 var thisY=e.clientY-document.getElementById("slide").offsetTop;
		 if(thisY>360){
		     thisY=360;
			 }
		 var h=document.getElementById("h");
		 h.value=thisY;
		 var y=thisY+"px";
         var img=document.getElementById("img");
		 img.style.top=y;
		 changeColor(thisY);
		 
   }
     sld.onclick=function(){
         var e=event||window.event;
		 var thisY=e.clientY-document.getElementById("slide").offsetTop;
		 if(thisY>360){
		     thisY=360;
			 }
		 var h=document.getElementById("h");
		 h.value=thisY;
		 var y=thisY+"px";
         var img=document.getElementById("img");
		 img.style.top=y;
		 changeColor(thisY);
		 

   }
}
//rgb和hsl转换函数

/*function rgb2hsl(r,g,b){
	var h,s,l;
	r=r/255;g=g/255;b=b/255;
	var a=Math.max(r,g,b);
	var i=Math.min(r,g,b);
	if (a==i){h=0;}
	if ((a==r)&(g>=b)){h=60*(g-b)/(a-i);}
	if ((a==r)&(g<b)){h=60*(g-b)/(a-i)+360;}
	if (a==g){h=60*(g-b)/(a-i)+120;}
	if (a==b){h=60*(g-b)/(a-i)+240;}
	l=(1/2)*(a+i);
	if((l==0)|(a==i)){s=0;}
	if((l>0)&(l<=0.5)){s=(a-i)/(2*l);}
	if(l>0.5){s=(a-i)/(2-2*l);}
	return {h:h.toFixed(0),s:s.toFixed(2)*100+"%",l:l.toFixed(2)*100+"%"}
}*/


// RGB 转 HEX
String.prototype.colorHex = function() {
var hexReg = /^\#([0-9a-f]{3}|[0-9a-f]{6})$/gi;
  var that = this;
  if (/^(rgb|RGB)/.test(that)) {
    var aColor = that.replace(/(?:\(|\)|rgb)*/gi, '').split(',');
    var strHex = '#';
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = hex.length == 1 ? "0" + hex : hex
      strHex += hex
    }
    return strHex.toUpperCase();
  } else if (hexReg.test(that)) {
    var aNum=that.replace(/#/, '').split('');
    if (aNum.length===6) {
      return that.toUpperCase();
    } else if (aNum.length===3) {
      var numHex= '#';
      for (var i=0;i<aNum.length; i+=1) {
        numHex +=(aNum[i]+aNum[i])
      }
      return numHex.toUpperCase();
    }
  }
}
String.prototype.rgb2Hsl = function() {
  var c = this.colorHex();
  var r = parseInt(c.substring(1,3),16)/255;
  var g = parseInt(c.substring(3,5),16)/255;
  var b = parseInt(c.substring(5,7),16)/255;
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,s,l = (max + min)/2;

  if (max==min) {
    h=s=0; 
  } else {
    var d=max-min;
    s=l>0.5?d/(2-max-min):d/(max+min);
    switch (max) {
      case r:
        h=(g-b)/d+(g<b?6:0);
        break;
      case g:
        h=(b-r)/d+2;
        break;
      case b:
        h=(r-g)/d+4;
        break;
    }
    h/= 6;
  }

  h = Math.round(h*360)
  s = Math.round(s*100)
  l = Math.round(l*100)

  return 'hsl('+h+','+s+'%,'+l+'%)';
}



/*
function hsl2rgb(h,s,l){
    var r,g,b,q,p,hk,tr,tg,tb;
	if(l<0.5){q=l*(1+s);}
	if(l>=0.5){q=l+s-l*s;}
	p=2*l-q;
	hk=h/360;
	tr=hk+(1/3);
	tg=hk;
	tb=hk-(1/3);
	if(tr<0){tr=tr+1;}
	if(tr>1){tr=tr-1;}
	if(tg<0){tg=tg+1;}
	if(tg>1){tg=tg-1;}
	if(tb<0){tr=tb+1;}
	if(tb>1){tr=tb-1;}
	if(tr<(1/6)){tr=p+((q-p)*6*tr);}
	if(tr<0.5&tr>=(1/6)){tr=q;}
	if(tr<(2/3)&tr>=0.5){tr=p+((q-p)*6*((2/3)-tr));}
	if(tr>(2/3)){tr=p;}
	r=tr;
	if(tg<(1/6)){tg=p+((q-p)*6*tg);}
	if(tg<0.5&tg>=(1/6)){tg=q;}
	if(tg<(2/3)&tg>=0.5){tg=p+((q-p)*6*((2/3)-tg));}
	if(tg>(2/3)){tg=p;}
	g=tg;
	if(tb<(1/6)){tb=p+((q-p)*6*tb);}
	if(tb<0.5&tb>=(1/6)){tb=q;}
	if(tb<(2/3)&tb>=0.5){tb=p+((q-p)*6*((2/3)-tb));}
	if(tb>(2/3)){tb=p;}
	b=tb;
	return [Math.round(r*255),Math.round(g*255),Math.round(b*255)]
	
	
	
}*/

String.prototype.hsl2Rgb = function() {
  var hslReg=/^hsl\(.+?\)$/gi;
  var r, g, b;
  var o = this.replace(/hsl\(|\)|\s/gi,'').split(',');

  h = parseInt(o[0])/360;
  s = parseInt(o[1])/100;
  l = parseInt(o[2])/100;

  if(hslReg.test(this)) {
    if (s==0) {
      r=g=b=l; // achromatic
    } else {
      var hue2rgb = function hue2rgb(p,q,t) {
        if (t<0) t+=1;
        if (t>1) t-=1;
        if (t<1/6) return p+(q-p)*6*t;
        if (t<1/2) return q;
        if (t<2/3) return p+(q-p)*(2/3-t)*6;
        return p;
      }
      var q =l<0.5?l*(1+s):l+s-l*s;
      var p =2*l-q;
      r=hue2rgb(p,q,h+1/3);
      g=hue2rgb(p,q,h);
      b=hue2rgb(p,q,h-1/3);
    }
    return 'rgb('+Math.round(r*255)+','+Math.round(g*255)+','+Math.round(b*255)+')';
  }
}
//改变颜色函数
function changeColor(h){
	 var sde=document.getElementsByTagName("tbody")[0];
	 for(var i=0;i<sde.children.length;i++){
		 for(var j=0;j<sde.children[i].children.length;j++){
			 hsl="hsl("+h+","+j+"%"+","+i+"%"+")";
			 sde.children[i].children[j].style.backgroundColor=hsl;
		 }
		 
	 }
}
//colorpanel颜色
function colorPanel(){
	 var colorpanel=document.getElementById("colorpanel");
	 var rr=document.getElementById("r").value;
	 var gg=document.getElementById("g").value;
	 var bb=document.getElementById("b").value;
	 var ii="rgb("+rr+","+gg+","+bb+")";
	 colorpanel.style.backgroundColor=ii;
}

function init(){
	setSlide();
	moveSlide();
	color();
	loc();

	
}
init();
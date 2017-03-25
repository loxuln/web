// 初始数组
function arr() {
	var span=document.getElementsByTagName("span")[0].innerText=0;
	var ar=new Array();
	ar[0]=[0,0,0,0];
	ar[1]=[0,0,0,0];
	ar[2]=[0,0,0,0];
	ar[3]=[0,0,0,0];
    //绑定到各个表格
    var td=document.getElementsByTagName("td");
    for (var i=0;i<4;i++){
    	for(var j=0;j<4;j++){
    		td[4*i+j].innerText=ar[i][j];
    		td[4*i+j].style.color="#CCC0B2";

    	}

    }
    
}
// 随机出现2
function random2() {
	var td=document.getElementsByTagName("td");
	var ary=[];
	for(var i=0;i<16;i++){
		if(td[i].innerText==0){//检查值是否为零
			ary.push(i);
		}
	}
	if(ary.length!==0){
		var num=Math.floor((Math.random()*ary.length));
		var nu=Math.floor((Math.random()*100+1));
		var h=ary[num];
		if(nu>=40){
			td[h].innerText=2;
			td[h].style.backgroundColor="#EEE4DA"
		}
		if(nu<40){
			td[h].innerText=4;
			td[h].style.backgroundColor="#ECE0C8"
		}
		
		td[h].style.color="#7C736A";
	}
	

}
//检查游戏是否结束
function checkOff(){
	var td=document.getElementsByTagName("td");
	for(var i=0;i<td.length;i++){
		if(td[i].innerText==2048){
			var span=document.getElementsByTagName("span")[0].innerText;
			alert("你赢了，你的分数是："+span)
			break;
		}
	}
	var a=getarr("up").toString();
	var len=getarr("up").length;
	var b=getarr("down").toString();
	var c=getarr("left").toString();
	var d=getarr("right").toString();
	var aa=controlMove(getarr("up")).toString();
	var bb=controlMove(getarr("down")).toString();
	var cc=controlMove(getarr("left")).toString();
	var dd=controlMove(getarr("right")).toString();
	
	if((a==aa)&&(b==bb)&&(c==cc)&&(d==dd)){
		if(confirm("游戏结束，是否重玩？")){  
	        arr();
	        random2();
	        move();
	        changeColor();  
            }else{
            	arr();
	            random2();
	            move();
	            changeColor();
            }
	}

}
// 操作
function move() {
	document.onkeydown=function (event){
		var e=event||window.event;
		var key=e&&e.keyCode;
		if(key==38) {//上
			var a=getarr("up");
            var aa=controlMove(a,"ischeck");	
            addValue(aa,"up");
            checkOff();
            countScore();	
			random2();
			changeColor();
		}
		if (key==40) {//下
			var b=getarr("down");
            var bb=controlMove(b,"ischeck");	
            addValue(bb,"down");
            checkOff();
            countScore();	
			random2();
			changeColor();

		}
		if (key==37) {//左
			var c=getarr("left");
            var cc=controlMove(c,"ischeck");	
            addValue(cc,"left");
            checkOff();
            countScore();	
			random2();
			changeColor();

		}
		if (key==39) {//右
			var d=getarr("right");
            var dd=controlMove(d,"ischeck");	
            addValue(dd,"right");
            checkOff();
            countScore();	
			random2();
			changeColor();

		}
	}
	$(window).swipe({

        swipeLeft:function(){
        // 向左滑动执行
        var ccc=getarr("left");
            var cccc=controlMove(ccc,"ischeck");	
            addValue(cccc,"left");
            checkOff();
            countScore();	
			random2();
			changeColor();

    },
        swipeRight:function(){
        // 向右滑动执行
        var ddd=getarr("right");
            var dddd=controlMove(ddd,"ischeck");	
            addValue(dddd,"right");
            checkOff();
            countScore();	
			random2();
			changeColor();
    }
        swipeUp:function(){
        // 向上滑动执行
        var aaa=getarr("up");
            var aaaa=controlMove(aaa,"ischeck");	
            addValue(aaaa,"up");
            checkOff();
            countScore();	
			random2();
			changeColor();
    },
        swipeDown:function(){
        // 向下滑动执行
        var bbb=getarr("down");
            var bbbb=controlMove(bbb,"ischeck");	
            addValue(bbbb,"down");
            checkOff();
            countScore();	
			random2();
			changeColor();
    }
});

}
// 计分
function countScore() {
	var ii=0;
	for(var i=0;i<score.length;i++){
		ii=ii+score[i];
	}
	var span=document.getElementsByTagName("span")[0];
	var iii=parseInt(span.innerText);//字符串转为数字
	span.innerText=ii+iii;
	score=[];


}
//初始化函数
function init(){
	// 初始数组
	arr();
	// 随机出现2
	random2();
	random2();
	// 操作
	move();
	// 改变颜色
	changeColor();
	
}
//初始化
var score=[];

init();



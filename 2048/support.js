//获取值存入数组
function getarr(asx){
	var a=new Array(4);
	for(var i=0;i<a.length;i++){
		a[i]=new Array(4);
	}
	var td=document.getElementsByTagName("td");
	if(asx=="up"){
		for(var j=0;j<a.length;j++){
			a[j][0]=td[0+j].innerText;
			a[j][1]=td[4+j].innerText;
			a[j][2]=td[8+j].innerText;
			a[j][3]=td[12+j].innerText;
		}
		return a;
	}
	if(asx=="down"){
		for(var k=0;k<a.length;k++){
			a[k][0]=td[12+k].innerText;
			a[k][1]=td[8+k].innerText;
			a[k][2]=td[4+k].innerText;
			a[k][3]=td[0+k].innerText;
		}
		return a;
	}
	if(asx=="left"){
		for(var h=0;h<a.length;h++){
			a[h][0]=td[0+4*h].innerText;
			a[h][1]=td[1+4*h].innerText;
			a[h][2]=td[2+4*h].innerText;
			a[h][3]=td[3+4*h].innerText;
		}
		return a;
	}
	if(asx=="right"){
		for(var p=0;p<a.length;p++){
			a[p][0]=td[3+4*p].innerText;
			a[p][1]=td[2+4*p].innerText;
			a[p][2]=td[1+4*p].innerText;
			a[p][3]=td[0+4*p].innerText;
		}
		return a;
	}
    
	
} 

//控制操作
function controlMove(a,ischeck){
	var len=a.length;
	var l=len;
	for(var i=0;i<len;i++){
		//a.push(addSum(a[i],ischeck));
		addSum(a[i],ischeck);
	}
	return a;        
}

//合并算法
function addSum(arro,ischeck){
	
	var len=arro.length;
	var m=0,n=0;
	var mm=[1,1,1,1];
	for(;n<len;n++){
	for(var i=0;i<len;i++) {
		m=i+1;
		if(i!==3){
		if(arro[i]==0&&arro[m]!==0){arro[i]=arro[m];arro[m]=0;continue;}
		if(arro[i]==0&&arro[m]==0){continue;}
		if(arro[i]!==0&&arro[m]==0){continue;}
		if(arro[i]!==0&&arro[m]!==0){
			if(arro[i]==arro[m]){
				if((mm[i]==1)&&(mm[m]==1)){
				arro[i]=2*arro[m];
				if(ischeck==="ischeck"){
					score.push(arro[i]);//记分
				}
				arro[m]=0;
				mm[i]=2;
				break;}else{break;}
			}else{
				continue;
			}
		}
	}else{break;}
    }
}


    return arro;

}


//值为零时将颜色改变
function changeColor(){
	var td=document.getElementsByTagName("td");
	for(var i=0;i<td.length;i++){
		var h=td[i].innerText;
		switch(h){
			case "0":
			td[i].style.color="#CCC0B2";
			td[i].style.backgroundColor="#CCC0B2";
			break;
			case "2":
			td[i].style.color="#7C736A";
			td[i].style.backgroundColor="#EEE4DA";
			break;
			case "4":
			td[i].style.color="#7C736A";
			td[i].style.backgroundColor="#ECE0C8";
			break;
			case "8":
			td[i].style.color="#FFF7EB";
			td[i].style.backgroundColor="#F2B179";
			break;
			case "16":
			td[i].style.color="#FFF7EB";
			td[i].style.backgroundColor="#F59563";
			break;
			case "32":
			td[i].style.color="#FFF7EB";
			td[i].style.backgroundColor="#F57C5F";
			break;
			case "64":
			td[i].style.color="#FFF7EB";
			td[i].style.backgroundColor="#F65D3B";
			break;
			case "128":
			td[i].style.color="#FFF7EB";
			td[i].style.backgroundColor="#F6D575";
			break;
			case "256":
			td[i].style.color="#FFF7EB";
			td[i].style.backgroundColor="#EDCC61";
			break;
			case "512":
			td[i].style.color="#FFF7EB";
			td[i].style.backgroundColor="#00A1E1";
			break;
			case "1024":
			td[i].style.color="#FFF7EB";
			td[i].style.backgroundColor="#8EEB1E";
			break;
			case "2048":
			td[i].style.color="#FFF7EB";
			td[i].style.backgroundColor="#EFED1C";
			break;

		}


	}

}
//将数组的值绑定到表格
function addValue (a,asx){
	var td=document.getElementsByTagName("td");
	if(asx=="up"){
		for(var j=0;j<a.length;j++){
			td[0+j].innerText=a[j][0];
			td[4+j].innerText=a[j][1];
			td[8+j].innerText=a[j][2];
			td[12+j].innerText=a[j][3];
		}
	}
	if(asx=="down"){
		for(var k=0;k<a.length;k++){
			td[12+k].innerText=a[k][0];
			td[8+k].innerText=a[k][1];
			td[4+k].innerText=a[k][2];
			td[0+k].innerText=a[k][3];
		}
	}
	if(asx=="left"){
		for(var h=0;h<a.length;h++){
			td[0+4*h].innerText=a[h][0];
			td[1+4*h].innerText=a[h][1];
			td[2+4*h].innerText=a[h][2];
			td[3+4*h].innerText=a[h][3];
		}
	}
	if(asx=="right"){
		for(var p=0;p<a.length;p++){
			td[3+4*p].innerText=a[p][0];
			td[2+4*p].innerText=a[p][1];
			td[1+4*p].innerText=a[p][2];
			td[0+4*p].innerText=a[p][3];
		}
	}


}

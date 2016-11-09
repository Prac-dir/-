$(function(){
	var box=$('.fet2into')[0]
	var imgs=$('.ydban');
	var img1=$('.ydban')[0];
	var cirs=$('.banli')
	var banleft=$('.banleft')[0];
	var banright=$('.banright')[0];
	var t=setInterval(move,2000);
	var n=0;
	var next=0;
	var flag=true;
	function move(){

		if(!flag){
			return
		}
		else {flag=false;
		next=n+1;
		if(n>5){
			next=0
		};
		imgs[next].style.left=740+'px';
		animate(imgs[n],{left:-740},600,Tween.Linear);
		animate(imgs[next],{left:0},600,Tween.Linear,function(){flag=true});
		cirs[n].style.background='#ededed';
		cirs[next].style.background='red';
		n=next;
		}
	};
	box.onmouseover=function(){
		clearInterval(t);
	};
	box.onmouseout=function(){
		
		t=setInterval(move,2000)
	}
	banleft.onclick=function(){
			if(!flag){
				return
			}
			else{flag=false;
			next=n-1;
			n=next+1
			if(next<0){
		      next=imgs.length-1;
		     }
			imgs[next].style.left=-740+'px';
			animate(imgs[n],{left:740},600)
			animate(imgs[next],{left:0},600,Tween.Linear,function(){flag=true})
			cirs[n].style.backgroundColor="#CECECE"
		    cirs[next].style.backgroundColor="#E4066B"
			n=next;
			}
	}
	banright.onclick=function(){
		move()
	}

	for (var j=0;j<cirs.length;j++){
		cirs[j].index=j;
		cirs[j].onclick=function(){
			if(!flag){
				return
			}else{
				flag=false;
			
				if(this.index>n){
					imgs[this.index].style.left=740+'px';
					animate(imgs[n],{left:-740},600);
					animate(imgs[this.index],{left:0},600,Tween.Linear,function(){flag=true});
					this.style.background='red';
					cirs[n].style.background='#ededed'
				}
			if(this.index<n){
			
				flag=false;
					imgs[this.index].style.left=-740+'px';
					animate(imgs[n],{left:740},600);
					animate(imgs[this.index],{left:0},600,Tween.Linear,function(){flag=true});
					this.style.background='red';
					cirs[n].style.background='#ededed'
				}
			}
			n=this.index;next=this.index;
		}
	}
	 var lunbo=getClass("play")[0];
	 var box1=$('.play-box')[0];
		var move1=getClass("move-lunbo")[0];
		var kuang=getClass("kuang")[0]
		var lun=getClass("lunbo")[0]
		var zuo=getClass("zuo")[0]
		var you=getClass("you")[0]
		var kuan=kuang.offsetWidth	
	    var time=setInterval(remove,2000)
	    function remove(){
	    	animate(move1,{left:-kuan},600,function(){
	    		var First=getFirst(move1)
	    		move1.appendChild(First)
	            move1.style.left=0+"px"
	    	})
	    }
	    box1.onmouseover=function(){
	    	clearInterval(time)
	    }
	     box1.onmouseout=function(){
	    	time=setInterval(remove,2000)
	    }
	    you.onclick=function(){
	    	remove();
	    }
	     zuo.onclick=function(){
	    	    var First=getFirst(move1)
	    		var Last=getLast(move1)
				insertBefore(Last,First)
	            move1.style.left=-kuan+"px"
	            animate(move1,{left:0},600)
	    	
	    }

	    var sixA=$('.sixA');
	    var siximg=$('.siximg')
	    for (var g=0;g<siximg.length;g++){
	    	
	    	siximg[g].onmouseover=function(){
	    		animate(this,{right:18},500,Tween.Linear)
	    	}
	    	siximg[g].onmouseout=function(){
	    		animate(this,{right:1},500,Tween.Linear)
	    	}
	    }

    	
var hidden=$('.hidden')
var hida=$('.hida')
var thr=$('.throut')

for(var i=0;i<hida.length;i++){
	hida[i].index=i;
	hover(hida[i],come,go);
	function come(){
		for(var i=0;i<hida.length;i++){
			hida[i].style.background="#e4e4e4";
			hidden[i].style.display='none';
			this.style.background="#FFF";
			this.style.color="blue";
			hidden[this.index].style.display='block';
		}
	}
	function go(){
		for(var j=0;j<4;j++){
			hida[j].style.background="#e4e4e4";
			hida[j].style.color="#727272";
			hidden[j].style.display='none';}}
}
	for(var i=0;i<4;i++){hidden[i].index=i;
		hidden[i].onmouseover=function(){
			this.style.display='block';
			hida[this.index].style.background="#FFF";
			hida[this.index].style.color="blue";
		}
		hidden[i].onmouseout=function(){
			for(var j=0;j<4;j++){
				hida[j].style.background="#e4e4e4";
				this.style.display='none';
				hida[j].style.color="#727272";
			}
		}
	}


var heahA=$('.heahA');
var hheahid=$('.hheahid');
for(var i=0;i<heahA.length;i++){
	heahA[i].index=i;
	hover(heahA[i],function(){
		this.style.background='#fff';
		hheahid[this.index].style.display='block';
	},function(){
		this.style.background='#f6f6f6';
		hheahid[this.index].style.display='none';
	})
}
var headdiv=$('.headdiv');
for(var i=0;i<2;i++){
	hover(headdiv[i],function(){
		this.style.color='#fff';
		this.style.background='blue'
	},function(){
		this.style.color='blue';
		this.style.background='#fff'
	})
}
var nin1boxin=$('.nin1boxin');
var t3=setInterval(gdmove,2000)
var l=0;
var nin15=$('.nin15')[0]
var nin16=$('.nin16')[0]
var nin1=$('.nin1')[0]
function gdmove(){
	if(l>3){
		l=0
	}
	for(var i=0;i<4;i++){
		nin1boxin[i].style.display='none'
	}
	nin1boxin[l].style.display='block'
	l=l+1;
}
nin15.onclick=function(){
	gdmove();
}
nin16.onclick=function(){
	if(l<0){
		l=3
	}
	for(var i=0;i<4;i++){
		nin1boxin[i].style.display='none'
	}
	nin1boxin[l].style.display='block'
	l=l-1;
}
nin1.onmouseover=function(){
	clearInterval(t3)
},
nin1.onmouseout=function(){
	t3=setInterval(gdmove,2000)
}

})
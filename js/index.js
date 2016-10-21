var index={
	init:function(){
		this.tabDiv();
		this.showList();
		this.createTable();
	},
	tabDiv:function(){//切换四个DIV
		$('.tab li').on('click',function(){
			$('.tab li').css({'border-color':'transparent'});
			$(this).css({'border-top':'1.5px solid #cd121b','border-right':'1px solid #ddd','border-left':'1px solid #ccc'});
			$('.tab-div').hide();
			var num=$(this).attr('id').slice(-1);
			$('#tab'+num).show();
			$('.list').hide().css('height','0px');
		});
	},
	showList:function(){//展开菜单栏,不同项展开不同菜单栏
		$('.tab div').on('click',function(){
			Array.prototype.forEach.call(document.getElementsByClassName('tab-div'),function(dom,index,arr){
				if($(dom).css('display')=='block'){
					var num=dom.id.slice(-1);
					if($('#list'+num).css('display')=='none'){
				$('#list'+num).show().animate({'height':'430px'},200);
			}
			else{
				$('#list'+num).hide().css('height','0px');
			}
				}
			});
		});
	},
	createTable:function(){//创建新项目
	    var objIndex=0;
	    $('.list-title li:nth-child(2)').click(function(){
			$('.shadow').show();
			$('.create').show();
		});
		$('.create a').on('click',function(e){
			e.preventDefault();
			$('.create').hide();
			$('.shadow').hide();
		});
		$('.create2 a').on('click',function(e){
			e.preventDefault();
			$('.create2').hide();
			$('.shadow').hide();
		});
		//生成新项目并且在菜单栏里添加
		$('#button').on('click',function(){
			$('.shadow').hide();
			objIndex++;
			$('.create').hide();
			var objStr="<div class='obj' id='obj"+objIndex+"'><div class='obj-top'><div class='obj-title'><span><img src='img/obj.png'>java</span><span><img src='img/banshou.png'>设置</span></div><div class='child'><img src='img/zhen.png'/>java<div class='circle'>java</div></div><div class='add'>+添加任务</div></div><input type='text'/><div class='guanlian'><img src='img/guanlian.png'/>关联项目<ul></ul></div></div>";
			var objStr2="<div class='list-obj' id='lists"+objIndex+"'><img src='img/tuding.png'/>java</div>";
			
			$('#bao1').prepend(objStr);
			var width1=$('#bao1').css('width')
			var width2=$('#bao2').css('width')
			var width3=$('#bao3').css('width')
			var width4=$('#bao4').css('width')
			if(objIndex>3){$('#bao1').css('width',width1.slice(0,-2)+315+'px')}
			$('#list1 .objContent').append(objStr2);
			var objStr21="<div class='obj' id='obj2"+objIndex+"'><div class='obj-top'><div class='obj-title'><span><img src='img/obj.png'>java</span><span><img src='img/banshou.png'>设置</span></div><div class='child'><img src='img/zhen.png'/>java<div class='circle'>java</div></div><div class='add'>+添加任务</div></div><input type='text'/><div class='guanlian'><img src='img/guanlian.png'/>关联项目<ul></ul></div></div>";
			var objStr22="<div class='list-obj' id='lists2"+objIndex+"'><img src='img/tuding.png'/>java</div>";
			var objStr31="<div class='obj' id='obj3"+objIndex+"'><div class='obj-top'><div class='obj-title'><span><img src='img/obj.png'>java</span><span><img src='img/banshou.png'>设置</span></div><div class='child'><img src='img/zhen.png'/>java<div class='circle'>java</div></div><div class='add'>+添加任务</div></div><input type='text'/><div class='guanlian'><img src='img/guanlian.png'/>关联项目<ul></ul></div></div>";
			var objStr41="<div class='obj' id='obj4"+objIndex+"'><div class='obj-top'><div class='obj-title'><span><img src='img/obj.png'>java</span><span><img src='img/banshou.png'>设置</span></div><div class='child'><img src='img/zhen.png'/>java<div class='circle'>java</div></div><div class='add'>+添加任务</div></div><input type='text'/><div class='guanlian'><img src='img/guanlian.png'/>关联项目<ul></ul></div></div>";
			var objStr32="<div class='list-obj' id='lists3"+objIndex+"'><img src='img/tuding.png'/>java</div>";
			var objStr42="<div class='list-obj' id='lists4"+objIndex+"'><img src='img/tuding.png'/>java</div>";
			if($('#select1').val()==2){
				$('#bao2').prepend(objStr21);
				if(objIndex>3){$('#bao2').css('width',width2.slice(0,-2)+315+'px')}
			    $('#list2 .objContent').append(objStr22);
			}
			if($('#select1').val()==3){
				$('#bao3').prepend(objStr31);
				if(objIndex>3){$('#bao3').css('width',width3.slice(0,-2)+315+'px')}
			    $('#list3 .objContent').append(objStr32);
			}
			if($('#select1').val()==4){
				$('#bao4').prepend(objStr41);
				if(objIndex>3){$('#bao4').css('width',width4.slice(0,-2)+315+'px')}
			    $('#list4 .objContent').append(objStr42);
			}
			
			//创建关联项目
			Array.prototype.forEach.call($('#select4').find('option:selected'),function(dom,index,arr){
				    var str='';
					str+="<li><span></span>"+dom.innerHTML+"</li>"
				    $('#bao1 #obj'+objIndex+' .guanlian ul').append(str);
					//2
					if($('#select1').val()==2){
				     $('#bao2 #obj2'+objIndex+' .guanlian ul').append(str);
					}
					//3
					if($('#select1').val()==3){
				     $('#bao3 #obj3'+objIndex+' .guanlian ul').append(str);
					}
					//4
					if($('#select1').val()==4){
				     $('#bao4 #obj4'+objIndex+' .guanlian ul').append(str);
					}
			});
			
		});
		$('#button2').on('click',function(){
			$('.create2').hide();
			$('.shadow').hide();
		});
		//生成子事件
		$('body').on('click','.add',function(){
			//var id=$(this).parent().attr('id').slice(-1);
			$("<div class='child'><img src='img/zhen.png'/>java<div class='circle'>java</div></div>").insertBefore($(this));
			
		});
		//点击菜单切换项目
		$('body').on('click','#list1 .list-obj',function(){
		    var index=$(this).parent().prev().parent().attr('id').slice(-1);
			$('#bao'+index).prepend($('#obj'+$(this).attr('id').slice(-1)));	
		});
		$('body').on('click','#list2 .list-obj',function(){
		    var index=$(this).parent().prev().parent().attr('id').slice(-1);
			$('#bao'+index).prepend($('#obj2'+$(this).attr('id').slice(-1)));	
		});
		$('body').on('click','#list3 .list-obj',function(){
		    var index=$(this).parent().prev().parent().attr('id').slice(-1);
			$('#bao'+index).prepend($('#obj3'+$(this).attr('id').slice(-1)));	
		});
		$('body').on('click','#list4 .list-obj',function(){
		    var index=$(this).parent().prev().parent().attr('id').slice(-1);
			$('#bao'+index).prepend($('#obj4'+$(this).attr('id').slice(-1)));	
		});
		//设置
		$('body').on('click','.obj-title span:nth-child(2)',function(){
			$('.create2').show();
			$('.shadow').show();
		});
		$('.update span').on('click',function(){
			$('.shadow').hide();
			$('.update').hide();
		});
		$('body').on('click','.child',function(){
			$('.update').show();
			$('.shadow').show();
		});
		$('.update-center div').on('click',function(){
			$('.update').hide();
			$('.shadow').hide();
		});	
	}
};
index.init();
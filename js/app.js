/**
 * el：element 是html根元素
 * data:数据存储
 * methods:用于存储各种方法
 *
 */
new Vue({
	el:'#vue-app',
	data:{
		message:"hello world",
		name:"Ms Yang",
		job:"web开发",
		website:"http://www.thenewstep.com",
		websiteTag:'<a href="http://www.thenewstep.com">web网站</a>',
		age:30,
		x:0,
		y:0,
		changeColor:false,
		changeLength:false
	},
	methods:{
		greet:function(time){
			//代码块
			return 'good '+time+" "+this.name+"!"
		},
		add:function(inc){
			this.age +=inc;
		},
		substract:function(desc){
			this.age -=desc;
		},
		updateXY:function(event){
			console.log(event);
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		change:function(){
			this.changeColor  = true;
		}
	},
	computed:{
		add:function(){
			return ""
		}
	}
})

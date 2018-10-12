(function(window){
    function Mquery(obj){
        // 空数组，储存元素
        this.elements = [];
        //console.log(typeof obj)
        switch(typeof obj){
            // 传入函数，调用domReady（document.ready）
            case 'function':
            domReady(obj);
            break;
            // 字符串
            case 'string':
            // 判断第一个符号为<，则创建元素
            if( obj.indexOf('<')!=-1 ){
                // >号下标
                var tail = obj.indexOf('>')
                return document.createElement(obj.substr(1,tail-1));
            }
            // 当选择器
            else{
                this.elements = sizzle(obj)
            }
            break;
            // 传入对象，用于当传入this
            case 'object':
                this.elements.push(obj);
                break;
        }
    };
    // Dom加载完毕事件，ie6,7不支持，类似document.ready
    function domReady(fn){
        document.addEventListener('DOMContentLoaded',fn,false)
    }
    // 选择器---
    function sizzle(str){
        var aChild = [];
        switch(str.charAt(0)){
            //ID
            case '#':
            var objEle = document.getElementById(str.substr(1));
            aChild.push(objEle);
            break;
            //ClassName
            case '.':
            var eleArr = document.getElementsByClassName(str.substr(1));
            for(var i = 0;i<eleArr.length;i++){
                aChild.push(eleArr[i])
            }
            break;
            // 其他，比如传入div p
            default:
            var dafArr=  document.getElementsByTagName(str);
            for(var i = 0;i<dafArr.length;i++){
                aChild.push(dafArr[i])
            }
            break;
            //复杂省略
        }
        return aChild;
    }
    //定义方法 ------------
    var ev_arr="click dblclick mousedown mouseup mouseover mousemove mouseout mouseleave mouseenter blur focus change onload resize scroll keyup keydown keypress".split(' ');
    for( var j = 0; j < ev_arr.length;j++){
        // index形参接受j,给Mquey构造函数添加原型方法。
        (function(index){
            Mquery.prototype[ev_arr[j]] = function(fn){
                this.bindFn(ev_arr[index],fn);
                return this;
            }
        })(j)
        // 第二种
        /*
        Mquery.prototype[ev_arr[j]] = function(fn){
            for( var j = 0; j < this.elements.length; j++){
                this.elements[j].addEventListener(ev_arr[j],fn,false)
            }
            return this
        }
        */
    }
    // ---------------------定义其他方法
    Mquery.prototype.bindFn = function(ev,fn){
        for( var j = 0;j<this.elements.length;j++){
            this.elements[j].addEventListener(ev,fn,false)
        };
    }
    //hover
    Mquery.prototype.hover = function(over_fn,out_fn){
        this.mouseenter(over_fn);
        this.mouseleave(out_fn);
        return this;
    }
    // html
    Mquery.prototype.html = function(str){
        for(var i=0;i<this.elements.length;i++){
            if(arguments.length==0){
                this.elements[i].innerHTML = ''
            }
            else{
                this.elements[i].innerHTML = str;
            }
        }
        return this
    }
    // css 忽略width height需要+px的
    Mquery.prototype.css = function(obj){
        /*
        Object.keys(obj).forEach(function(key,index,val){  
            console.log(key,index,val)          
        });
        */
        for(var i=0;i<this.elements.length;i++){
            if(arguments.length==0){
                //return getComputedStyle(this.elements[i],null).height;
                return;
            }
            else{
                for( var key in obj){
                    //style中括号
                    this.elements[i].style[key] =  obj[key]
                }          
            }
        }
        return this
    };
    //对象属性，速度，回调
    Mquery.prototype.animate = function(modeJson,speed,fn){
        // 元素，方便操作this
        var objs=this.elements;
		for(var k=0; k<objs.length; k++){	
            //默认速度
			var def_speed={fast:400,normal:800,slow:1600};
			//判断速度的默认值
			if(speed){
                //传入的是字符串,slow,fast
				if(typeof speed=="string"){
					speed=def_speed[speed];
                }
                //传入数字
                if(typeof speed=='number'){
                    speed=speed;
                }
            }
            else{
				speed=def_speed.normal;
            };
			// 读取初始值
            var m_style=getComputedStyle(objs[k],null);
			var start={};//变化的属性
			var dis={};//传入属性需要变化到的值 减去 本身的值，运动过程
            var count=parseInt(speed/30);//通过时间,计算步数,500/30 = 53
			var step={};
            // 动画属性
			for(var key in modeJson){
				start[key]=parseInt(m_style[key]);//width:50
				dis[key]=modeJson[key]-start[key];//width:500-50
                step[key]=dis[key]/count;//一步走多少,450/53 = 8.xxx

            };
            //定时器控制量
			var i=0;
            //用对象的自定义属性作为定时的变量
            clearInterval(objs[k].timer);
            //定时器中，this指向Window,用es6可直接使用this,
			this.elements[k].timer=setInterval(function(){
                //console.log(this.elements[k].bind(this))
				i++;
				for(var key in modeJson){
                    //style[key]属性，= 本身的属性 + 每一步移动值
					this.elements[k].style[key]=start[key]+step[key]*i+"px";
				};
				if(i==count){
                    clearInterval(this.elements[k].timer);
                    //执行回调
					fn && fn();
				};
            }.bind(this),30);
            // bind(this)让this指向本身
			return this;
		}
    }
    // 抛给全局
    function $(obj){
        return new Mquery(obj);
    }
    //window.Mquery = Mquery;
    window.$ = $;
})(window)
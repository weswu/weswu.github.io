(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4834"],{9117:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{"grid-list-lg":"","pa-0":""}},[e("v-layout",{attrs:{wrap:""}},[e("v-flex",{attrs:{xs12:"",lg6:""}},[e("v-basic-card",{attrs:{title:"Bar Charts - Base","toolbar-height":"56"}},[e("template",{slot:"card-content"},[e("bar-base-chart")],1)],2)],1),e("v-flex",{attrs:{xs12:"",lg6:""}},[e("v-basic-card",{attrs:{title:"Bar Charts - Waterfall","toolbar-height":"56"}},[e("template",{slot:"card-content"},[e("bar-waterfall-chart")],1)],2)],1),e("v-flex",{attrs:{xs12:"",lg6:""}},[e("v-basic-card",{attrs:{title:"Bar Charts - Shadow","toolbar-height":"56"}},[e("template",{slot:"card-content"},[e("bar-shadow-chart")],1)],2)],1),e("v-flex",{attrs:{xs12:"",lg6:""}},[e("v-basic-card",{attrs:{title:"Bar Charts - Plot","toolbar-height":"56"}},[e("template",{slot:"card-content"},[e("bar-plot-chart")],1)],2)],1)],1)],1)},o=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-chart",{staticStyle:{width:"100%"},attrs:{options:t.chartOption,autoresize:""}})},n=[],l={name:"BaseBarChart",data:function(){return{chartOption:{}}},methods:{buildChartOption:function(){var t=[160,260,180,100,140,120,200],a={grid:{right:"3%",bottom:"4%",left:"3%",containLabel:!0},title:{text:"Bar - Base"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:t,type:"bar"}]};return a}},created:function(){this.chartOption=this.buildChartOption()}},s=l,c=e("5d22"),h=Object(c["a"])(s,i,n,!1,null,null,null),u=h.exports,d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-chart",{staticStyle:{width:"100%"},attrs:{options:t.chartOption,autoresize:""}})},p=[],b={name:"PlotBarChart",data:function(){return{chartOption:{}}},methods:{renderPlotItem:function(t,a){var e=.85*a.size([0,0])[0],r=a.coord([a.value(0),a.value(1)]);return{type:"line",shape:{x1:r[0]-e/2,x2:r[0]+e/2,y1:r[1],y2:r[1]},style:a.style({fill:null,stroke:a.visual("color"),lineWidth:2})}},buildChartOption:function(){for(var t=[10,62,200,390,460,320,220],a=[],e=0,r=t.length;e<r;e+=1)a.push(t[e]+20);var o={color:["#3398DB"],grid:{left:"3%",right:"3%",bottom:"3%",containLabel:!0},title:{text:"Bar - Plot"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"访问人数",type:"bar",barWidth:"60%",data:t},{name:"Plot",type:"custom",renderItem:this.renderPlotItem,encode:{x:0,y:1},data:a}]};return o}},created:function(){this.chartOption=this.buildChartOption()}},m=b,f=Object(c["a"])(m,d,p,!1,null,null,null),x=f.exports,g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-chart",{staticStyle:{width:"100%"},attrs:{options:t.chartOption,autoresize:""}})},y=[],v={name:"WaterfallBarChart",data:function(){return{chartOption:{}}},methods:{buildChartOption:function(){for(var t=[400,700,1245,1230,1376,976,1609,1998,1856,1740,1292],a=[600,345,393,"-","-",290,578,286,"-","-","-"],e=["-","-","-",290,170,"-","-","-",235,560,220],r=[],o=1;o<=11;o+=1)r.push("11月".concat(o,"日"));var i={title:{text:"Bar - Waterfall"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){var a="-"!==t[1].value?t[1]:t[2];return"".concat(a.name,"<br/>").concat(a.seriesName,":").concat(a.value)}},legend:{data:["Alpha","Beta"]},grid:{left:"3%",right:"3%",bottom:"3%",containLabel:!0},xAxis:{type:"category",splitLine:{show:!1},data:r},yAxis:{type:"value"},series:[{name:"Assist",type:"bar",stack:"sum",itemStyle:{normal:{barBorderColor:"rgba(0, 0, 0, 0)",color:"rgba(0, 0, 0, 0)"},emphasis:{barBorderColor:"rgba(0, 0, 0, 0)",color:"rgba(0, 0, 0, 0)"}},data:t},{name:"Alpha",type:"bar",stack:"sum",label:{normal:{show:!0,position:"top"}},data:a},{name:"Beta",type:"bar",stack:"sum",label:{normal:{show:!0,position:"bottom"}},data:e}]};return i}},created:function(){this.chartOption=this.buildChartOption()}},w=v,B=Object(c["a"])(w,g,y,!1,null,null,null),O=B.exports,C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-chart",{staticStyle:{width:"100%"},attrs:{options:t.chartOption,autoresize:""}})},S=[],A=e("43a0"),L=e.n(A),F={name:"ShadowBarChart",data:function(){return{chartOption:{}}},methods:{buildChartOption:function(){for(var t=[70,71,72.6,73,79,75,77,80,81,79,80,83],a=[],e=[],r=100,o=1;o<=12;o+=1)a.push(r),e.push("".concat(o," 月"));var i={backgroundColor:"#394056",color:["#3398DB"],grid:{right:"3%",bottom:"4%",left:"3%",containLabel:!0},title:{text:"Bar - Shadow",textStyle:{fontWeight:"normal",fontSize:20,color:"#F1F1F3"}},tooltip:{trigger:"axis",axisPointer:{type:"line",lineStyle:{opacity:0}},formatter:function(t){var a=t[0];return"".concat(a.seriesName,"：").concat(a.value,"%")}},legend:{show:!1,data:["A"]},xAxis:[{type:"category",gridIndex:0,data:e,axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:"#455A64"}},axisLabel:{show:!0,color:"rgb(170, 170, 170)"}}],yAxis:[{type:"value",gridIndex:0,splitLine:{show:!1},axisTick:{show:!1},min:0,max:100,axisLine:{lineStyle:{color:"#455A64"}},axisLabel:{color:"rgb(170, 170, 170)",formatter:"{value} %"}}],series:[{name:"A",type:"bar",itemStyle:{normal:{barBorderRadius:30,color:new L.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#18FFFF"},{offset:.5,color:"#29B6F6"},{offset:1,color:"#2962FF"}])}},data:t},{name:"Shadow",type:"bar",barWidth:"40%",barGap:"-100%",data:a,itemStyle:{normal:{color:"rgba(255, 255, 255, 0.1)"}}}]};return i}},created:function(){this.chartOption=this.buildChartOption()}},W=F,k=Object(c["a"])(W,C,S,!1,null,null,null),P=k.exports,_={name:"VBarIndex",components:{BarBaseChart:u,BarPlotChart:x,BarWaterfallChart:O,BarShadowChart:P}},T=_,z=Object(c["a"])(T,r,o,!1,null,null,null);a["default"]=z.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1784a185"],{3636:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col w-1/2 md:w-1/3 xl:w-1/6"},[i("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"EyeIcon",statistic:"36.9k",statisticTitle:"Views"}})],1),i("div",{staticClass:"vx-col w-1/2 md:w-1/3 xl:w-1/6"},[i("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"MessageSquareIcon",statisticTitle:"Comments",statistic:"12k",color:"success"}})],1),i("div",{staticClass:"vx-col w-1/2 md:w-1/3 xl:w-1/6"},[i("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"ShoppingBagIcon",statistic:"978",statisticTitle:"Orders",color:"warning"}})],1),i("div",{staticClass:"vx-col w-1/2 md:w-1/3 xl:w-1/6"},[i("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"HeartIcon",statistic:"26.8k",statisticTitle:"Favorited",color:"danger"}})],1),i("div",{staticClass:"vx-col w-1/2 md:w-1/3 xl:w-1/6"},[i("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"SmileIcon",statistic:"689",statisticTitle:"Reviews",color:"success"}})],1),i("div",{staticClass:"vx-col w-1/2 md:w-1/3 xl:w-1/6"},[i("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"TruckIcon",statistic:"2",statisticTitle:"Returns",color:"warning"}})],1)]),i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4"},[i("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"CpuIcon","icon-right":"",statistic:"86%",statisticTitle:"CPU Usage"}})],1),i("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4"},[i("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"ServerIcon","icon-right":"",statistic:"1.2gb",statisticTitle:"Memory Usage",color:"success"}})],1),i("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4"},[i("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"ActivityIcon","icon-right":"",statistic:"0.1%",statisticTitle:"Downtime Ratio",color:"danger"}})],1),i("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4"},[i("statistics-card-line",{staticClass:"mb-base",attrs:{hideChart:"",icon:"AlertOctagonIcon","icon-right":"",statistic:"13",statisticTitle:"Issues Found",color:"warning"}})],1)]),i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4"},[t.subscribersGained.analyticsData?i("statistics-card-line",{staticClass:"mb-base",attrs:{icon:"UsersIcon",statistic:t._f("k_formatter")(t.subscribersGained.analyticsData.subscribers),statisticTitle:"Subscribers Gained",chartData:t.subscribersGained.series,type:"area"}}):t._e()],1),i("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4"},[t.revenueGenerated.analyticsData?i("statistics-card-line",{staticClass:"mb-base",attrs:{icon:"DollarSignIcon",statistic:t._f("k_formatter")(t.revenueGenerated.analyticsData.revenue),statisticTitle:"Revenue Generated",chartData:t.revenueGenerated.series,color:"success",type:"area"}}):t._e()],1),i("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4"},[t.quarterlySales.analyticsData?i("statistics-card-line",{staticClass:"mb-base",attrs:{icon:"ShoppingCartIcon",statistic:t.quarterlySales.analyticsData.sales,statisticTitle:"Quarterly Sales",chartData:t.quarterlySales.series,color:"danger",type:"area"}}):t._e()],1),i("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4"},[t.ordersRecevied.analyticsData?i("statistics-card-line",{staticClass:"mb-base",attrs:{icon:"ShoppingBagIcon",statistic:t._f("k_formatter")(t.ordersRecevied.analyticsData.orders),statisticTitle:"Orders Received",chartData:t.ordersRecevied.series,color:"warning",type:"area"}}):t._e()],1)]),i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3"},[i("statistics-card-line",{staticClass:"md:mb-0 mb-base",attrs:{icon:"MonitorIcon","icon-right":"",statistic:"78.9k",statisticTitle:"Site Traffic",chartData:t.siteTraffic.series}})],1),i("div",{staticClass:"vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3"},[i("statistics-card-line",{staticClass:"md:mb-0 mb-base",attrs:{icon:"UserCheckIcon","icon-right":"",statistic:"659.8k",statisticTitle:"Active Users",chartData:t.activeUsers.series,color:"success"}})],1),i("div",{staticClass:"vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3"},[i("statistics-card-line",{attrs:{icon:"MailIcon","icon-right":"",statistic:"28.7k",statisticTitle:"Newsletter",chartData:t.newsletter.series,color:"warning"}})],1)])])},e=[],c=i("43ca"),r={components:{StatisticsCardLine:c["a"]},data:function(){return{subscribersGained:{},revenueGenerated:{},quarterlySales:{},ordersRecevied:{},siteTraffic:{},activeUsers:{},newsletter:{}}},created:function(){var t=this;this.$http.get("/api/card/card-statistics/subscribers").then((function(s){t.subscribersGained=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/revenue").then((function(s){t.revenueGenerated=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/sales").then((function(s){t.quarterlySales=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/orders").then((function(s){t.ordersRecevied=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/site-traffic").then((function(s){t.siteTraffic=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/active-users").then((function(s){t.activeUsers=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/newsletter").then((function(s){t.newsletter=s.data})).catch((function(t){console.log(t)}))}},o=r,l=i("2877"),n=Object(l["a"])(o,a,e,!1,null,null,null);s["default"]=n.exports},"36bd":function(t,s,i){"use strict";var a=i("4bf8"),e=i("77f1"),c=i("9def");t.exports=function(t){var s=a(this),i=c(s.length),r=arguments.length,o=e(r>1?arguments[1]:void 0,i),l=r>2?arguments[2]:void 0,n=void 0===l?i:e(l,i);while(n>o)s[o++]=t;return s}},"43ca":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("vx-card",t._g({staticClass:"overflow-hidden"},t.$listeners),[i("div",{attrs:{slot:"no-body"},slot:"no-body"},[i("div",{staticClass:"p-6",class:{"flex justify-between flex-row-reverse items-center":t.iconRight,"text-center":!t.iconRight&&t.hideChart,"pb-0":!t.hideChart}},[i("feather-icon",{staticClass:"p-3 inline-flex rounded-full",class:["text-"+t.color,{"mb-4":!t.iconRight}],style:{background:"rgba(var(--vs-"+t.color+"),.15)"},attrs:{icon:t.icon}}),i("div",{staticClass:"truncate"},[i("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t.statistic))]),i("span",[t._v(t._s(t.statisticTitle))])])],1),t.hideChart?t._e():i("div",{staticClass:"line-area-chart"},[i("vue-apex-charts",{ref:"apexChart",attrs:{type:t.type,height:"100",width:"100%",options:t.chartOptions,series:t.chartData}})],1)])])},e=[],c=(i("6c7b"),i("6b54"),i("28a5"),i("c5f6"),i("1321")),r=i.n(c),o={areaChartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.5,opacityTo:.2,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}},lineChartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},l=i("ee53"),n={props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String},chartData:{},color:{type:String,default:"primary"},colorTo:{type:String},type:{type:String,default:"line"},iconRight:{type:Boolean,default:!1},hideChart:{type:Boolean,default:!1}},data:function(){return{chartOptions:null}},watch:{themePrimaryColor:function(){this.$refs.apexChart.updateOptions({theme:{monochrome:{color:this.getHex(this.color)}}})}},computed:{themePrimaryColor:function(){return this.$store.state.themePrimaryColor}},methods:{getHex:function(t){if(l["a"].isColor(t)){var s=window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(t));return s=s.split(","),"#".concat(((1<<24)+(Number(s[0])<<16)+(Number(s[1])<<8)+Number(s[2])).toString(16).slice(1))}return t},gradientToColor:function(t){var s={primary:"#A9A2F6",success:"#55DD92",warning:"#ffc085",danger:"#F97794"};return s[t]?s[t]:s["primary"]}},components:{VueApexCharts:r.a},created:function(){"area"===this.type?(this.chartOptions=Object.assign({},o.areaChartOptions),this.chartOptions["theme"]={monochrome:{enabled:!0,color:this.getHex(this.color),shadeTo:"light",shadeIntensity:.65}}):"line"===this.type&&(this.chartOptions=JSON.parse(JSON.stringify(o.lineChartOptions)),this.chartOptions.fill.gradient.gradientToColors=[this.gradientToColor(this.colorTo||this.color)],this.chartOptions.colors=[this.getHex(this.color)])}},d=n,h=i("2877"),u=Object(h["a"])(d,a,e,!1,null,null,null);s["a"]=u.exports},"6c7b":function(t,s,i){var a=i("5ca1");a(a.P,"Array",{fill:i("36bd")}),i("9c6c")("fill")}}]);
//# sourceMappingURL=chunk-1784a185.225c7c3d.js.map
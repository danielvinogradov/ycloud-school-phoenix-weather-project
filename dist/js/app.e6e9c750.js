(function(e){function t(t){for(var n,s,o=t[0],c=t[1],i=t[2],p=0,f=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(u.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},u=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var l=c;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},3721:function(e,t,r){},"4b76":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",attrs:{id:"app"}},[r("the-header"),r("the-search"),e.hasWeatherData?r("the-result",{attrs:{"city-name":e.returnWeatherData.name,"country-code":e.returnWeatherData.sys.country,"weather-desc":e.returnWeatherData.weather[0].description,"current-temp":e.returnWeatherData.main.temp,"feels-like":e.returnWeatherData.main.feels_like,"max-temp":e.returnWeatherData.main.temp_max,"min-temp":e.returnWeatherData.main.temp_min,"current-humidity":e.returnWeatherData.main.humidity,"current-wind-speed":e.returnWeatherData.wind.speed}}):e._e(),r("the-error"),r("the-footer")],1)},u=[],s=r("5530"),o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header"},[r("h1",{staticClass:"header__name"},[e._v("Smart Weather App")]),r("p",{staticClass:"header__desc"},[e._v("Получите информацию о текущей погоде в вашем городе.")])])}],i={name:"TheLogo"},l=i,p=(r("b431"),r("2877")),f=Object(p["a"])(l,o,c,!1,null,"555ab24c",null),h=f.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"search",on:{submit:function(t){return t.preventDefault(),e.getWeatherData(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.cityName,expression:"cityName"}],ref:"cityInput",staticClass:"search__input",attrs:{placeholder:"Введите ваш город"},domProps:{value:e.cityName},on:{input:function(t){t.target.composing||(e.cityName=t.target.value)}}}),r("button",{staticClass:"search__button"},[e._v("Подсказать")]),r("button",{staticClass:"search__reset",attrs:{type:"reset"},on:{click:e.resetInfo}},[e._v("X")])])},d=[],_={name:"TheSearch",data:function(){return{cityName:null}},methods:{getWeatherData:function(){this.$store.dispatch("fetchWeatherData",this.cityName)},resetInfo:function(){this.$store.dispatch("resetAllData"),this.$refs.cityInput.focus()}}},b=_,v=(r("bbb2"),Object(p["a"])(b,m,d,!1,null,"0e81689a",null)),y=v.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",{staticClass:"result"},[e.cityName&&e.countryCode?r("p",[e._v("Мы определили ваш город как "),r("span",{staticClass:"bold"},[e._v(e._s(e.cityName)+", "+e._s(e.countryCode))])]):e._e(),e.weatherDesc?r("p",[e._v("Сейчас на улице "+e._s(e.weatherDesc)+".")]):e._e(),e.currentTemp?r("p",[e._v("Текущая температура составляет "+e._s(e.currentTemp)+"℃.")]):e._e(),e.feelsLike?r("p",[e._v("Ощущается как "+e._s(e.feelsLike)+".")]):e._e(),e.maxTemp&&e.minTemp?r("p",[e._v("Максимум составит "+e._s(e.maxTemp)+"℃, а минимум — "+e._s(e.minTemp)+"℃.")]):e._e(),e.currentHumidity?r("p",[e._v("Текущая влажность - "+e._s(e.currentHumidity)+"%.")]):e._e(),e.currentWindSpeed?r("p",[e._v("Ветер "+e._s(e.currentWindSpeed)+" м/сек.")]):e._e()])},T=[],x=(r("a9e3"),{name:"TheResult",props:{cityName:{type:String,default:null},countryCode:{type:String,default:null},weatherDesc:{type:String,default:null},currentTemp:{type:Number,default:null},feelsLike:{type:Number,default:null},maxTemp:{type:Number,default:null},minTemp:{type:Number,default:null},currentHumidity:{type:Number,default:null},currentWindSpeed:{type:Number,default:null}}}),w=x,g=(r("bd6a"),Object(p["a"])(w,D,T,!1,null,"4704d586",null)),W=g.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.hasErrors?r("section",{staticClass:"error"},[r("p",{staticClass:"error__text"},[e._v("Что-то пошло не так. "),e.returnResponseStatusCode?r("span",[e._v("Код ошибки - "+e._s(e.returnResponseStatusCode)+".")]):e._e(),e._v(" "),e.returnErrorText?r("span",[e._v("Текст ошибки: "+e._s(e.returnErrorText))]):e._e()])]):e._e()},C=[],E=r("2f62"),O={name:"TheError",computed:Object(E["b"])(["hasErrors","returnResponseStatusCode","returnErrorText"])},j=O,N=(r("8c1c"),Object(p["a"])(j,S,C,!1,null,"4a37e1be",null)),k=N.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[r("p",[e._v("Smart Weather App")]),r("p",[e._v("Мы используем "),r("a",{attrs:{href:"https://openweathermap.org/"}},[e._v("OpenWeather")])])])}],R={name:"TheFooter"},A=R,I=(r("b0f1"),Object(p["a"])(A,$,P,!1,null,"4cd3e33c",null)),H=I.exports,L={name:"App",components:{TheHeader:h,TheSearch:y,TheResult:W,TheError:k,TheFooter:H},computed:Object(s["a"])({},Object(E["b"])(["hasWeatherData","returnWeatherData"]))},M=L,F=(r("7c55"),Object(p["a"])(M,a,u,!1,null,null,null)),J=F.exports,q=(r("99af"),r("b0c0"),r("d3b7"),r("96cf"),r("1da1"));n["a"].use(E["a"]);var G=new E["a"].Store({state:{server:{host:"http://api.openweathermap.org/data/2.5/weather",token:"ea37b0aa5f7e9cdb25b7d0d0787c5a89"},weatherData:null,responseStatusCode:null,errorText:null},getters:{hasWeatherData:function(e){return!!e.weatherData&&200===e.weatherData.cod},returnWeatherData:function(e){return e.weatherData},returnResponseStatusCode:function(e){return e.responseStatusCode},returnErrorText:function(e){return e.errorText},hasErrors:function(e){return!!e.errorText||200!==e.responseStatusCode&&!!e.responseStatusCode}},mutations:{updateWeatherData:function(e,t){e.weatherData=t},updateResponseStatusCode:function(e,t){e.responseStatusCode=t},updateErrorText:function(e,t){e.errorText=t},resetErrors:function(e){e.errorText=null,e.responseStatusCode=null},resetWeatherData:function(e){e.weatherData=null}},actions:{fetchWeatherData:function(){var e=Object(q["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.commit("resetErrors"),t.commit("resetWeatherData"),!(r.length<2)){e.next=5;break}return t.commit("updateErrorText","Необходимо ввести город (длина названия не может быть меньше 2 букв)."),e.abrupt("return");case 5:return e.next=7,fetch("".concat(t.state.server.host,"?q=").concat(r,"&units=metric&lang=ru&APPID=").concat(t.state.server.token),{method:"GET"}).then((function(e){return e.json()})).then((function(e){t.commit("updateWeatherData",e),t.commit("updateResponseStatusCode",e.cod)})).catch((function(e){return t.commit("updateErrorText","".concat(e.name," ").concat(e.message))}));case 7:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),resetAllData:function(e){e.commit("resetErrors"),e.commit("resetWeatherData")}}});n["a"].config.productionTip=!1,new n["a"]({store:G,render:function(e){return e(J)}}).$mount("#app")},"5ba8":function(e,t,r){},"7c55":function(e,t,r){"use strict";var n=r("5ba8"),a=r.n(n);a.a},"8c1c":function(e,t,r){"use strict";var n=r("dab1"),a=r.n(n);a.a},b00b:function(e,t,r){},b0f1:function(e,t,r){"use strict";var n=r("3721"),a=r.n(n);a.a},b431:function(e,t,r){"use strict";var n=r("b00b"),a=r.n(n);a.a},bbb2:function(e,t,r){"use strict";var n=r("f83f"),a=r.n(n);a.a},bd6a:function(e,t,r){"use strict";var n=r("4b76"),a=r.n(n);a.a},dab1:function(e,t,r){},f83f:function(e,t,r){}});
//# sourceMappingURL=app.e6e9c750.js.map
parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {var l=document.getElementById("main-progress-bar"),m=document.querySelectorAll(".is-primary"),c=document.getElementById("gpa-chart").getContext("2d"),n=document.documentElement.scrollHeight,o=window.innerHeight,a=[8.14,8.23,9.14,8.58,8.41,8.65],d=["I","II","III","IV","V","VI"],e=function(r){var a=0,$=[];return r.forEach(function(r,e){a+=r,$.push(parseFloat((a/(e+1)).toFixed(2),10))}),$},f=e(a),g=null,h={type:"line",data:{labels:d,datasets:[{label:"GPA",data:a,backgroundColor:"rgba(74,20,140,0.2)",borderColor:"rgba(18,0,94,1)"},{label:"CGPA",data:f,backgroundColor:"rgba(255,23,68,0.4)",borderColor:"rgba(255,23,68,1)"}]},options:{legend:{display:!0,position:"bottom"},layout:{padding:30},scales:{yAxes:[{ticks:{}}]}}},b=!1,i=function(){g=new Chart(c,h)},j=function(){g.destroy()},k=function(){b?j():i(),b=!b};window.onload=function(){AOS.init(),Chart.defaults.global.animation.easing="easeInOutSine",Chart.defaults.global.animation.duration=1500,document.addEventListener("aos:in:animate-gpa-chart",k)};return{"A2T1":{}};});
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const u=()=>{$("#app").load("./views/view.html",function(){document.querySelector(".h1-zonename").innerHTML="HOME"})},l=()=>{$("#app").load("./views/view.html",function(){fetch("https://timezoneapi.io/api/timezone/?Asia/Seoul&token=atIvwWMlqzuzxECBcmGR").then(e=>e.json()).then(e=>n(e)).catch(e=>console.log("Solicitud Fallida",e));const n=({data:e})=>{document.querySelector(".h1-zonename").innerHTML=e.timezone.capital,document.querySelector("#countryname").innerHTML=e.timezone.country_name,document.querySelector("#currency").innerHTML=e.timezone.currency_name,document.querySelector("#timeday").innerHTML=e.datetime.timeday_gen,document.querySelector("#datetime").innerHTML=`${e.datetime.date_time_txt} ${e.datetime.offset_tzfull}`,document.querySelector("#offset").innerHTML=e.datetime.offset_gmt};document.querySelector(".img-flag").setAttribute("src","https://countryflagsapi.com/svg/kr"),document.querySelector(".source").src="./videos/seoul.mp4"})},d=()=>{$("#app").load("./views/view.html",function(){fetch("https://timezoneapi.io/api/timezone/?Asia/Dubai&token=atIvwWMlqzuzxECBcmGR").then(e=>e.json()).then(e=>n(e)).catch(e=>console.log("Solicitud Fallida",e));const n=({data:e})=>{document.querySelector(".h1-zonename").innerHTML=e.timezone.capital,document.querySelector("#countryname").innerHTML=e.timezone.country_name,document.querySelector("#currency").innerHTML=e.timezone.currency_name,document.querySelector("#timeday").innerHTML=e.datetime.timeday_gen,document.querySelector("#datetime").innerHTML=e.datetime.date_time_txt,document.querySelector("#offset").innerHTML=e.datetime.offset_gmt};document.querySelector(".img-flag").setAttribute("src","https://countryflagsapi.com/svg/ae"),document.querySelector(".source").src="./videos/dubai1.mp4"})},y=()=>{$("#app").load("./views/view.html",function(){fetch("https://timezoneapi.io/api/timezone/?America/Monterrey&token=atIvwWMlqzuzxECBcmGR").then(e=>e.json()).then(e=>n(e)).catch(e=>console.log("Solicitud Fallida",e));const n=({data:e})=>{document.querySelector(".h1-zonename").innerHTML="Monterrey",document.querySelector("#countryname").innerHTML=e.timezone.country_name,document.querySelector("#currency").innerHTML=e.timezone.currency_name,document.querySelector("#timeday").innerHTML=e.datetime.timeday_gen,document.querySelector("#datetime").innerHTML=`${e.datetime.date_time_txt} ${e.datetime.offset_tzfull}`,document.querySelector("#offset").innerHTML=e.datetime.offset_gmt};document.querySelector(".img-flag").setAttribute("src","https://countryflagsapi.com/svg/mx"),document.querySelector(".source").src="./videos/monterrey.mp4"})},f=()=>{$("#app").load("./views/404.html")},m=n=>{switch(n){case"":return $(document).ready(u());case"#/home":return $(document).ready(u());case"#/seoul":return $(document).ready(l());case"#/dubai":return $(document).ready(d());case"#/monterrey":return $(document).ready(y());default:return $(document).ready(f())}};var s=document.getElementsByClassName("btn");for(var c=0;c<s.length;c++)s[c].addEventListener("click",function(){var n=document.getElementsByClassName("active");n[0].className=n[0].className.replace(" active",""),this.className+=" active"});function h(){window.addEventListener("load",()=>{m(window.location.hash),window.addEventListener("hashchange",()=>{m(window.location.hash)})})}h();
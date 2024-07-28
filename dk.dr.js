// ==UserScript==
// @name         dark-moid
// @namespace    http://tampermonkey.net/
// @version      2024-07-22
// @description  try to take over the world!
// @author       You
// @match        https://*.tribalwars.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tribalwars.net
// @grant        none
// ==/UserScript==

var _gray = "#353535";
var _DarkGray = "#353535";
var _someColor = "#d3d3d3";

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css.replace(/;/g, ' !important;');
    head.appendChild(style);
}

(function() {

    var tdTag = document.getElementsByTagName("td");

    for(var i=0; i<tdTag.length; i++)
    {
        tdTag[i].style.color = _someColor;
        tdTag[i].style.background = _DarkGray;
        tdTag[i].style.border = _DarkGray;
    }

    var aTag = document.getElementsByTagName("a");

    for(var i=0; i<aTag.length; i++)
    {
        aTag[i].style.color = _someColor;
        aTag[i].style.border = _DarkGray;
        addGlobalStyle('#menu_row > td.menu-item > a {	background: transparent scroll left top no-repeat;	position: relative;	left: -2px;	padding: 15px 15px 0;	font-size: 10px;}');
        addGlobalStyle('#topdisplay .menu_column .menu-column-item a, .menu_column .menu-column-item a {	display: block;	position: relative;	left: -20px;	padding: 3px 12px 3px 20px;	margin: 0 -10px 0 0;	background: #353535 scroll left top no-repeat;	color: #FFF;	float: none;	height: auto;	text-align: left;}');
        addGlobalStyle('.topbar .corner {	position: relative;	width: 20px;	height: 25px;	margin: 0;	left: -20px;	top: 0;	background: #353535 scroll left top no-repeat;}');
        addGlobalStyle('#content_value { color: rgb(13, 13, 13);}');
        addGlobalStyle(".world_button_active {	background: transparent no-repeat 0 0;}");
    }



    var h4Tag = document.getElementsByTagName("h4");

    for(var i=0; i<h4Tag.length; i++)
    {
        h4Tag[i].style.color = _DarkGray;
        h4Tag[i].style.background = _DarkGray;
        h4Tag[i].style.border = _DarkGray;
        addGlobalStyle('th, .vis > h4 { color: #d3d3d3; background-color: #5b5b5b; }');
    }

    var thTag = document.getElementsByTagName("th");

    for(var i=0; i<thTag.length; i++)
    {
        thTag[i].style.color = _DarkGray;
        thTag[i].style.background = _DarkGray;
        thTag[i].style.border = _DarkGray;
        addGlobalStyle('th, .vis > h4 { color: #d3d3d3; background-color: #5b5b5b; }');
    }


    addGlobalStyle(`
/* game.css | https://dscs.innogamescdn.com/assets/cs86/ce128e7bb0c634554f8d84655aebc5da/merged/game.css */
.premium-box-content {
  /* background: url(https://dscs.innogamescdn.com/asset/7ecd8bad/graphic/premium/box-middle.png); */
  background: none;
}
.premium-box-head {
  /* background: url(https://dscs.innogamescdn.com/asset/7ecd8bad/graphic/premium/box-top.png); */
  background: none;
}
.premium-box-foot {
  /* background: url(https://dscs.innogamescdn.com/asset/7ecd8bad/graphic/premium/box-bottom.png); */
  background: none;
}

#content_value {
  /* color: #d3d3d3); */
  color: #000;
}

#content_value {
  /* color: #d3d3d3; */
  color: #000;
}

  td.shadow div.rightshadow, td.shadow div.leftshadow {
        background: none;
    }

.vis td,
.vis_item {
  background:#0000;
}

input,
select {
  font-size:8pt;
  background: #0006;
  border-radius: 20px;
  border: 0px;
  color: white;
  text-align: center;
  padding: 6px;
}

.scavenge-option {
  min-width: 180px;
  position: relative;
  display: inline-block;
  margin: 5px;
  vertical-align: top;
  background-color: rgba(240, 226, 190, 0);
}

.btn,
.btn-default {
  background: #0006;
  padding: 4px;
}

#info_content {
  background-color: #0000009c;
  width: auto;
}

th,
.vis > h4 {
  font-size: 9pt;
  text-align: left;
  font-weight:700;
  background-image: none;
  background-repeat: repeat-x;
  position: relative;
}

.report-preview {
  color: black;
}

.report-preview {
  border: none;
}

`);


    addGlobalStyle(".premium_account_hint { background: none;}");
    addGlobalStyle("#content_value {	color: #000 !important;}");
    addGlobalStyle(".premium-advantage .advantage-content { background-color: #353535; padding: 20px; overflow: hidden;}");
    addGlobalStyle("#content_value { color: #d3d3d3;}");
    addGlobalStyle(".map_container { background-color:#f4e4bc!important; border:1px solid #d3d3d3; direction:ltr;}");
    addGlobalStyle("#manager_icon_farm { filter: brightness(40%);}");
    addGlobalStyle("a.manager_icon:nth-child(2) {  filter: brightness(40%);}");
    addGlobalStyle("a.thread_button:nth-child(1) { color: #353535; border: medium none rgb(53, 53, 53); filter: brightness; filter: brightness(20%);}");
    addGlobalStyle("a.thread_button:nth-child(2) { color: #353535; border: medium none rgb(53, 53, 53); filter: brightness(20%);}");
    addGlobalStyle(".units-widget-group { color: #d3d3d3;}");
    addGlobalStyle(".igmline { height: 26px; line-height: 26px; border-bottom: 1px solid rgba(255, 255, 255, 0.7); position: relative; overflow: hidden; border-top-left-radius: 2px; border-top-right-radius: 2px; background: #e5c27e; background: -moz-linear-gradient(top, #e5c27e 0%, #c1a264 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #e5c27e), color-stop(100%, #c1a264)); background: -webkit-linear-gradient(top, #e5c27e 0%, #c1a264 100%); background: -o-linear-gradient(top, #e5c27e 0%, #c1a264 100%); background: -ms-linear-gradient(top, #e5c27e 0%, #c1a264 100%); background: #353535; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e5c27e', endColorstr='#c1a264', GradientType=0);}");
    addGlobalStyle(".post { border: none; background-color: #353535;}");
    addGlobalStyle(".popup_box_content { background-color: #353535; background-image: none; padding: 10px; max-height: 85vh; overflow: auto;}");
    addGlobalStyle("header.quest-title { display: block; background-image: none; background-repeat: no-repeat; background-size: 100% 100%; padding: 1em; color: white; position: relative;}");
    addGlobalStyle(".quest-popup-navbar { position: absolute; height: 52px; width: 100%; bottom: 0; background-size: 100% 100%; background-repeat: no-repeat; background-image: url('https://dscs.innogamescdn.com/asset/7ecd8bad/graphic/quests_new/nav_banner.png'); filter: brightness(60%);}");
    addGlobalStyle("#map { width: 600px; height: 500px;");
    addGlobalStyle(".map-legend-container table { border:none; background-color: #353535; margin-left: 0; border-collapse: separate; text-align: left;}");
    addGlobalStyle(".lit .lit-item {	font-weight: 700;	background-color: #353535;	background-image: none;}");
    addGlobalStyle(".selected, .selected td {	background-color: #353535;}");
    addGlobalStyle('td.shadow div.rightshadow { height: 8px; /*! width: auto; */ /*! background: transparent url(https://dscs.innogamescdn.com/asset/7ecd8bad/graphic/index/shadow-right.png) scroll right top no-repeat; */ /*! margin-left: 15px; */ z-index: 0;}');
    addGlobalStyle('.widget-button {filter: brightness(35%)}');
    addGlobalStyle('div.vis {	border: 0px solid #d3d3d3;	margin: 15px 5px;	-webkit-box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);	box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);}');
    addGlobalStyle('.content-border { border: 0px solid #7d510f;	-webkit-box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);	box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);}');
    addGlobalStyle('#footer {	position: absolute;	left: 0;	bottom: 0;	width: 100%;	height: 30px;	background: transparent scroll center top repeat-x;	background-position: 1px 0px;	z-index: 11900;	cursor: default;	text-align: center;}');
    addGlobalStyle('.quest {	width: 25px;	height: 25px;	border: 0px solid #603000;	background-color: #5b5b5b;	margin: 10px;	background-position: center;	background-repeat: no-repeat;	cursor: pointer;	position: relative;	text-align: center;	box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 2px;	border-radius: 3px;}');
    addGlobalStyle('.quest_new {	text-align: center;	font-family: "Segoe UI", Tahoma, Verdana, Arial;	font-size: 9px;	font-weight: bold;	border: 1px solid #fff;	background-color: transparent;	border-radius: 6px;	height: 13px;	width: 34px;	position: absolute;	top: 20px;	left: -14px;	color: #fff;	z-index: 1000;}');



    document.body.style.background = _gray;
    document.getElementsByClassName("server_info")[0] .style.background= _DarkGray;

    document.getElementsByClassName("content-border")[0] .style.background= _DarkGray;

    document.getElementsByClassName("top_bar")[0] .style.background= _DarkGray;
    document.getElementsByClassName("bg")[0] .style.background= _DarkGray;



    for (let i = 0; i < 3; i++) {
        document.getElementsByClassName("bg_left")[i] .style.background= "none";
        document.getElementsByClassName("bg_right")[i] .style.background= "none";
    }
})();



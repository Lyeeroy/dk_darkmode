// ==UserScript==
// @name         dark-moid
// @namespace    http://tampermonkey.net/
// @version      2024-07-22
// @description  try to take over the world!
// @author       You
// @match        https://*.tribalwars.net/*
// @include      https://*.divokekmeny.cz/*
// @include      https://www.die-staemme.de/
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
        addGlobalStyle('#content_value { color: #d3d3d3;}');
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


    function addCombinedGlobalStyles() {
        const styles = `
/* Main Elements */
.premium-box-content,
.premium-box-head,
.premium-box-foot,
td.shadow div.rightshadow,
td.shadow div.leftshadow,
.vis td,
.vis_item,
.maincell > .info_box,
.premium_account_hint,
header.quest-title,
.popup_box_content,
.lit .lit-item,
.selected,
.selected td,
.award-group-content,
#footer,
.quest_new,
.list-item.b,
.list-item.a,
.row,
.premium_account_hint {
  background: transparent;
  color: #d3d3d3;
}

/* Input Fields */
input,
select {
  font-size: 8pt;
  background: #000;
  border-radius: 20px;
  border: 2px solid #ff007f; /* Neon Pink Border */
  color: #ff007f; /* Neon Pink Text */
  text-align: center;
  padding: 6px;
  box-shadow: 0px 0px 10px #ff007f; /* Neon Glow */
}

/* Scavenge Option */
.scavenge-option,
.map_container {
  background-color: rgba(36, 36, 36, 0.8) !important; /* Darker background with slight transparency */
}

/* Buttons */
.btn,
.btn-default {
  background: #000;
  border: 2px solid #ff007f; /* Neon Pink Border */
  color: #ff007f; /* Neon Pink Text */
  box-shadow: 0px 0px 10px #ff007f; /* Neon Glow */
  transition: background 0.3s, color 0.3s;
}

.btn:hover,
.btn-default:hover {
  background: #ff007f; /* Neon Pink Background on Hover */
  color: #000; /* Dark Text on Hover */
}

/* Info Content */
#info_content {
  background-color: #1a1a1a; /* Darker Transparent Background */
  border: 2px solid #ff007f; /* Neon Pink Border */
  box-shadow: 0px 0px 20px #ff007f; /* Neon Glow */
}

/* Headings and Popups */
th,
.vis > h4,
header.quest-title,
.popup_box_content {
  background-image: none;
  color: #ff007f; /* Neon Pink Text */
}

/* Report Preview and Info Box */
.report-preview-content,
.report-preview,
.info_box,
.post {
  background-color: #282828; /* Dark Gray Background */
  border: 2px solid #ff007f; /* Neon Pink Border */
  color: #ff007f; /* Neon Pink Text */
  box-shadow: 0px 0px 10px #ff007f; /* Neon Glow */
}

/* Content Value */
td#content_value {
  color: #ff007f !important; /* Neon Pink Text */
}

/* Premium Advantage and Quest */
.premium-advantage .advantage-content,
.igmline,
.post,
.popup_box_content,
.map-legend-container table,
.lit .lit-item,
.selected,
.selected td,
.quest,
.row h4 {
  background-color: #2e2e2e; /* Darker Background */
  border: 1px solid #ff007f; /* Neon Pink Border */
  color: #d3d3d3; /* Light Gray Text */
}

/* Icons and Buttons */
#manager_icon_farm,
a.manager_icon:nth-child(2),
a.thread_button:nth-child(1),
a.thread_button:nth-child(2),
.quest-popup-navbar,
.widget-button {
  filter: brightness(50%);
  transition: filter 0.3s;
}

#manager_icon_farm:hover,
a.manager_icon:nth-child(2):hover,
a.thread_button:nth-child(1):hover,
a.thread_button:nth-child(2):hover,
.quest-popup-navbar:hover,
.widget-button:hover {
  filter: brightness(80%);
}

/* Map */
#map {
  width: 600px;
  height: 500px;
  border: 2px solid #ff007f; /* Neon Pink Border */
  box-shadow: 0px 0px 20px #ff007f; /* Neon Glow */
}

/* Shadows */
td.shadow div.rightshadow {
  height: 8px;
  z-index: 0;
}

div.vis,
.content-border {
  border: 2px solid #ff007f; /* Neon Pink Border */
  box-shadow: 0px 0px 15px #ff007f; /* Neon Glow */
}

/* Quests */
.quest {
  border: 2px solid #ff007f; /* Neon Pink Border */
  background-color: #3a3a3a; /* Dark Gray Background */
  box-shadow: 0px 0px 15px #ff007f; /* Neon Glow */
}

/* Attack Spy Buildings */
table#attack_spy_buildings_left,
table#attack_spy_buildings_right {
  border: 2px solid #ff007f; /* Neon Pink Border */
  background-color: #3a3a3a; /* Transparent Background */
}

.top_shadow {

  height: 0.01px;
  border: 2px solid #ff007f; /* Neon Pink Border */
  box-shadow: 0px 0px 20px #ff007f; /* Neon Glow */

}

    `;
        addGlobalStyle(styles);
    }

    // Call the function to add the styles
    addCombinedGlobalStyles();


    document.body.style.background = _gray;
    document.getElementsByClassName("server_info")[0] .style.background= _DarkGray;

    document.getElementsByClassName("content-border")[0] .style.background= _DarkGray;

    document.getElementsByClassName("top_bar")[0] .style.background= _DarkGray;
    document.getElementsByClassName("bg")[0] .style.background= _DarkGray;



    const bg_left_elements = document.getElementsByClassName("bg_left");
    const bg_right_elements = document.getElementsByClassName("bg_right");

    if (bg_left_elements.length > 0 && bg_right_elements.length > 0) {
        for (let i = 0; i < 3; i++) {
            if (bg_left_elements[i]) {
                bg_left_elements[i].style.background = "none";
            }
            if (bg_right_elements[i]) {
                bg_right_elements[i].style.background = "none";
            }
        }
    }

})();



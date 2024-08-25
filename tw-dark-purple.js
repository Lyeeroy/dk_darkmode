// ==UserScript==
// @name         dark-moid
// @namespace    http://tampermonkey.net/
// @version      2024-07-22
// @description  try to take over the world!
// @author       Add URL in this format:
// @match        https://*.tribalwars.net/*
// @match        https://*.tribalwars.uk/*
// @match        https://*.tribalwars.com/*
// @include      https://*.divokekmeny.cz/*
// @include      https://www.die-staemme.de/
// @include      https://*.plemiona.pl/*
// @include      https://*.guerrastribales.es/*
// @include      https://*.tribals.it/*
// @include      https://*.tribalwars.nl/*
// @include      https://*.tribalwars.com.pt/*
// @include      https://*.tribalwars.com.br/*
// @include      https://*.tribalwars.us/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tribalwars.net
// @grant        none
// ==/UserScript==

(function () {
  const COLORS = {

  // Dark Colors (Good for backgrounds)
  darkGray: "#2C2C2C",
  smokeBlack: "#0B0B0B",
  midnightBlue: "#0A1F44",
  darkSlateGray: "#2B3A42",
  darkForestGreen: "#0B3D0B",
  deepPurple: "#2C003E",
  darkOlive: "#3D3D2F",
  charcoal: "#343434",
  onyxBlack: "#161616",
  indigo: "#1A237E",
  dustyRose: "#D6A6A1",

  // Glow Colors (Eye-candy)
  neonPink: "#FF007F",
  electricBlue: "#00FFFF",
  limeGreen: "#32CD32",
  brightYellow: "#FFFF00",
  neonOrange: "#FF7F00",
  neonPurple: "#9B30FF",
  hotPink: "#FF69B4",
  vibrantCyan: "#00E5EE",
  brightMagenta: "#FF00FF",
  neonGreen: "#39FF14",

  // Normal Colors (Neutral/General purpose)
  lightGray: "#d3d3d3",
  coral: "#ff6f61",
  teal: "#008080",
  goldenYellow: "#FFD700",
  crimson: "#DC143C",
  forestGreen: "#228B22",
  skyBlue: "#87CEEB",
  burntOrange: "#FF4500",
  lavender: "#E6E6FA",
  salmon: "#FA8072",
  slateBlue: "#6A5ACD",
  steelBlue: "#4682B4",
  mediumPurple: "#9370DB",
  olive: "#808000",
  purple: "#C4A4FC",
  darkerPurple: "#AE92E0",
};
  
  const background_color = COLORS.darkGray; //Background
  
  const text_color = COLORS.lightGray; // Non href text
  const aColor = COLORS.purple; // HREFs

  const hover_color = COLORS.purple; //btn hovers
  const buttons_color = COLORS.smokeBlack; //Buttons + some fonts

  const decorative_color = COLORS.purple; // borders, candy eye

  const header_color1 = COLORS.purple; //header grad
  const header_color2 = darkenColor(COLORS.purple, 20); //header grad
  const header_font_color = COLORS.smokeBlack; // header font


function darkenColor(hex, percent) {

  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);


  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent / 100))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent / 100))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent / 100))));


  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}


  function addGlobalStyle(css) {
    const head = document.head || document.getElementsByTagName("head")[0];
    if (head) {
      const style = document.createElement("style");
      style.type = "text/css";
      style.innerHTML = css.replace(/;/g, " !important;");
      head.appendChild(style);
    }
  }

  function applyStyles(elements, styles) {
    Array.from(elements).forEach((el) => Object.assign(el.style, styles));
  }


  new MutationObserver(() => {
    applyStyles(document.querySelectorAll("td, h4, th"), {
      color: text_color,
      background: background_color,
      borderColor: background_color,
      backgroundImage: "none",
    });
    applyStyles(document.querySelectorAll("a"), {
      color: aColor,
    });
    applyStyles(document.querySelectorAll(".inactive, .inactive:hover"), {
      color: decorative_color,
    });
  }).observe(document.body, { childList: true, subtree: true });

  // Apply styles initially
  applyStyles(document.querySelectorAll("td, h4, th"), {
    color: text_color,
    background: background_color,
    borderColor: background_color,
  });
  applyStyles(document.querySelectorAll("a"), {
    color: aColor,
  });
  applyStyles(document.querySelectorAll(".inactive, .inactive:hover"), {
    color: decorative_color,
  });

  // .top_shadow TO-DO

  addGlobalStyle(`
    /* Custom edit */
    #menu_row > td.menu-item > a { background: transparent; font-size: 11px; }
    #topdisplay .menu_column .menu-column-item a { display: block; position: relative; left: -20px; padding: 3px 12px 3px 20px; margin: 0 -10px 0 0; background: ${background_color}; color: #FFF; float: none; height: auto; text-align: left; }
    .topbar .corner, .reward-tab-content, .reward-descriptions, .quests, #map_search .target-input, #map_search .target-input input[type=text], .spoiler div, .labeled-box-content, .empty-hint, .inventory_search, #attack_spy_buildings_left, #attack_spy_buildings_right, img#unit_image, .popup_content, .shared_forum { background: ${background_color}; }
    #content_value { color: ${text_color}; }
    th, .vis > h4, .igmline, .popup_menu { color: ${header_font_color}; background: linear-gradient(to bottom, ${header_color1}, ${header_color2});}
    th { color: ${text_color}; background-color: ${background_color}, background: transparent; }
    .maincell table {margin-top: 5px}
    img.widget-button {background: ${buttons_color}; filter: brightness(0%); margin-top: 4px; height: 2px; width: 14px;}
    .target-input, .inventory_search, .ally-reasons-to-join .reasons .content, .ally-reasons-to-join .reasons .header {border: none;}
    #footer, .visual-label  { background: ${background_color}; box-shadow: 0px 0px 5px ${decorative_color};}
    select.input-nicer {height: 35px;}
    .flag_box, .target-input {background-color: transparent; }

    /* Transparent */
    .world_button_active, .bg_left, .bg_right, .top_shadow, #tooltip, .topbar .decoration, .bottom, #plunder_list_filters, .award-group-head, .award-group-foot, .quest-popup-navbar, .quest-popup-navbar > ul > li > a, .quest-popup-navbar > ul > li:hover > a, .quest-popup-navbar > ul > li.selected-tab > a, li.selected-tab > a, .quest-popup-navbar > ul > li  { background: transparent; }
/* Home page */
.bg-top, .left.register, .right.login, .ally-reasons-to-join .reasons .content, .ally-reasons-to-join .reasons .header, .report_transparent_overlay  { background: ${background_color}; }

  `);

  addGlobalStyle(`
    /* General Elements - background, color */
    .premium-box-content, .premium-box-head, .premium-box-foot, td.shadow div.rightshadow, td.shadow div.leftshadow,
    .vis td, .vis_item, .maincell > .info_box, .premium_account_hint, header.quest-title, .popup_box_content, .lit .lit-item,
    .selected, .selected td, .award-group-content, .quest_new, .list-item.b, .list-item.a, .row { background: transparent; color: ${text_color}; }

    /* Buttons - background, border, color, box-shadow */
    .btn, .btn-default, #manager_icon_farm, a.manager_icon:nth-child(2), a.thread_button:nth-child(1), a.thread_button:nth-child(2),
    .widget-button, .border-frame-gold-red, .scavenge-option .title { background: ${buttons_color}; border: 1px solid ${decorative_color}; color: ${decorative_color}; box-shadow: 0px 0px 10px ${decorative_color}; transition: background 0.3s, color 0.3s; }

    .btn:hover, .btn-default:hover, #manager_icon_farm:hover, a.manager_icon:nth-child(2):hover, a.thread_button:nth-child(1):hover,
    .bordered-box, a.thread_button:nth-child(2):hover, .widget-button:hover, .anim, .labeled-box-label, .active-skill-list, .active-skill-list .header:not(.icon) { background: ${hover_color}; color: #000; }

    /* Input Fields - font-size, background, border-radius, border, color, padding, box-shadow */
    input, select { font-size: 8pt; background: #000; border-radius: 20px; border: 2px solid ${decorative_color}; color: ${decorative_color}; text-align: center; padding: 6px; box-shadow: 0px 0px 10px ${decorative_color}; }

    /* Info and Report Boxes - background-color, border, color, box-shadow */
    div.form , #info_content, .report-preview-content, .report-preview, .info_box, .post, #tooltip, .tooltip-style, .tooltip-style.command-details { background-color: ${background_color}; border: 2px solid ${decorative_color}; color: ${decorative_color}; box-shadow: 0px 0px 10px ${decorative_color}; }

    /* Other Styling - background-color, border-color, color */
    .scavenge-option, .map_container, .premium-advantage .advantage-content, .post, .popup_box_content,
    .popup_style, .event-area, .desktop #event_tribeless_content,.map-legend-container table, .lit .lit-item, .selected, .selected td, .quest, .row h4, .premium_account_hint.main, .inventory_detail, .inventory_items, .item_container .item, .item_container { background-color: ${background_color}; border-color: ${decorative_color}; color: ${text_color}; }

    /* Map - border, box-shadow */
    #map { width: 600px; height: 500px; border: 2px solid ${decorative_color}; box-shadow: 0px 0px 20px ${decorative_color}; }
    div.vis, .content-border, .quest, table#attack_spy_buildings_left, table#attack_spy_buildings_right, .premium_account_hint, .order-progress, .mass-progress { border-color: ${decorative_color}; box-shadow: 0px 0px 15px ${decorative_color}; }

    /* Info Box - background*/
    #info_content th[colspan="2"]{ background: ${decorative_color}; transition: background 0.3s }

    /* Top bar menu - width, background, border-bottom, color, font-size */
    #topdisplay .menu_column .menu-column-item a, .menu_column .menu-column-item a {width: 100%; background: transparent; background-color : ${background_color}; box-shadow: 0px 0px 2px ${decorative_color}; color: ${decorative_color}; font-size: 8pt }
    .bottom { display: none; }

  `);

  applyStyles(
    document.querySelectorAll(".server_info, .content-border, .top_bar, .bg"),
    {
      background: background_color,
    }
  );

  document.body.style.background = background_color;
})();

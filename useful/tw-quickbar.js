// ==UserScript==
// @name         Tribal Wars Quickbar
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add a custom quickbar to Tribal Wars and dynamically set village ID in URLs
// @author       Your Name
// @match        https://*.tribalwars.net/game.php?village=*
// @include      https://*.divokekmeny.cz/game.php?village=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function getVillageID() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('village');
    }

    const villageID = getVillageID();

    var quickbarHTML = `
        <table id="quickbar_outer" align="center" width="100%" cellspacing="0">
            <tbody><tr>
                <td style="color: rgb(211, 211, 211); background: rgb(53, 53, 53); border: rgb(53, 53, 53);">
                    <table id="quickbar_inner" style="border-collapse: collapse;" width="100%">
                        <tbody><tr class="topborder">
                            <td class="left" style="color: rgb(211, 211, 211); background: rgb(53, 53, 53); border: rgb(53, 53, 53);"> </td>
                            <td class="main" style="color: rgb(211, 211, 211); background: rgb(53, 53, 53); border: rgb(53, 53, 53);"> </td>
                            <td class="right" style="color: rgb(211, 211, 211); background: rgb(53, 53, 53); border: rgb(53, 53, 53);"> </td>
                        </tr>
                        <tr>
                            <td class="left" style="color: rgb(211, 211, 211); background: rgb(53, 53, 53); border: rgb(53, 53, 53);"> </td>
                            <td id="quickbar_contents" class="main" style="color: rgb(211, 211, 211); background: rgb(53, 53, 53); border: rgb(53, 53, 53);">
                                <ul class="menu quickbar">
                                    <li class="quickbar_item" data-hotkey="1">
                                        <span>
                                            <a class="quickbar_link" href="/game.php?village=${villageID}&amp;screen=main" style="color: rgb(211, 211, 211); border: rgb(53, 53, 53);">
                                                <img class="quickbar_image" src="https://dsen.innogamescdn.com/asset/4f05e65d/graphic//buildings/main.png" alt="">Headquarters
                                            </a>
                                        </span>
                                    </li>
                                    <li class="quickbar_item" data-hotkey="2">
                                        <span>
                                            <a class="quickbar_link" href="/game.php?village=${villageID}&amp;screen=train" style="color: rgb(211, 211, 211); border: rgb(53, 53, 53);">
                                                <img class="quickbar_image" src="https://dsen.innogamescdn.com/asset/4f05e65d/graphic//buildings/barracks.png" alt="">Recruit
                                            </a>
                                        </span>
                                    </li>
                                    <li class="quickbar_item" data-hotkey="3">
                                        <span>
                                            <a class="quickbar_link" href="/game.php?village=${villageID}&amp;screen=snob" style="color: rgb(211, 211, 211); border: rgb(53, 53, 53);">
                                                <img class="quickbar_image" src="https://dsen.innogamescdn.com/asset/4f05e65d/graphic//buildings/snob.png" alt="">Academy
                                            </a>
                                        </span>
                                    </li>
                                    <li class="quickbar_item" data-hotkey="4">
                                        <span>
                                            <a class="quickbar_link" href="/game.php?village=${villageID}&amp;screen=smith" style="color: rgb(211, 211, 211); border: rgb(53, 53, 53);">
                                                <img class="quickbar_image" src="https://dsen.innogamescdn.com/asset/4f05e65d/graphic//buildings/smith.png" alt="">Smithy
                                            </a>
                                        </span>
                                    </li>
                                    <li class="quickbar_item" data-hotkey="5">
                                        <span>
                                            <a class="quickbar_link" href="/game.php?village=${villageID}&amp;screen=place" style="color: rgb(211, 211, 211); border: rgb(53, 53, 53);">
                                                <img class="quickbar_image" src="https://dsen.innogamescdn.com/asset/4f05e65d/graphic//buildings/place.png" alt="">Rally point
                                            </a>
                                        </span>
                                    </li>
                                    <li class="quickbar_item" data-hotkey="6">
                                        <span>
                                            <a class="quickbar_link" href="/game.php?village=${villageID}&amp;screen=market" style="color: rgb(211, 211, 211); border: rgb(53, 53, 53);">
                                                <img class="quickbar_image" src="https://dsen.innogamescdn.com/asset/4f05e65d/graphic//buildings/market.png" alt="">Market
                                            </a>
                                        </span>
                                    </li>
                                    <li class="quickbar_item" data-hotkey="7">
                                        <span>
                                            <a class="quickbar_link" href="/game.php?village=${villageID}&amp;screen=place&mode=scavenge" style="color: rgb(211, 211, 211); border: rgb(53, 53, 53);">
                                                <img class="quickbar_image" src="https://dsen.innogamescdn.com/asset/4f05e65d/graphic//buildings/place.png" alt="">Gather
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                            </td>
                            <td class="right" style="color: rgb(211, 211, 211); background: rgb(53, 53, 53); border: rgb(53, 53, 53);"> </td>
                        </tr>
                        <tr class="bottomborder">
                            <td class="left" style="color: rgb(211, 211, 211); background: rgb(53, 53, 53); border: rgb(53, 53, 53);"> </td>
                            <td class="main" style="color: rgb(211, 211, 211); background: rgb(53, 53, 53); border: rgb(53, 53, 53);"> </td>
                            <td class="right" style="color: rgb(211, 211, 211); background: rgb(53, 53, 53); border: rgb(53, 53, 53);"> </td>
                        </tr>
                        <tr>
                            <td class="shadow" colspan="3" style="color: rgb(211, 211, 211); background: rgb(53, 53, 53); border: rgb(53, 53, 53);">
                                <div class="leftshadow"> </div>
                                <div class="rightshadow"> </div>
                            </td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
        </tbody></table>
    `;

    var newStyleOnlyElement = document.querySelector('br.newStyleOnly');
    if (newStyleOnlyElement && villageID) {
        newStyleOnlyElement.insertAdjacentHTML('afterend', quickbarHTML);
    }
})();

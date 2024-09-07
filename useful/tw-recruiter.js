// ==UserScript==
// @name         Troop Recruiter
// @namespace    http://tampermonkey.net/
// @version      2024-09-07
// @description  Calculate and fill troop recruitment based on available materials while balancing wood and iron usage. URL: https://<sever>.tribalwars.net/game.php?village=<villageID>&screen=train
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

(function() {
    'use strict';

    const fillButton = document.createElement('input');
    fillButton.type = 'button';
    fillButton.value = 'Calculate';
    fillButton.className = 'btn btn-fill';
    fillButton.style = 'margin-top: 10px; color: black;';

    const recruitButton = document.querySelector('input.btn.btn-recruit');
    recruitButton.parentNode.appendChild(fillButton);

    const troopTypes = [
        'spear', 'sword', 'axe', 'archer', 'spy', 'light',
        'marcher', 'heavy', 'ram', 'catapult', 'knight', 'snob'
    ];
    const troopCheckboxes = {};

    const troopCosts = {
        spear: { wood: 50, stone: 30, iron: 10 },
        sword: { wood: 30, stone: 30, iron: 70 },
        axe: { wood: 60, stone: 30, iron: 40 },
        archer: { wood: 100, stone: 30, iron: 60 },
        spy: { wood: 50, stone: 50, iron: 20 },
        light: { wood: 125, stone: 100, iron: 250 },
        marcher: { wood: 250, stone: 100, iron: 150 },
        heavy: { wood: 200, stone: 150, iron: 600 },
        ram: { wood: 300, stone: 200, iron: 200 },
        catapult: { wood: 320, stone: 400, iron: 100 },
        knight: { wood: 20, stone: 20, iron: 50 },
        snob: { wood: 28000, stone: 30000, iron: 25000 }
    };

    troopTypes.forEach(troop => {
        if (document.getElementById(troop + '_0')) {
            const label = document.createElement('label');
            label.style = 'display: block; margin-top: 5px;';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = true;
            troopCheckboxes[troop] = checkbox;

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(` ${troop.charAt(0).toUpperCase() + troop.slice(1)}`));
            recruitButton.parentNode.appendChild(label);
        }
    });

    const resourceBar = document.createElement('table');
    resourceBar.style = 'width: 100%; margin-top: 20px; color: rgb(211, 211, 211); background: rgb(44, 44, 44); border-color: rgb(44, 44, 44);';

    const resourceRow = document.createElement('tr');
    resourceRow.style = 'height: 20px;';

    const resources = ['wood', 'stone', 'iron'];

    resources.forEach(resource => {
        const iconCell = document.createElement('td');
        iconCell.className = 'box-item icon-box firstcell';
        iconCell.style = 'background: rgb(44, 44, 44); border-color: rgb(44, 44, 44);';
        const iconLink = document.createElement('a');
        iconLink.href = `/game.php?village=13050&screen=${resource}`;
        iconLink.style = 'color: rgb(214, 166, 161);';
        iconLink.innerHTML = `<span class="icon header ${resource}"> </span>`;
        iconCell.appendChild(iconLink);
        resourceRow.appendChild(iconCell);

        const valueCell = document.createElement('td');
        valueCell.className = 'box-item';
        valueCell.style = 'background: rgb(44, 44, 44); border-color: rgb(44, 44, 44);';
        const span = document.createElement('span');
        span.id = `remaining_${resource}`;
        span.className = 'res';
        span.textContent = document.getElementById(resource).textContent.trim();
        valueCell.appendChild(span);
        resourceRow.appendChild(valueCell);
    });

    resourceBar.appendChild(resourceRow);
    recruitButton.parentNode.appendChild(resourceBar);

    function calculateOptimalTroops() {
        let wood = parseInt(document.getElementById('wood').textContent.trim());
        let stone = parseInt(document.getElementById('stone').textContent.trim());
        let iron = parseInt(document.getElementById('iron').textContent.trim());

        troopTypes.forEach(troop => {
            const inputField = document.getElementById(troop + '_0');
            if (inputField) inputField.value = '';
        });

        const optimalTroops = {};
        troopTypes.forEach(troop => optimalTroops[troop] = 0);

        const selectedTroops = troopTypes.filter(troop => troopCheckboxes[troop]?.checked);

        while (true) {
            let bestTroop = null;
            let bestBalance = Infinity;

            for (const troop of selectedTroops) {
                const cost = troopCosts[troop];

                if (wood >= cost.wood && stone >= cost.stone && iron >= cost.iron) {
                    const newWood = wood - cost.wood;
                    const newStone = stone - cost.stone;
                    const newIron = iron - cost.iron;
                    const balance = Math.abs(newWood - newIron) + Math.abs(newWood - newStone) + Math.abs(newStone - newIron);

                    if (balance < bestBalance) {
                        bestBalance = balance;
                        bestTroop = troop;
                    }
                }
            }

            if (!bestTroop) break;

            const cost = troopCosts[bestTroop];
            wood -= cost.wood;
            stone -= cost.stone;
            iron -= cost.iron;
            optimalTroops[bestTroop]++;
        }

        for (const troop of selectedTroops) {
            document.getElementById(troop + '_0').value = optimalTroops[troop];
        }

        document.getElementById('remaining_wood').textContent = wood;
        document.getElementById('remaining_stone').textContent = stone;
        document.getElementById('remaining_iron').textContent = iron;
    }

    fillButton.addEventListener('click', calculateOptimalTroops);

})();

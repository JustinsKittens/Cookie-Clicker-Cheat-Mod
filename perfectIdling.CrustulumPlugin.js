/**
 * Perfect Idling Plugin for Cheat Menu
 * 
 * Adds buttons to toggle the Perfect idling achievement.
 * 
 * Load this file and then load Cheat Menu
 */

if (typeof CheatPlugins !== 'object') CheatPlugins = {};

CheatPlugins['perfectIdling'] = {
    Actions: { // Only ran when we call them
        perfectIdlingActivate: ()=>{
            let upgrade = Game.Upgrades['Perfect idling'];
            upgrade.unlocked = 1;
            upgrade.bought = 1;
            Game.upgradesToRebuild = 1;
            Cheat.Game.UpdateMenu();
        },
        perfectIdlingDeactivate: ()=>{
            let upgrade = Game.Upgrades['Perfect idling'];
            upgrade.unlocked = 0;
            upgrade.bought = 0;
            Game.upgradesToRebuild = 1;
            Cheat.Game.UpdateMenu();
        },
    },
    Game: { // Ran when Cheat Menu runs them
        UpdateMenu: (fragment) => { 
            fragment.appendChild(Cheat.Menu.subheading('Crustulum: Perfect Idling'));
            if (Game.Has('Perfect idling')) fragment.appendChild(Cheat.Menu.actionButton('perfectIdlingDeactivate','Deactivate Perfect Idling','Toggles perfect idling which makes cookies generate while the game is closed.', Cheat.Plugins['perfectIdling'].Actions.perfectIdlingDeactivate));
            else fragment.appendChild(Cheat.Menu.actionButton('perfectIdlingActivate','Activate Perfect Idling','Toggles perfect idling which makes cookies generate while the game is closed.', Cheat.Plugins['perfectIdling'].Actions.perfectIdlingActivate));
        },
    },
};

/* cSpell:ignore Cheat, Achiev */

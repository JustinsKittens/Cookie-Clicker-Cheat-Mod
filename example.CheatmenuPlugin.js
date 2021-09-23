/**
 * Sample Plugin for Cheat Menu
 * 
 *
 * Load this file and then load Cheat Menu
 */

if (typeof CheatPlugins !== 'object') CheatPlugins = {};

CheatPlugins['moreLumps'] = { // Functions don't need defined if they aren't used -- defined here for example only
    Init: () => { // Ran after Cheat Menu inits
    },
    Loaded: () => { // Ran after Cheat Menu is loaded but before Init() is called
    },
    Unloaded: () => { // Ran right before Cheat Menu unload finishes - only ran when the user clicks the unload button
    },
    Actions: { // Only ran when we call them
        moreSugarLumps: ()=>{
            Game.gainLumps(10);
        },
    },
    Game: { // Ran when Cheat Menu runs them
        UpdateMenu: (fragment) => { 
            fragment.appendChild(Cheat.Menu.subheading('Cheat: More Lumps Add-on'));
            fragment.appendChild(Cheat.Menu.actionButton('giveSugarLump','Give Sugar Lump','Gives you a sugar limp.', Cheat.Plugins['moreLumps'].Actions.moreSugarLumps));
        },
    },
};

/* cSpell:ignore Cheat */

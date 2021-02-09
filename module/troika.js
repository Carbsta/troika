// Import Modules
import { TroikaActor } from "./actor/actor.js";
import { TroikaActorSheet } from "./actor/actor-sheet.js";
import { TroikaItem } from "./item/item.js";
import { TroikaItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.troika = {
    TroikaActor,
    TroikaItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = TroikaActor;
  CONFIG.Item.entityClass = TroikaItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("troika", TroikaActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("troika", TroikaItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});
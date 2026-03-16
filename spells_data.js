// Shared D&D 5e spell data — loaded by spellbook.html and campaign.html
const SPELLS = [

  // ===================== CANTRIPS =====================
  {
    name:'Fire Bolt', level:'cantrip', school:'Evocation',
    castTime:'1 action', range:'120ft', components:'V, S', duration:'Instantaneous',
    classes:['Wizard','Sorcerer','Artificer'],
    concentration:false, ritual:false,
    save:null,
    damage:{dice:'1d10', type:'fire', scaling:'1d10 at 5th, 11th, 17th level'},
    desc:`<p>You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes <strong>1d10 fire damage</strong>. A flammable object hit by this spell ignites if it isn't being worn or carried.</p>`,
    upcast:null,
    flavorText:'The oldest cantrip in any wizard\'s repertoire. Cheap, reliable, and deeply satisfying when it connects.'
  },
  {
    name:'Chill Touch', level:'cantrip', school:'Necromancy',
    castTime:'1 action', range:'120ft', components:'V, S', duration:'1 round',
    classes:['Wizard','Sorcerer','Warlock','Cleric'],
    concentration:false, ritual:false,
    save:null,
    damage:{dice:'1d8', type:'necrotic', scaling:'1d8 at 5th, 11th, 17th level'},
    desc:`<p>You create a ghostly skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes <strong>1d8 necrotic damage</strong>, and it can't regain hit points until the start of your next turn.</p><p>If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn.</p>`,
    upcast:null,
    flavorText:'Particularly effective against regenerating monsters. Against trolls, pair with fire — this holds, fire finishes.'
  },
  {
    name:'Eldritch Blast', level:'cantrip', school:'Evocation',
    castTime:'1 action', range:'120ft', components:'V, S', duration:'Instantaneous',
    classes:['Warlock'],
    concentration:false, ritual:false,
    save:null,
    damage:{dice:'1d10', type:'force', scaling:'2 beams at 5th, 3 at 11th, 4 at 17th'},
    desc:`<p>A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes <strong>1d10 force damage</strong>.</p><p>The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or at different ones. Make a separate attack roll for each beam.</p>`,
    upcast:null,
    flavorText:'The warlock\'s bread and butter. Force damage is resisted by almost nothing. Invocations can make this do things a cantrip simply shouldn\'t.'
  },
  {
    name:'Sacred Flame', level:'cantrip', school:'Evocation',
    castTime:'1 action', range:'60ft', components:'V, S', duration:'Instantaneous',
    classes:['Cleric'],
    concentration:false, ritual:false,
    save:{type:'DEX', effect:'half damage'},
    damage:{dice:'1d8', type:'radiant', scaling:'1d8 at 5th, 11th, 17th level'},
    desc:`<p>Flame-like radiance descends on a creature that you can see within range. The target must succeed on a <strong>Dexterity saving throw</strong> or take <strong>1d8 radiant damage</strong>. The target gains no benefit from cover for this saving throw.</p>`,
    upcast:null,
    flavorText:'Ignores cover. Radiant damage bypasses undead resistances. The cleric\'s answer to anything skulking behind a pillar.'
  },
  {
    name:'Shocking Grasp', level:'cantrip', school:'Evocation',
    castTime:'1 action', range:'Touch', components:'V, S', duration:'Instantaneous',
    classes:['Wizard','Sorcerer','Artificer'],
    concentration:false, ritual:false,
    save:null,
    damage:{dice:'1d8', type:'lightning', scaling:'1d8 at 5th, 11th, 17th level'},
    desc:`<p>Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes <strong>1d8 lightning damage</strong>, and it can't take reactions until the start of its next turn.</p>`,
    upcast:null,
    flavorText:'The reaction-denial is underrated. Using this on a monster about to opportunity attack your fleeing ally is extremely satisfying.'
  },
  {
    name:'Poison Spray', level:'cantrip', school:'Conjuration',
    castTime:'1 action', range:'10ft', components:'V, S', duration:'Instantaneous',
    classes:['Wizard','Sorcerer','Druid','Warlock','Artificer'],
    concentration:false, ritual:false,
    save:{type:'CON', effect:'no damage on success'},
    damage:{dice:'1d12', type:'poison', scaling:'1d12 at 5th, 11th, 17th level'},
    desc:`<p>You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a <strong>Constitution saving throw</strong> or take <strong>1d12 poison damage</strong>.</p>`,
    upcast:null,
    flavorText:'Highest cantrip damage dice but the save is Con, which most enemies have in spades. Best against sickly humanoids and the constitutionally challenged.'
  },
  {
    name:'Minor Illusion', level:'cantrip', school:'Illusion',
    castTime:'1 action', range:'30ft', components:'S, M (a bit of fleece)', duration:'1 minute',
    classes:['Wizard','Sorcerer','Bard','Warlock'],
    concentration:false, ritual:false,
    save:null, damage:null,
    desc:`<p>You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.</p><p>If you create a <strong>sound</strong>, its volume can range from a whisper to a scream. You can make the sound seem to come from a specific point within range.</p><p>If you create an <strong>image</strong> of an object — no larger than a 5-foot cube — the image can't create sound, light, smell, or any other sensory effect. Physical interaction reveals the illusion (DC 14 Investigation).</p>`,
    upcast:null,
    flavorText:'Vastly underrated. A convincing coin purse thrown one way while you go another. A guard\'s name called from the wrong direction. Creative players make this do impossible things.'
  },
  {
    name:'Prestidigitation', level:'cantrip', school:'Transmutation',
    castTime:'1 action', range:'10ft', components:'V, S', duration:'Up to 1 hour',
    classes:['Wizard','Sorcerer','Bard','Artificer'],
    concentration:false, ritual:false,
    save:null, damage:null,
    desc:`<p>This spell creates a minor magical effect. You can create any of the following:</p>
    <p>• An instantaneous, harmless sensory effect (shower of sparks, puff of wind, faint music).<br>
    • Light or snuff a candle, torch, or small campfire.<br>
    • Clean or soil an object no larger than 1 cubic foot.<br>
    • Chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.<br>
    • Make a color, small mark, or symbol appear on an object for 1 hour.<br>
    • Create a nonmagical trinket or illusory image that fits in your hand and lasts until end of next turn.</p>`,
    upcast:null,
    flavorText:'The social utility cantrip. Can clean blood off your cloak after a fight, forge a seal impression, or make your entrance appropriately dramatic.'
  },
  {
    name:'Vicious Mockery', level:'cantrip', school:'Enchantment',
    castTime:'1 action', range:'60ft', components:'V', duration:'Instantaneous',
    classes:['Bard'],
    concentration:false, ritual:false,
    save:{type:'WIS', effect:'no damage or disadvantage on success'},
    damage:{dice:'1d4', type:'psychic', scaling:'1d4 at 5th, 11th, 17th level'},
    desc:`<p>You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (it need not understand you), it must succeed on a <strong>Wisdom saving throw</strong> or take <strong>1d4 psychic damage</strong> and have disadvantage on the next attack roll it makes before the end of its next turn.</p>`,
    upcast:null,
    flavorText:'The damage is laughable, but the disadvantage on the next attack roll is genuinely powerful. Against a boss about to hit your downed paladin, this is life or death.'
  },
  {
    name:'Guidance', level:'cantrip', school:'Divination',
    castTime:'1 action', range:'Touch', components:'V, S', duration:'Concentration, up to 1 minute',
    classes:['Cleric','Druid'],
    concentration:true, ritual:false,
    save:null, damage:null,
    desc:`<p>You touch one willing creature. Once before the spell ends, the target can roll a <strong>d4</strong> and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.</p>`,
    upcast:null,
    flavorText:'Free d4 added to any ability check. Clerics and druids who don\'t cast this constantly are leaving free value on the table. The annoying thing is remembering to use it.'
  },
  {
    name:'Toll the Dead', level:'cantrip', school:'Necromancy',
    castTime:'1 action', range:'60ft', components:'V, S', duration:'Instantaneous',
    classes:['Wizard','Cleric','Warlock'],
    concentration:false, ritual:false,
    save:{type:'WIS', effect:'no damage on success'},
    damage:{dice:'1d8 (1d12 if target is missing HP)', type:'necrotic', scaling:'1d8/1d12 at 5th, 11th, 17th'},
    desc:`<p>You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a <strong>Wisdom saving throw</strong> or take <strong>1d8 necrotic damage</strong>. If the target is missing any of its hit points, it instead takes <strong>1d12 necrotic damage</strong>.</p>`,
    upcast:null,
    flavorText:'Punishes wounded targets harder. Against a boss you\'ve been hammering for three rounds, this starts rolling a d12 instead of d8. The pressure it creates is real.'
  },
  {
    name:'Mage Hand', level:'cantrip', school:'Conjuration',
    castTime:'1 action', range:'30ft', components:'V, S', duration:'1 minute',
    classes:['Wizard','Sorcerer','Bard','Warlock','Artificer'],
    concentration:false, ritual:false,
    save:null, damage:null,
    desc:`<p>A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it. The hand vanishes if it is ever more than 30ft away from you.</p><p>You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents of a vial. Each action requires a bonus action. The hand can't attack, activate magic items, or carry more than 10 pounds.</p>`,
    upcast:null,
    flavorText:'Retrieve the keys from the sleeping jailer\'s belt. Trigger the pressure plate 30ft away. Pour the poison into the goblet from safety. The Mage Hand does all of this without you being there.'
  },

  // ===================== 1ST LEVEL =====================
  {
    name:'Magic Missile', level:'1', school:'Evocation',
    castTime:'1 action', range:'120ft', components:'V, S', duration:'Instantaneous',
    classes:['Wizard','Sorcerer'],
    concentration:false, ritual:false,
    save:null,
    damage:{dice:'3 × (1d4+1)', type:'force', scaling:'+1 missile per slot level above 1st'},
    desc:`<p>You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals <strong>1d4+1 force damage</strong> to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several. <strong>No attack roll required — the darts always hit</strong> (except against <em>Shield</em> or <em>Globe of Invulnerability</em>).</p>`,
    upcast:'When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st.',
    flavorText:'Three guaranteed force damage hits. At low levels, the reliable damage matters more than people expect. Against a 1 HP monster, Magic Missile is the answer.'
  },
  {
    name:'Cure Wounds', level:'1', school:'Evocation',
    castTime:'1 action', range:'Touch', components:'V, S', duration:'Instantaneous',
    classes:['Cleric','Druid','Paladin','Ranger','Bard'],
    concentration:false, ritual:false,
    save:null,
    damage:{dice:'1d8 + spellcasting modifier', type:'healing', scaling:'+1d8 per slot level above 1st'},
    desc:`<p>A creature you touch regains a number of hit points equal to <strong>1d8 + your spellcasting ability modifier</strong>. This spell has no effect on undead or constructs.</p>`,
    upcast:'When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.',
    flavorText:'Touch-range healing. Never use it in combat if you can help it — use a bonus action Healing Word instead. Cure Wounds is for after the fight.'
  },
  {
    name:'Healing Word', level:'1', school:'Evocation',
    castTime:'1 bonus action', range:'60ft', components:'V', duration:'Instantaneous',
    classes:['Cleric','Druid','Bard'],
    concentration:false, ritual:false,
    save:null,
    damage:{dice:'1d4 + spellcasting modifier', type:'healing', scaling:'+1d4 per slot level above 1st'},
    desc:`<p>A creature of your choice that you can see within range regains hit points equal to <strong>1d4 + your spellcasting ability modifier</strong>. This spell has no effect on undead or constructs.</p>`,
    upcast:'When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st.',
    flavorText:'Bonus action, 60ft range, picks someone up from 0 HP while you still take your full action to attack or do something useful. The single most important healing spell in the game.'
  },
  {
    name:'Shield', level:'1', school:'Abjuration',
    castTime:'1 reaction', range:'Self', components:'V, S', duration:'1 round',
    classes:['Wizard','Sorcerer'],
    concentration:false, ritual:false,
    save:null, damage:null,
    desc:`<p>An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a <strong>+5 bonus to AC</strong>, including against the triggering attack, and you take no damage from <em>magic missile</em>.</p>`,
    upcast:null,
    flavorText:'Cast as a reaction when you would be hit. A +5 to AC is enormous at any level — it can turn a 21 attack roll into a miss. Arguably the best defensive spell in the entire game.'
  },
  {
    name:'Burning Hands', level:'1', school:'Evocation',
    castTime:'1 action', range:'Self (15ft cone)', components:'V, S', duration:'Instantaneous',
    classes:['Wizard','Sorcerer'],
    concentration:false, ritual:false,
    save:{type:'DEX', effect:'half damage'},
    damage:{dice:'3d6', type:'fire', scaling:'+1d6 per slot level above 1st'},
    desc:`<p>As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a <strong>15-foot cone</strong> must make a Dexterity saving throw. A creature takes <strong>3d6 fire damage</strong> on a failed save, or half as much on a successful one.</p><p>The fire ignites any flammable objects in the area that aren't being worn or carried.</p>`,
    upcast:'When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.',
    flavorText:'Clear a corridor of goblins in one action. Devastating against groups, useless against a single tank. Know when to use it.'
  },
  {
    name:'Thunderwave', level:'1', school:'Evocation',
    castTime:'1 action', range:'Self (15ft cube)', components:'V, S', duration:'Instantaneous',
    classes:['Wizard','Sorcerer','Druid','Bard'],
    concentration:false, ritual:false,
    save:{type:'CON', effect:'half damage, not pushed'},
    damage:{dice:'2d8', type:'thunder', scaling:'+1d8 per slot level above 1st'},
    desc:`<p>A wave of thunderous force sweeps out from you. Each creature in a <strong>15-foot cube</strong> originating from you must make a Constitution saving throw. On a failed save, a creature takes <strong>2d8 thunder damage</strong> and is pushed 10 feet away from you. On a success, the creature takes half damage and isn't pushed.</p><p>In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away, and the spell emits a thunderous boom audible out to 300 feet.</p>`,
    upcast:'When cast with a higher slot, damage increases by 1d8 per slot level above 1st.',
    flavorText:'Push everything away and make noise. Perfect for breaking out of a grapple, or knocking enemies off ledges. The 300ft noise radius will bring every guard in the dungeon, so plan accordingly.'
  },
  {
    name:'Sleep', level:'1', school:'Enchantment',
    castTime:'1 action', range:'90ft', components:'V, S, M (sand, rose petals)', duration:'1 minute',
    classes:['Wizard','Sorcerer','Bard'],
    concentration:false, ritual:false,
    save:null, damage:null,
    desc:`<p>This spell sends creatures into a magical slumber. Roll <strong>5d8</strong>; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).</p><p>Starting with the creature with the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone wakes the sleeper. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected. <strong>Undead and creatures immune to being charmed aren't affected.</strong></p>`,
    upcast:'When cast with a higher slot, roll an additional 2d8 per slot level above 1st.',
    flavorText:'At level 1 this is arguably broken — 5d8 is roughly 22 HP, which knocks out most groups of early enemies. It doesn\'t ask for a save. It just works. Useless against undead.'
  },
  {
    name:'Detect Magic', level:'1', school:'Divination',
    castTime:'1 action', range:'Self', components:'V, S', duration:'Concentration, up to 10 minutes',
    classes:['Wizard','Sorcerer','Cleric','Druid','Bard','Paladin','Ranger'],
    concentration:true, ritual:true,
    save:null, damage:null,
    desc:`<p>For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.</p><p>The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.</p>`,
    upcast:null,
    flavorText:'Cast as a ritual — costs no spell slot. Standard practice before opening any chest, walking through any door, or trusting any "helpful" stranger in a dungeon.'
  },
  {
    name:'Identify', level:'1', school:'Divination',
    castTime:'1 minute', range:'Touch', components:'V, S, M (pearl worth 100gp, owl feather)', duration:'Instantaneous',
    classes:['Wizard','Bard','Artificer'],
    concentration:false, ritual:true,
    save:null, damage:null,
    desc:`<p>You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are.</p><p>If the item was created by a spell, you learn which spell created it. If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.</p>`,
    upcast:null,
    flavorText:'Cast as a ritual. The party just found a glowing sword — this tells you what it actually does. Invaluable. Keep the pearl; it\'s a material component not consumed on casting.'
  },
  {
    name:'Inflict Wounds', level:'1', school:'Necromancy',
    castTime:'1 action', range:'Touch', components:'V, S', duration:'Instantaneous',
    classes:['Cleric'],
    concentration:false, ritual:false,
    save:null,
    damage:{dice:'3d10', type:'necrotic', scaling:'+1d10 per slot level above 1st'},
    desc:`<p>Make a melee spell attack against a creature you can reach. On a hit, the target takes <strong>3d10 necrotic damage</strong>.</p>`,
    upcast:'When cast with a higher slot, damage increases by 1d10 per slot level above 1st.',
    flavorText:'Melee spell attack, touch range. Clerics who want to be aggressive love this. High variance but a top roll is terrifying. The look on a player\'s face when they roll 30 damage at level 1.'
  },
  {
    name:"Bless", level:'1', school:'Enchantment',
    castTime:'1 action', range:'30ft', components:'V, S, M (holy water)', duration:'Concentration, up to 1 minute',
    classes:['Cleric','Paladin'],
    concentration:true, ritual:false,
    save:null, damage:null,
    desc:`<p>You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or saving throw before the spell ends, the target can roll a <strong>d4</strong> and add the number rolled to the attack roll or saving throw.</p>`,
    upcast:'When cast with a higher slot, you can target one additional creature for each slot level above 1st.',
    flavorText:'Concentration, but d4 added to attack rolls and saves for three party members. In a boss fight this spell wins encounters. The debate between Bless and Healing Word as 1st level action is one of D&D\'s great arguments.'
  },
  {
    name:'Charm Person', level:'1', school:'Enchantment',
    castTime:'1 action', range:'30ft', components:'V, S', duration:'1 hour',
    classes:['Wizard','Sorcerer','Bard','Druid','Warlock'],
    concentration:false, ritual:false,
    save:{type:'WIS', effect:'negates'},
    damage:null,
    desc:`<p>You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a <strong>friendly acquaintance</strong>.</p><p>When the spell ends, the creature knows it was charmed by you.</p>`,
    upcast:'When cast with a higher slot, you can target one additional creature for each slot level above 1st.',
    flavorText:'It regards you as a friendly acquaintance, not a servant. You can\'t make it betray its allies directly, but you can have a very productive conversation. The best social tool at 1st level.'
  },
  {
    name:'Fog Cloud', level:'1', school:'Conjuration',
    castTime:'1 action', range:'120ft', components:'V, S', duration:'Concentration, up to 1 hour',
    classes:['Wizard','Sorcerer','Druid','Ranger'],
    concentration:true, ritual:false,
    save:null, damage:null,
    desc:`<p>You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is <strong>heavily obscured</strong>. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.</p>`,
    upcast:'When cast with a higher slot, the radius of the fog increases by 20 feet for each slot level above 1st.',
    flavorText:'Blind everything in a radius, including your party. Best used offensively — drop it on ranged enemies to neutralize their advantage. Combined with a rogue\'s Blindfighting or blindsense, it becomes a serious weapon.'
  },
  {
    name:'Heroism', level:'1', school:'Enchantment',
    castTime:'1 action', range:'Touch', components:'V, S', duration:'Concentration, up to 1 minute',
    classes:['Bard','Paladin'],
    concentration:true, ritual:false,
    save:null, damage:null,
    desc:`<p>A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being frightened and gains temporary hit points equal to your <strong>spellcasting ability modifier</strong> at the start of each of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell.</p>`,
    upcast:'When cast with a higher slot, you can target one additional creature for each slot level above 1st.',
    flavorText:'Concentration for sustained temporary HP each round plus frightened immunity. Against a dragon or banshee whose fear effect would otherwise end a fight, this is the spell you prepared for.'
  },
  {
    name:'Feather Fall', level:'1', school:'Transmutation',
    castTime:'1 reaction', range:'60ft', components:'V, M (small feather)', duration:'1 minute',
    classes:['Wizard','Sorcerer','Bard','Artificer'],
    concentration:false, ritual:false,
    save:null, damage:null,
    desc:`<p>Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes <strong>no falling damage</strong> and can land on its feet, and the spell ends for that creature.</p>`,
    upcast:null,
    flavorText:'Reaction cast — means it fires when you\'re already falling. Essential in environments with pits, cliffs, or flying enemies. The one time you don\'t prepare it is the one time it matters.'
  },

  // ===================== 2ND LEVEL =====================
  {
    name:'Shatter', level:'2', school:'Evocation',
    castTime:'1 action', range:'60ft', components:'V, S, M (chip of mica)', duration:'Instantaneous',
    classes:['Wizard','Sorcerer','Bard','Warlock'],
    concentration:false, ritual:false,
    save:{type:'CON', effect:'half damage'},
    damage:{dice:'3d8', type:'thunder', scaling:'+1d8 per slot level above 2nd'},
    desc:`<p>A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes <strong>3d8 thunder damage</strong> on a failed save, or half as much on a successful one.</p><p>A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw. A nonmagical object that isn't being worn or carried takes the damage if it's in the spell's area.</p>`,
    upcast:'When cast with a higher slot, damage increases by 1d8 per slot level above 2nd.',
    flavorText:'Destroys objects. Drops metal-armored enemies to disadvantage. Useful underground where the noise can cause tunnel collapses if your DM is inventive. Good crowd control radius.'
  },
  {
    name:'Hold Person', level:'2', school:'Enchantment',
    castTime:'1 action', range:'60ft', components:'V, S, M (iron shard)', duration:'Concentration, up to 1 minute',
    classes:['Wizard','Sorcerer','Cleric','Druid','Bard','Warlock'],
    concentration:true, ritual:false,
    save:{type:'WIS', effect:'negates (repeated each turn)'},
    damage:null,
    desc:`<p>Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be <strong>paralyzed</strong> for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.</p>`,
    upcast:'When cast with a higher slot, you can target one additional humanoid for each slot level above 2nd.',
    flavorText:'Paralyzed means all attacks against them are made with advantage and all melee hits within 5ft are critical hits. This turns a boss fight completely — one failed save and you\'re critting every round.'
  },
  {
    name:'Invisibility', level:'2', school:'Illusion',
    castTime:'1 action', range:'Touch', components:'V, S, M (lash of an eyelash)', duration:'Concentration, up to 1 hour',
    classes:['Wizard','Sorcerer','Bard','Warlock','Artificer'],
    concentration:true, ritual:false,
    save:null, damage:null,
    desc:`<p>A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person. The spell ends for a target that attacks or casts a spell.</p>`,
    upcast:'When cast with a higher slot, you can target one additional creature for each slot level above 2nd.',
    flavorText:'Invisible means attacks against you have disadvantage and your attacks have advantage. More importantly, it enables scouting, escape, theft, and social infiltration that combat spells never can.'
  },
  {
    name:'Scorching Ray', level:'2', school:'Evocation',
    castTime:'1 action', range:'120ft', components:'V, S', duration:'Instantaneous',
    classes:['Wizard','Sorcerer'],
    concentration:false, ritual:false,
    save:null,
    damage:{dice:'3 rays × 2d6', type:'fire', scaling:'+1 ray per slot level above 2nd'},
    desc:`<p>You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several. Make a ranged spell attack for each ray. On a hit, the target takes <strong>2d6 fire damage</strong>.</p>`,
    upcast:'When cast with a higher slot, you create one additional ray for each slot level above 2nd.',
    flavorText:'Three separate attack rolls lets you spread or focus damage. High average damage but all fire, which has a lot of resistances at higher levels. At low levels, very few things resist fire.'
  },
  {
    name:'Misty Step', level:'2', school:'Conjuration',
    castTime:'1 bonus action', range:'Self', components:'V', duration:'Instantaneous',
    classes:['Wizard','Sorcerer','Warlock','Paladin'],
    concentration:false, ritual:false,
    save:null, damage:null,
    desc:`<p>Briefly surrounded by silvery mist, you teleport up to <strong>30 feet to an unoccupied space that you can see</strong>.</p>`,
    upcast:null,
    flavorText:'Bonus action teleport. Breaks grapples. Bypasses walls, bars, and locked doors if you can see through them. One of the most useful escape-and-reposition spells in the game.'
  },
  {
    name:'Silence', level:'2', school:'Illusion',
    castTime:'1 action', range:'120ft', components:'V, S', duration:'Concentration, up to 10 minutes',
    classes:['Cleric','Bard','Ranger'],
    concentration:true, ritual:true,
    save:null, damage:null,
    desc:`<p>For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it.</p><p>Casting a spell that includes a verbal component is impossible there.</p>`,
    upcast:null,
    flavorText:'The enemy caster\'s nightmare. A cleric who drops Silence on the enemy wizard has just taken their most dangerous threat off the board. Works offensively as much as defensively.'
  },
  {
    name:'Web', level:'2', school:'Conjuration',
    castTime:'1 action', range:'60ft', components:'V, S, M (spider web)', duration:'Concentration, up to 1 hour',
    classes:['Wizard','Sorcerer'],
    concentration:true, ritual:false,
    save:{type:'DEX', effect:'not restrained; STR check to escape'},
    damage:null,
    desc:`<p>You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area.</p><p>If the webs aren't anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet.</p><p>Each creature that starts its turn in the webs or that enters them during its turn must make a Dexterity saving throw. On a failed save, the creature is <strong>restrained</strong> as long as it remains in the webs or until it breaks free. A restrained creature can use its action to make a Strength check against your spell save DC. If it succeeds, it is no longer restrained.</p><p>The webs are flammable — fire damage destroys the webs and deals 2d4 fire damage.</p>`,
    upcast:null,
    flavorText:'Restrained means attacks against them have advantage and they have disadvantage on Dex saves. A 20ft cube of difficult terrain with area control is enormous. Combined with Fire Bolt, you can turn this into a bonfire.'
  },
  {
    name:'Mirror Image', level:'2', school:'Illusion',
    castTime:'1 action', range:'Self', components:'V, S', duration:'1 minute',
    classes:['Wizard','Sorcerer','Warlock'],
    concentration:false, ritual:false,
    save:null, damage:null,
    desc:`<p>Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting position so it's impossible to track which image is real. You can use your action to dismiss the illusory duplicates.</p><p>Each time a creature targets you with an attack, roll a d20 to determine whether the attack instead targets one of your duplicates. With 3 duplicates: 6 or greater → hits duplicate. Destroyed when hit. No effect from area attacks, attacks that don't require rolls, or if attacker has blindsight/truesight.</p>`,
    upcast:null,
    flavorText:'No concentration. Three charges of attack-deflection. Against single-target attackers this effectively triples your HP. Devastating against the big melee boss who\'d otherwise one-shot you.'
  },
  {
    name:'Spiritual Weapon', level:'2', school:'Evocation',
    castTime:'1 bonus action', range:'60ft', components:'V, S', duration:'1 minute (no concentration)',
    classes:['Cleric'],
    concentration:false, ritual:false,
    save:null,
    damage:{dice:'1d8 + spellcasting modifier', type:'force', scaling:'+1d8 per 2 slot levels above 2nd'},
    desc:`<p>You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes <strong>1d8 + your spellcasting ability modifier</strong> force damage.</p><p>As a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it.</p>`,
    upcast:'When cast with a slot of 3rd or 4th level, damage increases by 1d8. 5th or 6th: another 1d8. 7th+: another 1d8.',
    flavorText:'Bonus action cast, no concentration, force damage every round for a minute. The cleric\'s defining action economy spell. Cast this, then Toll the Dead, every single turn. It\'s not glamorous but it\'s powerful.'
  },
  {
    name:'Blindness/Deafness', level:'2', school:'Necromancy',
    castTime:'1 action', range:'30ft', components:'V', duration:'1 minute',
    classes:['Cleric','Sorcerer','Bard','Wizard'],
    concentration:false, ritual:false,
    save:{type:'CON', effect:'negates (repeated each turn)'},
    damage:null,
    desc:`<p>You can blind or deafen a foe. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is either <strong>blinded or deafened</strong> (your choice) for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends.</p>`,
    upcast:'When cast with a higher slot, you can target one additional creature for each slot level above 2nd.',
    flavorText:'No concentration, and repeated saves use Constitution which many targets won\'t excel at. Blinded means the target has disadvantage on attacks and attackers have advantage. Straightforward and consistently powerful.'
  },

  // ===================== 3RD LEVEL =====================
  {
    name:'Fireball', level:'3', school:'Evocation',
    castTime:'1 action', range:'150ft', components:'V, S, M (bat guano, sulfur)', duration:'Instantaneous',
    classes:['Wizard','Sorcerer'],
    concentration:false, ritual:false,
    save:{type:'DEX', effect:'half damage'},
    damage:{dice:'8d6', type:'fire', scaling:'+1d6 per slot level above 3rd'},
    desc:`<p>A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes <strong>8d6 fire damage</strong> on a failed save, or half as much on a successful one.</p><p>The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.</p>`,
    upcast:'When cast with a higher slot, damage increases by 1d6 for each slot level above 3rd.',
    flavorText:'The spell that defines the fantasy of playing a wizard. 20-foot radius — that\'s enormous. 8d6 averages 28 damage. The issue is it doesn\'t discriminate. Many a party has been caught in one.'
  },
  {
    name:'Counterspell', level:'3', school:'Abjuration',
    castTime:'1 reaction', range:'60ft', components:'S', duration:'Instantaneous',
    classes:['Wizard','Sorcerer','Warlock'],
    concentration:false, ritual:false,
    save:null, damage:null,
    desc:`<p>You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of <strong>3rd level or lower</strong>, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the creature's spell fails and has no effect.</p>`,
    upcast:'When cast with a higher slot, a spell automatically fails if its level is equal to or less than the level of the spell slot you used.',
    flavorText:'The most powerful single spell in the game by some measures. The enemy lich is casting Finger of Death? Counterspell. The dragon is doing something magical? Counterspell. It creates an entire layer of tactical tension.'
  },
  {
    name:'Lightning Bolt', level:'3', school:'Evocation',
    castTime:'1 action', range:'Self (100ft line)', components:'V, S, M (fur, glass rod)', duration:'Instantaneous',
    classes:['Wizard','Sorcerer'],
    concentration:false, ritual:false,
    save:{type:'DEX', effect:'half damage'},
    damage:{dice:'8d6', type:'lightning', scaling:'+1d6 per slot level above 3rd'},
    desc:`<p>A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes <strong>8d6 lightning damage</strong> on a failed save, or half as much on a successful one.</p><p>The lightning ignites flammable objects in the area that aren't being worn or carried.</p>`,
    upcast:'When cast with a higher slot, damage increases by 1d6 for each slot level above 3rd.',
    flavorText:'Same damage as Fireball but in a 100ft line. Better in corridors. Lightning damage has fewer resistances than fire at high levels. The argument between this and Fireball is mostly about your dungeon\'s geometry.'
  },
  {
    name:'Hypnotic Pattern', level:'3', school:'Illusion',
    castTime:'1 action', range:'120ft', components:'S, M (glowing stick or phosphorescent moss)', duration:'Concentration, up to 1 minute',
    classes:['Wizard','Sorcerer','Bard','Warlock'],
    concentration:true, ritual:false,
    save:{type:'WIS', effect:'negates'},
    damage:null,
    desc:`<p>You create a twisting pattern of colors that weaves through the air inside a 30-foot cube within range. The pattern appears for a moment and vanishes. Each creature in the area who sees the pattern must make a Wisdom saving throw. On a failed save, the creature becomes <strong>charmed</strong> for the duration.</p><p>While charmed by this spell, the creature is <strong>incapacitated</strong> and has a speed of 0. The spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor.</p>`,
    upcast:null,
    flavorText:'Can disable an entire mob in one action if they all fail the save. Incapacitated means they can\'t do anything. This is the spell that turns 8-on-4 fights into 4-on-4 fights. Concentration is worth it.'
  },
  {
    name:"Haste", level:'3', school:'Transmutation',
    castTime:'1 action', range:'30ft', components:'V, S, M (shaving of licorice root)', duration:'Concentration, up to 1 minute',
    classes:['Wizard','Sorcerer'],
    concentration:true, ritual:false,
    save:null, damage:null,
    desc:`<p>Choose a willing creature that you can see within range. Until the spell ends, the target's speed is doubled, it gains a <strong>+2 bonus to AC</strong>, it has advantage on Dexterity saving throws, and it gains an <strong>additional action on each of its turns</strong>. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action.</p><p>When the spell ends, the target can't move or take actions until after its next turn, as a wave of lethargy sweeps over it.</p>`,
    upcast:null,
    flavorText:'Cast on your Fighter and double their damage output. +2 AC, Dex save advantage, and a full extra attack. The lethargy at the end hurts but most combats are over well before that matters.'
  },
  {
    name:'Spirit Guardians', level:'3', school:'Conjuration',
    castTime:'1 action', range:'Self (15ft radius)', components:'V, S, M (holy symbol)', duration:'Concentration, up to 10 minutes',
    classes:['Cleric'],
    concentration:true, ritual:false,
    save:{type:'WIS', effect:'half damage'},
    damage:{dice:'3d8', type:'radiant or necrotic', scaling:'+1d8 per slot level above 3rd'},
    desc:`<p>You call forth spirits to protect you. They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey. If you are evil, they appear fiendish.</p><p>When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. An affected creature's speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a Wisdom saving throw. On a failed save, the creature takes <strong>3d8 radiant or necrotic damage</strong>. On a success, it takes half as much damage.</p>`,
    upcast:'When cast with a higher slot, damage increases by 1d8 for each slot level above 3rd.',
    flavorText:'Walk into melee, everything around you takes damage every round and is slowed. The cleric wading into the front line while everything near them dies slowly is one of D&D\'s great images. Concentration is the only real cost.'
  },
  {
    name:'Fly', level:'3', school:'Transmutation',
    castTime:'1 action', range:'Touch', components:'V, S, M (wing feather)', duration:'Concentration, up to 10 minutes',
    classes:['Wizard','Sorcerer','Warlock','Artificer'],
    concentration:true, ritual:false,
    save:null, damage:null,
    desc:`<p>You touch a willing creature. The target gains a flying speed of <strong>60 feet</strong> for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall.</p>`,
    upcast:'When cast with a higher slot, you can target one additional creature for each slot level above 3rd.',
    flavorText:'A 60ft fly speed changes every combat situation. You\'re no longer constrained by the floor. Most melee enemies can\'t reach you. Many ranged encounters become trivial. Most importantly: it\'s just cool.'
  },
  {
    name:'Revivify', level:'3', school:'Necromancy',
    castTime:'1 action', range:'Touch', components:'V, S, M (diamonds worth 300gp)', duration:'Instantaneous',
    classes:['Cleric','Paladin','Druid'],
    concentration:false, ritual:false,
    save:null, damage:null,
    desc:`<p>You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can't return to life a creature that has died of old age, nor can it restore any missing body parts.</p>`,
    upcast:null,
    flavorText:'The diamonds cost 300gp and are consumed. A party without this spell prepared when someone dies is in trouble. The one-minute window means you cannot dawdle — end the fight, then Revivify.'
  },
];

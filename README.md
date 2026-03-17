# D&D Campaign Hub

A self-contained, browser-based toolset for Dungeon Masters. Everything runs as plain HTML/CSS/JavaScript files — no server, no build step, no external dependencies beyond Google Fonts. All data is persisted in `localStorage`.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | **Hub** — create, open, and delete campaigns; load a campaign from a JSON file |
| `campaign.html` | **Campaign** — the main DM workspace: campaign notes, dice roller, encounter tracker, PC management, DM notes (Markdown), Atlas (regions & encounters), and barracks (NPCs & monsters) |
| `character_creator.html` | **Character Creator** — build player characters, NPCs, and monsters and save them to the Vault |
| `atlas.html` | **Atlas** — browse and manage the registry of regions and encounters; generate content; deploy entries to any campaign |
| `monster_manual.html` | **Monster Manual** — field guide listing 3,000+ creatures by type and CR; full stat blocks with traits, actions, legendary actions, saves, and resistances; add any monster to the active campaign |
| `spellbook.html` | **Spellbook** — filterable reference for all D&D 5e spells by level, school, and class |
| `vault.html` | **Vault** — browse all saved characters, NPCs, and monsters; deploy them to any campaign |

## Data Files

| File | Contents |
| --- | --- |
| `monsters_data.js` | Compiled monster database — 3,083 monsters from the 5e SRD (Open5e API), Tome of Beasts, Creature Codex, and supplemental CSVs. Loaded by `monster_manual.html`. |
| `spells_data.js` | Full D&D 5e spell list used by the Spellbook and PC spell cards. |

## Data Storage

All state is stored in `localStorage` under the following keys:

| Key | Contents |
| --- | --- |
| `dndToolsCampaigns` | Array of campaign objects |
| `dndToolsActiveCampaignId` | ID string of the currently open campaign |
| `dndToolsVault` | Unified vault object `{ pcs, npcs, monsters }` |
| `dndToolsMap` | Atlas registry object `{ regions, encounters }` |
| `dndToolsAddLocationToCampaign` | Handoff key: encounter queued for import into the active campaign |
| `dndToolsAddMonsterToCampaign` | Handoff key: monster name queued for import into the active campaign |

Legacy keys (`dndToolsLocations`, `dndToolsPlayerCharacters`, `dndToolsNpcProfiles`) are migrated automatically on first load.

## Features

### Campaign Workspace

- **Multiple campaigns** — each with its own PCs, NPCs, monsters, encounters, regions, and notes
- **Encounter tracker** — active region panel showing all combatants in initiative order; HP tracking; status flags
- **Calculate Experience** — button on the active region that sums XP of all defeated monsters (currentHp = 0) for manual distribution to players
- **Dice roller** — standard polyhedral dice (d4–d100) with roll history

### Player Characters

- **PC cards** — HP tracking, initiative, AC, speed, ability scores, gold, XP, and level
- **Spell slots** — levels 1–9, with editable available count and max; Long Rest button restores all slots
- **Known spells** — add from the full spell list; click any spell for its full description; mark spells as active with a checkbox to track usage
- **XP & levelling** — XP progress bar with thresholds per level

### Monsters & NPCs

- **Barracks** — unified sortable/filterable table for all NPCs and monsters; shows Role/CR and XP value for monsters
- **Monster Manual** — 3,083 creatures filterable by all 14 types and CR 0–30; full stat sheets with saving throws, skills, traits, actions, reactions, legendary actions, condition immunities, and resistances
- **XP values** — displayed on every monster in the Manual list, stat sheet, Vault, and campaign barracks

### World Building

- **Atlas** — hierarchical regions and encounters with a built-in name/detail generator; deploy to any campaign directly from the registry
- **Encounter builder** — embedded in the Atlas modal: Setting Description, Environment & Hazards, Encounter Setup, Outcome / Reward fields
- **Region builder** — embedded in the Atlas modal with blurb and encounter assignment

### Notes & Export

- **DM Notes** — full-page Markdown editor with toolbar and live preview; searchable
- **Campaign Notes** — collapsible Markdown note area
- **Export / Import** — download a full campaign as a JSON file; reload it on any machine
- **Encounters CSV export** — export all encounters as a spreadsheet

## Getting Started

1. Clone or download the repository.
2. Open `index.html` in a modern browser (Chrome, Firefox, Edge).
3. Enter a campaign name and click **+ Create Campaign**, then click **Open Campaign**.
4. Use the nav bar to jump between tools. The **Campaign** link is hidden until a campaign is active.

No installation or internet connection is required after the page first loads Google Fonts.

## File Structure

```text
D-D-Tools/
├── index.html              Hub / campaign list
├── campaign.html           Main campaign workspace
├── character_creator.html  PC / NPC / monster builder
├── atlas.html              Atlas — region & encounter registry
├── monster_manual.html     Monster field guide (3,083 creatures)
├── spellbook.html          Spell reference
├── vault.html              Saved entity browser
├── monsters_data.js        Compiled monster database
├── spells_data.js          Full spell list
└── README.md               This file
```

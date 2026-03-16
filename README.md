# D&D Campaign Hub

A self-contained, browser-based toolset for Dungeon Masters. Everything runs as plain HTML/CSS/JavaScript files — no server, no build step, no external dependencies beyond Google Fonts. All data is persisted in `localStorage`.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | **Hub** — create, open, and delete campaigns; load a campaign from a JSON file |
| `campaign.html` | **Campaign** — the main DM workspace: campaign notes, dice roller, encounter tracker, PC management, DM notes (Markdown), map (regions & locations), and barracks (NPCs & monsters) |
| `character_creator.html` | **Character Creator** — build player characters, NPCs, and monsters and save them to the Vault |
| `location_creator.html` | **Map Creator** — build taverns, dungeons, ruins, and other locations; attach them to regions; save to the Atlas |
| `atlas.html` | **Atlas** — browse and manage the registry of regions and locations; deploy entries to any campaign |
| `monster_manual.html` | **Monster Manual** — field guide listing creatures by type and CR; add any monster to the active campaign |
| `spellbook.html` | **Spellbook** — filterable reference for all D&D 5e spells by level, school, and class |
| `vault.html` | **Vault** — browse all saved characters, NPCs, and monsters; deploy them to any campaign |

## Data Storage

All state is stored in `localStorage` under the following keys:

| Key | Contents |
| --- | --- |
| `dndToolsCampaigns` | Array of campaign objects |
| `dndToolsActiveCampaignId` | ID string of the currently open campaign |
| `dndToolsVault` | Unified vault object `{ pcs, npcs, monsters }` |
| `dndToolsMap` | Atlas registry object `{ regions, locations }` |
| `dndToolsAddLocationToCampaign` | Handoff key: location ID queued for import into the active campaign |
| `dndToolsAddMonsterToCampaign` | Handoff key: monster name queued for import into the active campaign |

Legacy keys (`dndToolsLocations`, `dndToolsPlayerCharacters`, `dndToolsNpcProfiles`) are migrated automatically on first load.

## Features

- **Campaign management** — multiple campaigns, each with its own PCs, NPCs, monsters, areas, and notes
- **PC cards** — HP tracking, initiative, status, XP, spell slots (levels 1–9), and known spells
- **Barracks** — unified sortable/filterable table for all NPCs and monsters in the campaign
- **Encounter tracker** — initiative-order panel pulling from all active combatants
- **Dice roller** — standard polyhedral dice with roll history
- **DM Notes** — full-page Markdown editor with live preview
- **Campaign Notes** — collapsible Markdown note area on the campaign page
- **Atlas** — hierarchical regions and locations; deploy to any campaign directly from the registry
- **Vault deploy** — push any saved character or creature directly into an open campaign
- **Export / Import** — download a campaign as a JSON file; reload it on any machine

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
├── location_creator.html   Location and region builder
├── atlas.html              Atlas — region & location registry browser
├── monster_manual.html     Monster field guide
├── spellbook.html          Spell reference
├── vault.html              Saved entity browser
├── serve.py                Optional local dev server (Python 3)
└── README.md               This file
```

---
title: "General Info"
description: "Core Mechanics"
---

## Ticks
NGU Idle operates on a tick system with a tick rate of 1/50th of a second, or 50 ticks/second. The game is updated every tick, and most features are limited to gaining at most one level/tick. This limits most features to a speed cap of 50 levels/second (or 4.32 million levels/day). When a feature is running at this max speed of 50 levels/second, this is referred to as BB.

## Resources
Allocating resources in different features is one of the core mechanics of NGU Idle. There are three resources: Energy, Magic, and R3. Each resource is represented by a bar in the top left, which fills over time from the beginning of the rebirth once the resource has been unlocked.

Each resource has four properties:
- Speed - Buying speed increases the rate that the resource bar fills.
    - Capped at 50
- Power - Increases the effectiveness of the resource
    - Capped at 1e18 (pre-potions)
- Cap - Increases the maximum quantity of the resource
    - Capped at 9e18
- Bars - Increases the amount of resource granted each time the bar is filled
    - Capped at 1e18 (pre-bar bar)

As the resource bar fills, that resource is generated as idle resource, which is available to be allocated into features. Resources will be generated until you reach your total resource cap. When you rebirth, your available resources will be reset to zero, but you always keep your resource properties (speed/power/cap/bars).

When allocating resources, the output of your resources is generally amount allocated * power:
- Basic Training and Wandoos are not affected by Power
- Advanced Training only uses the square root of power


## Difficulties
NGU Idle has three difficulties, visible on the Rebirth page. The game starts on Normal difficulty, and the player is able to progress through each difficulty chronologically. Each successive difficulty adds new boss stories, adventure zones, titans, and features to explore.

### Evil
Requirements to unlock: (on Normal difficulty)
- Defeat Boss 300 in Fight Boss
- Defeat T6v4 in Adventure Mode
- Must have an A/D modifier of at least 1m% (1e6%)
    - Can be achieved with 100k% Rich Jerks (300k EXP), 500% Rich Perks (40 PP), Newbie Stat Perk (1 PP)

Differences between Evil and Normal:
- Attack/Defense is divided by 1 nonillion (1e30)
- Augmentations are slowed down by 2.5 trillion (2.5e12)
- Time Machine is slowed down by 1 trillion (1e12)
- Blood Magic is slowed down by 1 billion (1e9)
- For Wandoos in Evil, each OS requires 1 million (1e6) times the previous OS
    - Evil Wandoos 98 has 1 trillion (1e12) times slower speed than Normal Wandoos 98
    - In Normal, the difference between each OS was 1 thousand (1e3)
- When rebirthing, boss power bonus is based on 1.5^boss beaten, instead of 2^boss beaten
- Drop Chance for all adventure zones/titans is cube-rooted
- ITOPOD base pp per kill is increased from (200 + floor) to (700 + floor)
- All Normal adventure zones are unlocked when adventure is unlocked
    - Evil adventure zones must be unlocked by defeating the corresponding boss in Evil
- There are new Evil Perks, Quirks, and NGUs

### Sadistic
Requirements to unlock: (on Evil difficulty)
- Defeat Boss 300 in Fight Boss
- Defeat T9v4 in Adventure Mode

Differences between Sadistic and Evil:
- Augmentations are slowed down by 1 quadrillion (1e15)
- Time Machine is slowed down by 1 trillion (1e12)
- Blood Magic is slowed down by 10 trillion (1e13)
- For Wandoos in Sadistic, each OS requires 1 million (1e6) times the previous OS
    - In addition, total Wandoos speed is divided by 1 trillion (1e12)
    - Sadistic Wandoos 98 has the same effective E/M requirement of Evil Wandoos XL
- When rebirthing, boss power bonus is based on 1.2^boss beaten, instead of 1.5
- ITOPOD base pp per kill is increased from (700 + floor) to (2000 + floor)
- All Normal and Evil adventure zones are unlocked when adventure is unlocked
    - Sadistic adventure zones are unlocked through fighting bosses in Sadistic
- There are new Sadistic Perks, Quirks, Wishes, and NGUs

## Saves
NGU Idle saves your progress through a text file representation of your progress. By default, these files are located in C:\Users\<Your Name>\AppData\LocalLow\NGU Industries\NGU Idle. It is highly recommended to save often, players that only depend on auto saves have rarely, but occasionally lost months of progress or quit from having their saves corrupt or be overridden.

There are a few methods of saving:
- Manual Saves - Clicking the ‘Save Game’ button allows you to save your game to a file
    - Once a day, the game also provides a little AP bonus for saving your game manually
    - After clicking the ‘Save Game’ button, while the game is waiting for you to decide a location/name for your file, the game is paused. This can be helpful in certain scenarios.
- Auto Save - Every 30 seconds, the game will auto-save your progress to a file
    - This file is always named the same way, so each save will override the previous save
    - When playing on Steam, the game will also save to the Steam cloud every 30 seconds
- Backup Saves - Every 30 minutes, the game will auto-save your progress
    - There are two backup save files, and the game will alternate between the two names

## Settings
- Number Display Style - changes how numbers are displayed
- UI Themes - changes the color scheme
- Tooltips - turns tooltips on/off
- Timed Tooltips - turns timed tooltips on/off
- Automatically Kill Titans - turns on/off AutoKill for titans while online
    - Note: This setting does not work while the game is closed. While offline, the game will always auto kill any titans possible. For titans with multiple versions, offline AK’s v1 only
- Check For Updates - does nothing, old setting from Kongregate days
- Titan HP Bars - changes the display for titan health, either 5 fancy color bars or 1 red bar
- Anti Fast Bar Flicker - changes how bars display progress
    - When a bar is at BB, if this setting is on, the bar is fully colored; if off, the bar is blank
- Sync Training - when on, will allocate same energy values to Attack/Defense basic trainings
    - Recommended setting: ON
- Loot Filter - turns on/off the loot filter
    - Requires the Basic Loot Filter purchase from EXP Shop > Adventure Special
    - Filter Titan Loot - applies the loot filter settings to titan drops
    - Filter Loot by Type - these determine what is filtered by the Basic Loot Filter
        - If the button is white/light: drops of this type are allowed, will drop in your inventory
        - If the button is grey/dark: drops of this type are thrown away before they drop
    - Filtering loot does not change the way loot drops, it just decides what loot is discarded
- Autoboost Recycled Boosts - changes whether Autoboost uses recycled boosts
    - If on, Autoboost will completely empty all boosts in inventory, using any recycled boosts
    - If off, Autoboost will use every boost once, leaving any recycled boosts in the inventory
    - Recommended setting: ON
- Unassign E/M on Loadout Swap?
    - If on, changing loadouts will unassign E/M from all features (including Basic Training)
    - As an alternative to using this setting, pressing the R/T/F keyboard buttons will unassign all Energy/Magic/R3 from all sources (but won’t unassign Energy from BT)
- EXP Purchase Confirmation Popups - turns on/off the confirmation modal for EXP shop
- ITOPOD Perk Confirmation Box - turns on/off the confirmation modal for ITOPOD perks
- Shakey Sales Text - turns on/off whether the sales text shakes in the AP shop
- Submit Highscores - does nothing, old setting from Kongregate
- Fancy Yggdrasil Bars - changes display of ygg fruits as they grow, fancy colors or plain red
- Simple Inventory Shortcuts - enables inventory shortcuts to be used without clicking
    - While on the inventory page, while hovering over an item, with the setting off
    - Holding A + clicking on an item uses all applicable boosts to the item
    - Holding D + clicking on an item will merge any copies of that item to that item
    - Turning the setting on allows for these shortcuts to remove the click, allowing you to just tap A or D while hovering on an item to boost/merge.
- Lazy ITOPOD Shifter - if purchased from the AP shop and turned on, will adjust your ITOPOD floor after every kill to your optimal floor
    - Note: If turned on, this will prevent you from climbing floors. Must be turned off to climb
- Auto Nuke - if purchase from the AP shop and turned on, will nuke bosses 10s after rebirthing, and every minute after
- Autosave Timer Display - turns on/off the timer for the Autosave in the corner

## Platforms
NGU Idle is available on the following four platforms, with only the first two up-to-date:
- [Steam](https://store.steampowered.com/app/1147690/NGU_IDLE/)
- [Kartridge](https://www.kartridge.com/games/somethingggg/ngu-idle)
- [Kongregate](https://www.kongregate.com/games/somethingggg/ngu-idle) (Build 1.220 - 1 patch behind Finale update) - only Mac-compatible platform
- [Armor Games](https://armorgames.com/ngu-idle-game/18444?fp=ng) (Build 0.423 - 2 years out of date)

NGU Idle saves can be imported to any platform on the same patch or later, but saves cannot be imported into past patches. So you can switch from any platform to Steam/Kartridge, but you cannot go back from Steam/Kartridge to Kongregate or Armor Games. 

Both Steam and Kartridge offer a one-time bonus of 7 free spins for playing on their platform.

There are no known plans for further platforms, updates, or porting to mobile.

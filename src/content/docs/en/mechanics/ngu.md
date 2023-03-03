---
title: "NGU"
description: "Numbers Go Up!"
---

Unlocked upon defeating T1 (Gordon Ramsay Bolton) and consuming ‘A Number’, NGU’s provide permanent buffs to numerous features that can be leveled with Energy/Magic. 

- Once unlocked, NGUs are permanently unlocked. All progress is kept across rebirths.
- E/M cost for each level increases linearly, level N→N+1 takes N+1 times the time of 0→1
    - Example: If level 0→1 takes 1 day, level 1→2 will take 2 days, level 2→3 takes 3 days
- At max speed, NGUs can gain 50 levels/second, or 4.32 million levels/day
    - Each NGU has a hardcap (max level) of 1 billion levels
    - It takes ~231.5 days from Level 0 to 1B at max speed the entire time

## Energy NGUs
- Augments - Improves effectiveness of augments
- Wandoos - Improves Wandoos leveling speed
- Respawn - Reduces time between enemies spawning in Adventure Mode
- Gold - Increases amount of gold dropped for a kill in Adventure Mode
- Adventure a - Improves adventure stats (Power, Toughness, Max HP, HP Regen)
- Power a - Improves Attack/Defense stats
- Drop Chance - Improves Drop Chance
- Magic NGU - Improves Magic NGU leveling speed
- PP - Improves PP gain per kill

## Magic NGUs
- Yggdrasil - Improves fruit yields from Yggdrasil
- Exp - Improves EXP gain
- Power b - Improves Attack/Defense stats
- Number - Improves Number when rebirthing. Number bonus is multiplied by the time factor
- Time Machine - Improves Time Machine gold production
- Energy NGU - Improves Energy NGU leveling speed
- Adventure b - Improves adventure stats (Power, Toughness, Max HP, HP Regen)

## Formulas

### Energy NGUs

| Energy NGU  | Effect per level | Softcap | Effect post-softcap                       | Base Cost\* |
| :---------: | :--------------: | :-----: | :---------------------------------------: | :---------: |
| Augments    | 1%               |         |                                           | 200B (2e11) |
| Wandoos     | 0.1%             |         |                                           | 200B (2e11) |
| Respawn     | 0.05%            | 400     | ![NGU Respawn](/ngu-guide/nguRespawn.png) | 200B (2e11) |
| Gold        | 1%               |         |                                           | 200B (2e11) |
| Adventure a | 0.1%             | 1000    | ![NGU Adv](/ngu-guide/nguAdvDC.png)       | 200B (2e11) |
| Power a     | 5%               |         |                                           | 200B (2e11) |
| Drop Chance | 0.1%             | 1000    | ![NGU DC](/ngu-guide/nguAdvDC.png)        | 20T (2e13)  |
| Magic NGU   | 0.1%             | 1000    | ![NGU MNGU](/ngu-guide/nguMNGU.png)       | 400T (4e14) |
| PP          | 0.05%            | 1000    | ![NGU PP](/ngu-guide/nguPP.png)           | 10q (1e16)  |

\* Base Cost = Time in seconds for Level 0 to Level 1 with 1 Energy Power, 1 Energy Cap

### Magic NGUs

| Magic NGU    | Effect per level | Softcap | Effect post-softcap                     | Base Cost\*   |
| :----------: | :--------------: | :-----: | :-------------------------------------: | :-----------: |
| Yggdrasil    | 0.1%             | 400     | ![NGU YGG](/ngu-guide/nguYGG.png)       | 400B (4e11)   |
| Exp          | 0.01%            | 2000    | ![NGU EXP](/ngu-guide/nguEXP.png)       | 1.2T (1.2e12) |
| Power b      | 1%               |         |                                         | 4T (4e12)     |
| Number       | 1%               | 1000    | ![NGU NUMBER](/ngu-guide/nguNUMBER.png) | 12T (1.2e13)  |
| Time Machine | 0.2%             | 1000    | ![NGU TM](/ngu-guide/nguTM.png)         | 100T (1e14)   |
| Energy NGU   | 0.1%             | 1000    | ![NGU ENGU](/ngu-guide/nguMNGU.png)     | 1q (1e15)     |
| Adventure b  | 0.03%            | 1000    | ![NGU AdvB](/ngu-guide/nguAdvB.png)     | 10q (1e16)    |

\* Base Cost = Time in seconds for Level 0 to Level 1 with 1 Magic Power, 1 Magic Cap

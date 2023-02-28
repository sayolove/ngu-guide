---
title: "Beards"
description: "Beards"
---

Unlocked upon defeating T4 (UUG, The Unmentionable) and consuming ‘UUG’s Armpit Hair’, Beards of Power provide passive gains after your energy/magic have reached their cap.

## Beard Levels

Each beard has two types of levels: temporary and permanent
- Beards passively gain temporary levels after Energy/Magic has reached its cap
    - Beard speed is proportional to BarsPower for the utilized resource
- When you rebirth, active beards convert a portion of their temporary levels to permanent levels, based on how long the rebirth was
    - Permanent levels gained: min(TempLevelTimeFactor, TempLevel) 
    - The time factor starts at 0, then increases by ⅓ every hour until reaching a maximum of 8 at 24 hours.
    - The Five O’Clock Shadow perk speeds up the time factor, reducing the total time to reach the maximum time factor by 1 hour per level
- Temporary and permanent beard levels stack multiplicatively with each other
- Temporary levels are reset on rebirth, permanent levels persist through rebirths

There are 7 beards:
- Energy Beards:
    - Neckbeard (2) - Grants Drop Chance
    - Beard Cage (4) - Grants NGU speed
    - BEARd (6) - Grants Adventure stats
- Magic Beards:
    - Fu Manchu (1) - Grants Attack/Defense
    - Reverse Hitler (3) - Grants Number
    - LadyBeard (5) - Grants Wandoos speed
    - Golden (7) - Grants Gold Production (Time Machine)

Beard Slots: You can only have as may active beards as you have beard slots   
Unlocking Beards will provide one slot by default, up to 7 total slots can be obtained:
- 1 slot is given as a reward for completing Troll Challenge 4
- 1 slot can be bought with EXP under the Misc section for 50k EXP
- 4 slots can be bought from the Sellout Shop for AP (1st is 110k AP, after 225k AP)

Beard Speed Formula: Bars  Power  (1 + GearBeardSpeed)SpeedDivider  (level + 1)  BeardsSameResourceDiggerBeards
- Running multiple beards of the same resource type provides a small penalty to speed
    - Maxing out the Beardverse set reduces the penalty by 10%

## Beards

| Beard          | Speed Divider | Temp Bonus                       | Perm Bonus                        |
| :------------: | :-----------: | :------------------------------: | :-------------------------------: |
| Fu Manchu      | 10m (1e7)     | 5%                               | 1%                                |
| Neckbeard      | 30m (3e7)     | 0.05% <br> L^0.3 x 125.9 x 0.05% | 0.05% <br> L^0.33 x 102.4 x 0.05% |
| Reverse Hitler | 30m (3e7)     | 1% <br> L^0.5 x 31.7 x 1%        | 0.1% <br> L^0.5 x 31.7 x 0.1%     |
| Beard Cage     | 100m (1e8)    | 0.01% <br> L^0.3 x 125.0 x 0.01% | 0.02% <br> L^0.3 x 125.9 x 0.02%  |
| LadyBeard      | 100m (1e8)    | 0.1% <br> L^0.5 x 31.7 x 0.1%    | 0.2% <br> L^0.5 x 31.7 x 0.2%     |
| BEARd          | 300m (3e8)    | 0.1% <br> L^0.3 x 125.9 x 0.1%   | 0.05% <br> L^0.5 x 31.7 x 0.05%   |
| Golden Beard   | 300m (3e8)    | 0.2% <br> L^0.5 x 31.7 x 0.2%    | 0.5% <br> L^0.5 x 31.7 x 0.5%     |

Aside from Fu Manchu, all other beards reach a softcap at 1000 levels for both temp/perm
- For each box, the top number is the pre-softcap bonus per level for all levels up to 1000
- Then the bottom number is the post-softcap bonus per level after Level 1000
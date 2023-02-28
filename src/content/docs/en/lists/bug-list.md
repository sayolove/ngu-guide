---
title: "Known Bug List"
description: "bugs"
---

This is a list of commonly encountered known bugs. There are no plans to fix these bugs.   
This is not an exhaustive list, for a more “official” list, see the [NGU Idle Trello Board](https://trello.com/b/zs0GHDDP/ngu-idle).

- Bonus Titan EXP! (ITOPOD Perk 34): Supposed to only give bonus Titan EXP for 3/6/9 kills based on perk level, but online AKs do not reduce the count, so keeping the game open allows for constant bonus EXP on all online AKs
    - Getting online manual/idle or offline AK Titan kills will reduce the count, meaning that after 3 kills (at level 1), you will stop receiving bonus EXP for that Titan until you rebirth
- Loadout Item Display: Occasionally, hovering over items in the Loadouts sub-menu in the Inventory tab will not display item information, instead displaying an empty tooltip box
- Total Titan Kill Counter: Total Titan Kill only counts manual, idle, and offline AK kills
- T5 timer only counts down when offline: This means T5 is hiding in your menus and needs to be found for it to count down when online. It’s not supposed to count down offline.
- Offline Magic Beard calculations uses energy production to determine beard cap time
- QP Calculations: Small increases in QP Reward sometimes doesn’t change the actual QP reward, due to a floating point/display rounding error. QP rewards are calculated based on Minor Quests, then multiplied by the Major multiplier, which can lead to unexpected results
    - Maxing your first quest item is supposed to give 2% QP Rewards, but is actually input as 1.999% bonus in-game. 101.999% of 50 QP is still 50, which is doubled to 100 QP
- Wish Progress/Timer: Wish timers are not accurate due to floating point precision errors, and should be treated like approximations. Precision errors are more noticeable at larger times, with wishes longer than 7d 17d 12m being impossible to finish as progress will halt after 50%
- Cooking Legs: Legs contribute the cooking bonus for gear twice
- Cooking → THE END: After unlocking the Cooking tab, you can trigger THE END cutscene early without completing the game
- NGU Cap calculations break when BB cost > 9e18 hardcap: Instead of correctly calculating the Cap, will instead assign the max fraction of 9e18 available
- Offline Magic resource generation post-hardcap: If you go offline before resources have generated, and generate more idle magic than the hardcap, it will instead not have produced any Magic offline

Not Bugs, but commonly encountered:
- Can’t merge boosts: If you’ve maxed a boost, you can’t merge that boost type again. This is an intended feature, since you only want to max boosts once for the set bonus.
- Laptop sleep led to no progress overnight: This isn’t an NGU bug, this is based on your laptop’s sleep settings, it’s just freezing everything, which is why there’s no progress
    - To fix this issue, you can just Load your last save from the night before, which will calculate offline progress based on the time duration

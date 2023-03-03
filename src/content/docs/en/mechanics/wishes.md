---
title: "Wishes"
description: "Wishes"
---

Wishes are unlocked upon defeating Titan 8, The Godmother. Like perks or quirks, wishes grant permanent bonuses as they are leveled, but instead of obtaining levels with a currency, wishes are leveled by allocating all three resources to a wish and waiting for the wish to complete.

## Wish Slots
Wish slots determine how many wishes can be run at the same time, starting with one wish slot.   
Three more wish slots can be unlocked for a maximum of four:
- Pink Heart set bonus
- Evil Troll Challenge 7
- Evil Quirk 56 (50k QP)

Splitting resources equally among multiple wish slots provides the following relative speed:   
(There is no speed penalty for running multiple wishes, relative speed based on resource split)
- 1 slot: 100%
- 2 slots: 70% each
- 3 slots: 57% each
- 4 slots: 49.3% each

## Minimum Wish Time
By default, the minimum time to complete a wish is four hours. Once a wish has enough resources to run at minimum wish time, adding more resources to the wish will not increase the speed. The minimum wish time can be reduced to three hours through perks/quirks.

## Wish Math
The formula for base wish speed: ![Wish Speed](/wishSpeed.png)

The 6th root applies very harsh diminishing returns to resources allocated, so it’s not advised to overinvest resources into wishes. For example, doubling a single resource will only increase wish speed by 12.5%, regardless of how many resources you’ve allocated.

Note: Wish times are only approximations due to floating point precision errors in the math, with errors being more noticeable at longer wish times. In particular, any wish with a total time above 7 days, 17 hours, 12 minutes will become impossible to finish with progress halting at 50%.

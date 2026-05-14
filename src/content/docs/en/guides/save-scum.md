---
title: "Save Scumming"
description: "A controversial method to speed up the game"
---

Save scumming is an incredibly powerful method to speed up the game. Some find it controversial since it's not an intended feature, but it's not forbidden either. Use at your own discretion.

## How to Save Scum

1. Go to the Safe Zone, turn off Idle Attack, and save your game.
2. Load your save, then change adventure zones as many times as you want.
3. Congratulations — you now know how to save scum.

## How It Works

Titan drops are hourly or longer. You can manipulate your chances and kill them multiple times by exploiting how the game generates seeds. Every time you change an adventure zone or kill an enemy, the game generates a new seed that determines drop chances and other RNG outcomes. By changing zones and checking which seed yields your desired drop, you can effectively brute force your drops.

### Basic Example

If you're at T6v2 and want the Voodoo Doll, save scum until you get it. Since the game always auto-kills titans on the first version (even with AK turned off in settings), lower your stats below the v1 AK threshold by turning off BEARd, Adventure diggers, or removing gear. Wear your best Drop Chance gear.

1. Turn off Adventure stuff, wear your DC gear, go to Safe Zone, turn off Idle Attack, set T6 to v2, then save.
2. Load your save, advance one zone (Tutorial).
3. Turn on Adventure stuff, kill T6v2. If you don't get the Voodoo Doll, repeat step 2 but advance twice (Sewers).
4. Keep advancing zones. What matters is the number of zone changes, not the zone name.

For higher titan versions, you may be too powerful or trigger AK mechanics (24/5 kills) even after nerfing yourself. To prevent this, you can use Jshepler's mod, which has an offline disable feature.

### Advanced Seed Theory

NGU Idle uses XORshift 128-bit to generate seeds. Seeds may have large and small gaps between them — changing zones generates a new seed, but it may be closely positioned to the previous one, meaning only a partial change to item drops or trolls. To see more different seeds, move in larger gaps:

1. Move 2-3 zones at a time and scan drops per version.
2. If Tutorial and Sewers both drop only 1 unique titan drop, call that 1UD.
3. Keep advancing in bigger groups until you find 2UD.
4. Go back 1 by one to find the perimeter of the 2UD zone.
5. Once you know the perimeter, decide which 2 drops you want.

## Important Implementations

### Wanderer's Cane for Earlier CCOD

Hate waiting 30 hours for CCOD? Scum the Wanderer's Cane 5 times and shave 15 hours off an LRB. If you're feeling ambitious, you can scum CCOD immediately and save the full 30 hours (1% chance).

### Lucky Charm Scumming for BDW

You can also scum Lucky Charms. If you don't get any weapon drops, scum Lucky Charms until you do. Change a lot of zones to avoid overlap with your previous 30 minutes.

### T6v2 and T6v4 Accessories

Do an Advanced Training overnight when your stats are about half the titan's stats (less than 1 hour AT). Then scum for the v2 accessory and one-shot BAE at the same time. After getting both, run cNGUs and resume CBlock 2 next rebirth. Same approach for v4 (skip v3 — the accessory is mediocre). Both v2 and v4 accessories are incredibly strong for progression.

### Troll Challenge Scumming

This is extremely useful for Troll Challenges. The mechanism is the same as normal scumming, except save your game about 15 seconds before a big troll. Scumming Troll Challenges can complete them twice as fast or more.

- For 1 big troll per rebirth: avoid Broken Beard, 9x Boss Mult, and Ruin Everything.
- For 2+ big trolls per rebirth: avoid everything except 75% Random Menu.
- If you're ambitious, you can scum TC2 on the final Evil CBlock and TC1 on Evil entry for the biggest gains.

### Nuts / BEUC Scumming

The infamous Nuts and BEUC — items that can cost weeks or months to obtain. In vanilla, scum them by only reaching Boss 189 so you don't trigger T9 AK. Scumming BEUCs can save months of grinding, though a higher level BEUC isn't massively impactful. Highly recommended for your first 2 BEUCs (one to wear, one for daycare).

### Pit Scumming

Before throwing gold into the Money Pit, save your game. If the result isn't a shockwave, reload and adjust. This is incredibly useful because it saves hours or days of leveling pendants and looties.

### Advanced: Pit Running and Card Scumming

These techniques require Jshepler's mod for convenience.

**Pit Scumming (with mod):**
By a discovery from Lucius, even the Money Pit isn't immune to scumming. The pit seed can only be changed by throwing money, or if your money is at 0. With the mod, you can see your next pit reward. Keep money at 0 (kill only Boss 4), change adventure zones, and advance the pit until you get a daycare or equipment shockwave. This guarantees a shockwave every 2 throws — beating the base 40% chance.

**Card Scumming:**
With the mod, press Ctrl on the Cards menu to see what your tag would land on. Moving tags around changes which card type you receive. In vanilla, abuse the card recycling perk instead. When a card is about to spawn, save your game. Yeet a junk card to see what type you'd get. If the type matches one of your tags, adjust your tags until it lands on your preferred type. If the type stays the same regardless of tags, that card isn't scummable.

**Pit Running:**
The goal is to gather new Looty and Pendant tiers as fast as possible, especially Lootz — the strongest EM power item in the game. With 16 hours of pit running per day, you can gain 11-13 levels/day, reaching max tier in about a month.

Start pit running after T8v1 max, the early CBlock 4, and the Money Pit wish. You need enough gold-related stats to reach 1e50 gold within an hour. While pit running, have more bars than average — you'll reset E/M multiple times a day. Aim for under 30 minute fill time for R3 and under 10 minutes for E/M. Passive hack the entire time between Hackdays.

**Timeline:**
- Evil Challenges: Since your banks and Number are already ruined by pit running, do challenges when ready. Start TC7 when you have SIL and can run eNGU 24/7. Grab NNGU once a week.
- Hackdays: HD1 with A8/JRPG gear (also the starting point of T9 LRB). HD2 after acquiring BEUC and finishing NNGU 10. HD3 post-max Rad (potentially combinable with T9v4 LRB).
- E/M Buying: Buy up to 3M/1M around HD1. With GDL, aim to BB every eNGU. Resume to 6M/2M post-HD2 for more wish speed. Go up to 12M/4M as Sad approaches.

Stop pit running after reaching max tier — the climb to Boss 300 is harder than T9v4. After entering Sadistic, resume pitting until A9/Lootz are maxed.

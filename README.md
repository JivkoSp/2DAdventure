# 2DAdventure

This is a 2D Medieval adventure game where you can explore dangerous lands of medieval forests, kill forest and flying creatures, collect points, and get bonus life orbs. 
See if you can collect the required points for each level within the time limit to advance to the next level.

## 1. How the game looks

### Gameplay:

Download the gameplay video [here](https://github.com/JivkoSp/2DAdventure/files/9266736/GameReview.zip).

### Level-1:
<div style="text-align: center;">
  <img src="https://user-images.githubusercontent.com/97282923/183034063-65dd47da-5b23-4253-b396-9e27ffbe3200.PNG" alt="Level-1" width="400">
</div>

### Hitting monster:
<div style="text-align: center;">
  <img src="https://user-images.githubusercontent.com/97282923/183034353-f2e5f967-7394-4ef0-acba-1a42c344c104.PNG" alt="Hitting monster" width="400">
</div>

### Level-2:
<div style="text-align: center;">
  <img src="https://user-images.githubusercontent.com/97282923/183033979-0233e213-b3a3-4f15-aa60-715d38d886f9.PNG" alt="Level-2" width="400">
</div>

### Level-3:
<div style="text-align: center;">
  <img src="https://user-images.githubusercontent.com/97282923/183034122-93b3a497-7c82-42bc-9e72-83a65d240cb6.PNG" alt="Level-3" width="400">
</div>

### Game over:
<div style="text-align: center;">
  <img src="https://user-images.githubusercontent.com/97282923/183034209-d18cf2cf-dc72-4662-a68d-9d3dc8068acb.PNG" alt="Game over" width="400">
</div>

## 2. How the game works

The game is built using HTML canvas, which provides a JavaScript API for drawing on the browser.

### Patterns used:

The player is implemented using the State Design Pattern, where each state has unique functions that respond in specific ways:

- **Idle state:** Default state; can transition to Attack state by pressing 'd' longer for running; can jump by pressing 'w'.
- **Jump state:** Allows jumping; can attack by pressing 's' or move right with force by pressing 'd'; can move left by pressing 'a'.
- **Walking state:** Default movement state; transitions to Attack state by pressing 's' or Jump state by pressing 'w'.
- **Attacking state:** Allows attacking; transitions to Walking state by releasing 'd' or to Taunt state by pressing 's'.
- **Taunt state:** Allows taunting; transitions to Walking state by releasing 's'.

### Collision detection:

Sphere collision is used for collision detection:

- **Sphere collision:** Determines collision by calculating distance using the formula: `dist = sqrt(pow(dx,2) + pow(dy,2))`. Collision occurs when `dist < Rdist`, where `Rdist = r1 + r2`.

These images are centered and sized to maintain consistency and improve readability within the markdown file.



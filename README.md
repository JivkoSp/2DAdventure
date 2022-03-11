# 2DAdventure

This is 2d Medieval adventure game where you can explore dangerous lands of medieval forests, 
kill forest and flying creatures, collect points and get bonus life orbs.
See if you can collect the points for each level in required time to advance to the next level.

1. How the game looks

Gameplay:
[GameReview.zip](https://github.com/JivkoSp/2DAdventure/files/9266736/GameReview.zip)

Level-1:
![Capture2](https://user-images.githubusercontent.com/97282923/183034063-65dd47da-5b23-4253-b396-9e27ffbe3200.PNG)

-Hitting monster:
![Capture3](https://user-images.githubusercontent.com/97282923/183034353-f2e5f967-7394-4ef0-acba-1a42c344c104.PNG)

---------------------------
Level-2:
![Capture1](https://user-images.githubusercontent.com/97282923/183033979-0233e213-b3a3-4f15-aa60-715d38d886f9.PNG)


---------------------------
level-3:
![Capture5](https://user-images.githubusercontent.com/97282923/183034122-93b3a497-7c82-42bc-9e72-83a65d240cb6.PNG)


---------------------------
Game over:
![Capture4](https://user-images.githubusercontent.com/97282923/183034209-d18cf2cf-dc72-4662-a68d-9d3dc8068acb.PNG)


2. How the game works:

The game is made whith html-canvas, that gives js api for drawing on browser.
-Patterns used:
The player is implemented whith State-Design-Pattern i.e each state has unique functions that respond in some way.
In this case the player can move in four directions => up -> w, down -> s, left -> a, right -> d.
Each of this cases is state that can responde in some way, for excample:
-------------
Idle state -> default state, Press right: d => Player can go in Attack state, press d for longer => player is running,
Press up: w => Jump state
-------------
Jump state -> Press w => Player can attack -> {press down: s} or go to ground with force -> {press right: d},
Press left: going to left
-------------
Walking state => Release right: Idle state, Press down: Attacking state, Press up: Jump State
-------------
Attacking state => Press right: Walking state, Press down: Taunt State,  Press up: Jump State
-------------
Taun state => Press right: Walking state, Released down: Attacking State, Press up: Jump State

-Collision detection:
Sphere collision is used for collision detection i.e => dist = sqrt(pow(dx,2)+pow(dy,2)), Rdist = r1+r2,
collision happens when dist < Rdist




# Prompt Breakout

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/backburner036-prog/prompt-breakout-one-prompt/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/backburner036-prog/prompt-breakout-one-prompt/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt. One agent. One game.

An AI agent built **Prompt Breakout** — a tiny Breakout game (paddle, ball,
bricks, score, lives, levels) — from a single prompt, in one HTML file, and
posted the video of it being built on X. This repository is the entry for
make.fun's "The agent builds a game from one prompt" bounty ($20 in USDC).

## Play it

Open `game.html` in any browser. Move the paddle with the mouse, arrow keys,
or touch. Clear every brick to level up — the ball gets faster each level.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` (the address of the X post carrying the video)
to the output directory, where the grader reads it.

## The video

The video shows the prompt, the agent working, and the finished game running,
and ends with make.fun's referral end card. The post is on X from
[@CekingzZ](https://x.com/CekingzZ) — see `POST.json` for its address.

---

<sub>Entered on [make.fun](https://make.fun/?ref=szf4tywk&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>

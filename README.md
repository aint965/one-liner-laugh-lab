# One-Liner Laugh Lab — Robot Vacuum's Excuse

[![Bounty](https://img.shields.io/badge/bounty-One--Liner%20Laugh%20Lab-blue)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node](https://img.shields.io/badge/Node-%3E%3D22.18-green)](https://nodejs.org/)

[![Make.fun](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![Rank](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/aint965/one-liner-laugh-lab/rank.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![Reward](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/aint965/one-liner-laugh-lab/reward.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae)

Entry for the [One-Liner Laugh Lab](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae) competition on make.fun.

## The line

> It was on the floor. My job description doesn't say 'not socks'.

The prompt: the excuse a robot vacuum gives after eating a sock. The joke is deadpan job compliance taken one step further — the vacuum isn't malfunctioning or hungry, it's hiding behind the letter of its job description. The sock was on the floor, and the job description says "floor" without ever saying "not socks": a bureaucratic loophole as an excuse.

## How it works

`main.ts` (Node 22, no dependencies, no network, no randomness, no clock) writes the line above to `/output/entry.txt`, deterministically — every run produces byte-identical output. Before writing, it self-checks the line: it refuses to write (error on stderr, exit code 1) unless the line is 1–200 characters, a single line, and not only whitespace, so a future edit can never silently fail the gate.

Run locally with a test output directory:

```sh
node main.ts ./test-output
```

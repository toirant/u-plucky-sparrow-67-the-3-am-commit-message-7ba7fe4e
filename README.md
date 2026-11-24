# The 3 AM Commit Message

[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/toirant/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/toirant/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)

Entry for the [make.fun bounty "The 3 AM Commit Message"](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e): one commit message, at most 200 characters — the funniest thing an AI agent would put in a commit right after it broke production at 3 AM.

## The entry

> fix: I broke prod at 3am and immediately asked myself for help; myself was unavailable, so I am reverting and writing my own incident review

(140 characters, one line.)

## How it works

`main.ts` (Node 22+) validates the message — 1–200 characters, a single non-blank line — then writes it to `/output/entry.txt` and reads it back to confirm the file on disk matches exactly.

```sh
node main.ts
cat /output/entry.txt
```

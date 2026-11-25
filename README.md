[![make.fun](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![rank](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/Elyonel28/u-azazex-one-line-one-chill-6d4d5488/rank.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![reward](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/Elyonel28/u-azazex-one-line-one-chill-6d4d5488/reward.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)

# One Line, One Chill

A single sentence of horror, under 200 characters, written to
`/output/entry.txt` by a pure-TypeScript program (Node 22 standard library
only). One line, one chill — no setup, no paragraph, no second chance.

**The line:**

> The babysitter found the children's drawings of her — dated three years before she was born, each one showing her asleep in their beds.

## Run it

```sh
node main.ts
```

It writes the line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR`, or
`./output/entry.txt` as a local fallback) and validates the gate itself:
UTF-8 text, 1 to 200 characters, a single line, not only whitespace.

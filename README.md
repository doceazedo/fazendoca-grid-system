# Fazendoca: Grid System 🧑‍🌾

Revamped grid system for Fazendoca — a social farm game

## Motivation ✨

The grid system is an essential part of Fazendoca, so it's very important for me to get this right. I had plans for implementing different building sizes in the future when I wanted to add bigger buildings to the game, but I had to advance this feature as I now realized the grid cells must be small to fit fences and the single most important building of the game — dirt plots — would need to be occupy more than one cell.

This was written as a concept, but will most likely be used for the actual [game's backend](https://github.com/doceazedo/fazendoca-rest) very soon.

## HTF? 🤔

This new grid system allows for buildings of different sizes to be placed on the grid, it does so by only saving a single point (as it already did) and checks for collisions according to its size.

For example, a 3x3 house can be saved at coordinates `0;0` on the database, but the server won't allow any other buildings to be placed from `0;0` to `3;3`.

We consider that all buildings occupy a 1x1 space on the grid unless it specifies a custom size.

## TODO 🔮

In the future, the player will also be able to expand their farm by buying more land. What this means is that if you start with a 32x32 farm, you can add another 32x32 on the X or Y directions.

This will allow the player to have some funky grid layouts that will need to be handled properly and I don't even check if the building is inside the regular grid yet lol.

## Testing 🧪

You can run the unit tests using [Vitest](https://github.com/vitest-dev/vitest):

```sh
npm run test
```
import {v1 as uuid} from "uuid";

/* Select a random element from values array. */
function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}

/* Format response data from Deck of Cards API (just the image url) */
function formatCard(data) {
  return {
    image: data.cards[0].image,
    id: uuid()
  };
}

/* Form response from Pokemon API (front image, back image, array of stat information) */
function formatPokemon(data) {
  return {
    id: uuid(),
    front: data.sprites.front_default,
    back: data.sprites.back_default,
    name: data.name,
    stats: data.stats.map(stat => ({
      value: stat.base_stat,
      name: stat.stat.name
    }))
  };
}

export { choice, formatCard, formatPokemon };
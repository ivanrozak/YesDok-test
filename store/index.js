import json from '../data/dummy.json';

export const state = () => ({
  counter: 0,
  categories: json.categories,
  articles: json.articles,
});

export const mutations = {
  increment(state) {
    state.counter++;
  },
};

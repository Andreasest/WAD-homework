import { createStore } from "vuex";
import postsData from "../data/posts.json";

export default createStore({
  state: {
    posts: postsData,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});

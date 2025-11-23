import { createStore } from "vuex";
import postsData from "../data/posts.json";

export default createStore({
  state: {
    posts: [],
  },
  getters: {
    allPosts: (state) => {
      var allPosts = state.posts.map((post) => {
        return {
          id: post.id,
          caption: post.caption,
          author: post.author,
          date: post.date,
          image: post.image,
        };
      });
      return allPosts;
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    loadPosts({ commit }) {
      setTimeout(() => {
        commit("setPosts", postsData);
      }, 1000);
    },
  },
  modules: {},
});

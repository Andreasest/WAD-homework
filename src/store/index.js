import { createStore } from "vuex";
import postsData from "../data/posts.json";

export default createStore({
  state: {
    posts: [],
  },
  getters: {
    allPosts: (state) => state.posts,
    postById:
      (state) =>
      (id) =>
        state.posts.find((post) => post.id === id),
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    incrementPostLikes(state, postId) {
      const post = state.posts.find((p) => p.id === postId);
      if (post) {
        post.likes += 1;
      }
    },
    resetAllLikes(state) {
      state.posts = state.posts.map((post) => ({
        ...post,
        likes: 0,
      }));
    },
  },
  actions: {
    loadPosts({ commit }) {
      setTimeout(() => {
        const postsWithLikes = postsData.map((post) => ({
          ...post,
          likes: 0,
        }));
        commit("setPosts", postsWithLikes);
      }, 1000);
    },
    likePost({ commit }, postId) {
      commit("incrementPostLikes", postId);
    },
    resetLikes({ commit }) {
      commit("resetAllLikes");
    },
  },
  modules: {},
});

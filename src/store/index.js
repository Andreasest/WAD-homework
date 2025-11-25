import { createStore } from "vuex";
import postsData from "../data/posts.json";

export default createStore({
  state: {
    posts: postsData.map(post => ({ ...post, likes: 0 })),
  },
  getters: {
    allPosts: (state) => {
      return state.posts.map((post) => {
        return {
          id: post.id,
          caption: post.caption,
          author: post.author,
          date: post.date,
          image: post.image,
          likes: post.likes,
        };
      });
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    incrementLikes(state, postId) {
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.likes += 1;
      }
    },
    resetLikes(state) {
      state.posts.forEach(post => {
        post.likes = 0;
      });
    },
  },
  actions: {
    loadPosts({ commit }) {
      setTimeout(() => {
        commit("setPosts", postsData.map(post => ({ ...post, likes: 0 })));
      }, 1000);
    },
    likePost({ commit }, postId) {
      commit("incrementLikes", postId);
    },
    resetAllLikes({ commit }) {
      commit("resetLikes");
    },
  },
  modules: {},
});

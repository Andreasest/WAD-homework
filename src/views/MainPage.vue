<template>
  <div class="home">
    <template v-if="isLoading">
      <div class="loading">Loading posts…</div>
    </template>
    <template v-else>
      <Post v-for="post in allPosts" :key="post.id" :post-id="post.id" />
    </template>
    <button
      class="reset-button"
      type="button"
      :disabled="!allPosts.length"
      @click="resetLikes"
    >
      Reset likes
    </button>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  name: "HomeView",
  components: {
    Post,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    allPosts() {
      return this.$store.getters.allPosts;
    },
  },
  watch: {
    allPosts(newPosts) {
      if (newPosts.length) {
        this.isLoading = false;
      }
    },
  },
  created() {
    this.loadPosts();
  },
  methods: {
    loadPosts() {
      this.isLoading = true;
      this.$store.dispatch("loadPosts");
    },
    resetLikes() {
      this.$store.dispatch("resetLikes");
    },
  },
};
</script>

<style>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}
.loading {
  text-align: center;
  padding: 1em;
  border-radius: 7px;
  background-color: #e4e4e4;
  width: min(500px, 90%);
}
.reset-button {
  padding: 0.75em 1.5em;
  border-radius: 4px;
  border: none;
  background-color: #25484f;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}
.reset-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.reset-button:not(:disabled):hover {
  background-color: #326d78;
}
</style>

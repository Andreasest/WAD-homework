<template>
  <div class="home">
    <button>Reset likes</button>
    <Post v-for="post in allPosts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Post from "@/components/Post.vue";

export default {
  name: "HomeView",
  components: {
    Post,
  },
  computed: {
    allPosts() {
      return this.$store.getters.allPosts;
    },
  },
  created() {
    this.loadPosts();
  },
  methods: {
    loadPosts() {
      this.$store.dispatch("loadPosts");
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
</style>

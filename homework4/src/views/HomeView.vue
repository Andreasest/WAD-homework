<template>
  <div class="home">
    <div class="post-list">
      <h1>Welcome to the home page</h1>

      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from "@/components/Post.vue";

export default {
  name: "HomeView",
  components: { Post },
  data: function () {
    return {
      posts: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/api/posts/")
      .then((response) => response.json())
      .then((data) => (this.posts = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.post-list {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>

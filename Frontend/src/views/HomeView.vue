<template>
  <div class="home">
    <h1>Welcome to the home page</h1>
    <div class="post-list">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <div class="buttons">
      <button @click="addPost" class="add-button">Add post</button>
      <button @click="deleteAllPosts" class="delete-button">Delete all</button>
    </div>
  </div>
</template>

<script>
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
  methods: {
    addPost() {
      this.$router.push("/addPost");
    },
    deleteAllPosts() {
      fetch("http://localhost:3000/api/posts", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          console.log(response.data);
          // redirect to /allposts view
          this.posts = [];
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
    },
    logOut() {},
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 1em;
}
.post-list {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.buttons {
  display: flex;
  gap: 1em;
  justify-content: center;
}
button {
  background-color: rgb(234, 232, 232);
  border-radius: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
  transition: 0.3s;
}
.delete-button:hover {
  background-color: rgb(255, 135, 106);
}
.add-button:hover {
  background-color: rgb(198, 255, 157);
}
</style>

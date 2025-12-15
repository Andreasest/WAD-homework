<template>
  <div class="post-view" v-if="post">
    <div class="post">
      <p class="title">A post</p>
      <div class="editable-body">
        <label for="body">Body</label>
        <textarea
          type="text"
          name="body"
          class="body"
          id="body"
          rows="3"
          required
          v-model="post.body"
        />
      </div>
      <div class="buttons">
        <button @click="updatePost" class="update-button">Update</button>
        <button @click="deletePost" class="delete-button">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aPost",
  data() {
    return {
      post: {
        id: "",
        date: "",
        body: "",
      },
    };
  },
  methods: {
    fetchAPost(id) {
      fetch(`http://localhost:3000/api/posts/${id}`)
        .then((response) => response.json())
        .then((data) => (this.post = data))
        .catch((err) => console.log(err.message));
    },
    updatePost(id) {
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deletePost(id) {
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.fetchAPost(this.$route.params.id);
  },
};
</script>

<style scoped>
.post-view {
  padding: 1em;
}
.post {
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: min(500px, 90%);
  background-color: rgb(234, 232, 232);
  border-radius: 5px;
  padding: 1em;
  margin: 0 auto;
}
.editable-body {
  display: flex;
  gap: 1em;
  justify-content: center;
}
.body {
  width: 60%;
  border-radius: 5px;
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
.update-button:hover {
  background-color: rgb(198, 255, 157);
}
</style>

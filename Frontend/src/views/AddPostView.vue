<template>
  <div class="post-view" v-if="post">
    <div class="post">
      <p class="title">Add post</p>
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
        <button @click="addPost" class="add-post-button">Add post</button>
        <button @click="back" class="back-button">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      post: {
        body: "",
      },
    };
  },
  methods: {
    addPost() {
      var data = {
        body: this.post.body,
      };
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
    },
    back() {
      this.$router.push("/");
    },
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
.add-post-button:hover {
  background-color: rgb(198, 255, 157);
}
.back-button:hover {
  background-color: rgb(243, 243, 243);
}
</style>

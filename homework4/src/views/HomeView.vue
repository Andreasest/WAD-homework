<template>
  <div class="home">
    <h1>This is the home page</h1>
    <div class="container">
      <button v-if="authResult" @click="Logout" class="center">Logout</button>
    </div>
    <div class="post-list" v-for="post in posts" :key="post.index">
      <div class="post">
        <h3>Title: {{ post.title }}</h3>
        <p><b> Body: </b> {{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import auth from "../auth";

export default {
  name: "HomeView",
  components: {},
  data: function () {
    return {
      posts: [],
      authResult: auth.authenticated(),
    };
  },
  methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
        credentials: "include", //  Don't forget to specify this if you need cookies
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log("jwt removed");
          //console.log('jwt removed:' + auth.authenticated());
          this.$router.push("/login");
          //location.assign("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error logout");
        });
    },
  },
  mounted() {
    fetch("http://localhost:3000/posts/")
      .then((response) => response.json())
      .then((data) => (this.posts = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

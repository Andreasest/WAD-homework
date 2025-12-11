<template>
  <div class="post">
    <p class="date">
      {{
        new Date(post.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      }}
    </p>

    <p class="post-body">{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    post: { type: Object, required: true },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post {
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  width: min(500px, 90%);
  background-color: rgb(234, 232, 232);
  border-radius: 5px;
  padding: 1em;
  margin: 0 auto;
}
.date {
  text-align: right;
}
.post-body {
  margin: 0.5rem 0;
  text-align: left;
}
</style>

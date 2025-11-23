<template>
  <div class="post">
    <div class="post-header">
      <img
        src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2558760599.jpg"
        :alt="post.author"
        :title="post.author"
        class="pfp"
      />
      <p class="date">{{ post.date }}</p>
    </div>

    <!--TODO Post image -->
    <img
      v-if="post.image"
      :src="post.image"
      alt="post image"
      class="post-image"
    />

    <p class="caption">{{ post.caption }}</p>
    <div class="post-header">
      <Button class="like-button">👍</Button>
      <p>0 Likes</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
  },
};
</script>

<style>
.post {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  background-color: rgb(234, 232, 232);
  border-radius: 5px;
  padding: 10px;
  margin: 1em auto;
}

.post-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post-header + .post-image {
  margin-top: 10px;
}

.post-image {
  width: 100%;
  height: auto;
}

.like-button {
  font-size: 2em;
  border: none;
  background: none;
  cursor: pointer;
  align-self: flex-start;
}

.like-button:hover {
  transform: scale(1.2);
}
.pfp {
  max-height: 40px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

.pfp:hover {
  opacity: 80%;
  transform: scale(1.1);
}
</style>

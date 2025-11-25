<template>
  <article v-if="post" class="post">
    <div class="post-header">
      <img
        src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2558760599.jpg"
        :alt="post.author"
        :title="post.author"
        class="pfp"
      />
      <p class="date">{{ post.date }}</p>
    </div>

    <img
      v-if="post.image"
      :src="post.image"
      alt="post image"
      class="post-image"
    />

    <p class="caption">{{ post.caption }}</p>
    <div class="post-footer">
      <button class="like-button" type="button" @click="likePost(postId)">
        👍
      </button>
      <p class="likes">{{ likeLabel }}</p>
    </div>
  </article>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Post",
  props: {
    postId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    post() {
      return this.$store.getters.postById(this.postId);
    },
    likeLabel() {
      const count = this.post?.likes ?? 0;
      return `${count} ${count === 1 ? "like" : "likes"}`;
    },
  },
  methods: {
    ...mapActions(["likePost"]),
  },
};
</script>

<style>
.post {
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  width: min(500px, 90%);
  background-color: rgb(234, 232, 232);
  border-radius: 5px;
  padding: 10px;
  margin: 0 auto;
}
.post-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post-image {
  width: 100%;
  height: auto;
  margin-top: 10px;
}
.post-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.caption {
  margin: 0.5rem 0;
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
.likes {
  margin: 0;
  font-weight: 600;
}
.pfp {
  max-height: 40px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
</style>


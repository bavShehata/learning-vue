<template>
  <h1>posts</h1>
  <div class="post-list">
    <div v-for="post in posts" key="post.id">
      <Post :post="post" />
    </div>
  </div>
</template>
<script>
import Post from "./Post.vue";
import { ref } from "vue";
export default {
  components: { Post },
  props: ["posts"],
  setup(props) {
    const posts = ref(props.posts);
    return {
      posts,
    };
  },
};
</script>

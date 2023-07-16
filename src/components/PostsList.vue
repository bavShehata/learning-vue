<template>
  <h2>posts</h2>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <Post :post="post" />
    </div>
  </div>
</template>
<script>
import Post from "./Post.vue";
import { onMounted, onUnmounted, onUpdated, ref } from "vue";
export default {
  components: { Post },
  props: ["posts"],
  setup(props) {
    const posts = ref(props.posts);
    onMounted(() => console.log("Component mounted"));
    onUnmounted(() => console.log("Component unmounted"));
    onUpdated(() => console.log("Component Updated"));
    return {
      posts,
    };
  },
};
</script>

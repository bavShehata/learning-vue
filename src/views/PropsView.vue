<template>
  <h1>props</h1>
  <PostList :posts="posts" />
</template>
<script>
import PostList from "../components/PostsList.vue";
import { ref } from "vue";
export default {
  name: "Props",
  components: { PostList },
  setup() {
    const posts = ref([
      { title: "blog1", description: "blog1 desc", id: 0 },
      { title: "blog2", description: "blog2 desc", id: 1 },
    ]);

    return {
      posts,
    };
  },
};
</script>

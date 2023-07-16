<template>
  <h1>props</h1>
  <button @click="togglePosts">Toggle posts</button>
  <button @click="posts.pop()">Delete post</button>
  <PostList :posts="posts" v-if="showPosts" />
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

    const showPosts = ref(true);

    const togglePosts = () => {
      showPosts.value = !showPosts.value;
    };
    return {
      posts,
      showPosts,
      togglePosts,
    };
  },
};
</script>

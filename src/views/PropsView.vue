<template>
  <h1>props</h1>
  <button @click="togglePosts">Toggle posts</button>
  <button @click="posts.pop()">Delete post</button>
  <div v-if="error">{{ error }}</div>
  <PostList :posts="posts" v-if="showPosts && posts.length" />
  <div v-else>
    <p>loading...</p>
  </div>
</template>
<script>
import PostList from "../components/PostsList.vue";
import { ref } from "vue";
import getPosts from "../composables/getPosts";
export default {
  name: "Props",
  components: { PostList },
  setup() {
    const showPosts = ref(true);

    const togglePosts = () => {
      showPosts.value = !showPosts.value;
    };
    const { posts, error, load } = getPosts();
    load();
    return {
      posts,
      error,
      showPosts,
      togglePosts,
    };
  },
};
</script>

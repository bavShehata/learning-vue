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
export default {
  name: "Props",
  components: { PostList },
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const showPosts = ref(true);

    const togglePosts = () => {
      showPosts.value = !showPosts.value;
    };

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");
        if (!data.ok) {
          throw Error("No data available");
        }
        posts.value = await data.json();
        console.log(posts.value);
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };
    console.log("BEFORE", posts.value);

    load();
    console.log("AFTER", posts.value);
    return {
      posts,
      error,
      showPosts,
      togglePosts,
    };
  },
};
</script>

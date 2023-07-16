<template>
  <router-link :to="{ name: 'Details', params: { id: post.id } }">
    <h3>{{ post.title }}</h3>
  </router-link>
  <h4>{{ post.description }}</h4>
  <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
</template>
<script>
import { ref } from "vue";

export default {
  props: ["post"],

  setup(props) {
    const post = ref(props.post);

    return {
      post,
    };
  },
};
</script>

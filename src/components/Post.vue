<template>
  <h3>{{ post.title }}</h3>
  <h4>{{ post.description }}</h4>
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

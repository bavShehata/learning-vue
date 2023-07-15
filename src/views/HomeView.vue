<template>
  <div class="home">
    <h1>Homepage</h1>
    <p ref="p">My name is {{ name }}. I am {{ age }} years old</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HomeView",
  components: {},
  setup() {
    let name = "bavly";
    let age = 22;

    const p = ref(null);

    const handleClick = () => {
      console.log(p.value);
    };
    return {
      name,
      age,
      handleClick,
      p,
    };
  },
};
</script>

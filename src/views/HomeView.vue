<template>
  <div class="home">
    <h1>Homepage</h1>
    <p ref="p">My name is {{ name }}. I am {{ age }} years old</p>
    <button @click="handleClick">Click me</button>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HomeView",
  components: {},
  setup() {
    const name = ref("bavly");
    const age = ref(22);

    const p = ref(null);

    const handleClick = () => {
      name.value = "Mario";
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

<template>
  <div class="home">
    <h1>Homepage</h1>
    <p>My name is {{ name }}. I am {{ age }} years old</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  setup() {
    let name = "bavly";
    let age = 22;

    const handleClick = () => {
      console.log("Clicked");
    };
    return {
      name,
      age,
      handleClick,
    };
  },
};
</script>

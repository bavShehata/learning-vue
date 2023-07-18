<template>
  <div class="home">
    <h1>Homepage</h1>
    <h2>refs</h2>
    <p ref="p">My name is {{ name }}. I am {{ age }} years old</p>
    <button @click="handleClick">Click me</button>
    <input type="text" v-model="name" />
    <br /><br /><br />
    <p>Ninja one {{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>reactive</h2>
    <p>Ninja two {{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "HomeView",
  components: {},
  setup() {
    const name = ref("bavly");
    const age = ref(22);

    const p = ref(null);

    const ninjaOne = ref({ name: "Yoshi", age: 31 });
    const ninjaTwo = reactive({ name: "Mario", age: 36 });
    const handleClick = () => {
      name.value = "Mario";
    };
    const updateNinjaOne = () => {
      ninjaOne.value.age = 45;
    };
    const updateNinjaTwo = () => {
      ninjaTwo.age = 45;
    };
    return {
      name,
      age,
      handleClick,
      p,
      ninjaOne,
      ninjaTwo,
      updateNinjaOne,
      updateNinjaTwo,
    };
  },
};
</script>

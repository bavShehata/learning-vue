<template>
  <h1>Computed</h1>
  <input type="text" v-model="search" />
  <p>Search term: {{ search }}</p>
  <div v-for="name in matchingNames" key="name">
    <p>{{ name }}</p>
  </div>
</template>
<script>
import { computed, ref } from "vue";

export default {
  setup() {
    const names = ref(["Bivo", "Bavly", "Bova"]);
    const search = ref("");

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    return {
      names,
      search,
      matchingNames,
    };
  },
};
</script>
<style></style>

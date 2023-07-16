<template>
  <h1>Computed</h1>
  <input type="text" v-model="search" />
  <p>Search term: {{ search }}</p>
  <div v-for="name in matchingNames" key="name">
    <p>{{ name }}</p>
  </div>
  <button @click="stopWatching">Stop watching</button>
</template>
<script>
import { computed, ref, watch, watchEffect } from "vue";

export default {
  setup() {
    const names = ref(["Bivo", "Bavly", "Bova"]);
    const search = ref("");

    const stopwatch = watch(search, () => {
      console.log("Watch function ran");
    });

    const stopwatchEffect = watchEffect(() => {
      console.log("Watch effect ran", search.value);
    });
    const stopWatching = () => {
      stopwatch(    );
      stopwatchEffect(  );
    };
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    return {
      names,
      search,
      matchingNames,
      stopWatching,
    };
  },
};
</script>
<style></style>

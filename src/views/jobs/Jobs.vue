<template>
  <h1>Jobs page</h1>
  <div v-for="job in jobs" :key="job.id">
    <h2>{{ job.description }}</h2>
  </div>
</template>

<script>
export default {
  name: "Jobs",
  data() {
    return {
      jobs: [
        { title: "Webdev", id: 0, description: "loremdev" },
        { title: "Webdes", id: 1, description: "loremdes" },
        { title: "Webops", id: 2, description: "loremops" },
      ],
    };
  },
};
</script>

<style></style>

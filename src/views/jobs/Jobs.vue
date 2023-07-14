<template>
  <h1>Jobs page</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }"
      ><h2>{{ job.description }}</h2></router-link
    >
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
      currentPath: this.$route.params.path,
    };
  },
};
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>

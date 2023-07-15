<template>
  <h1>Job details</h1>
  <div v-if="job">
    <h2>{{ job.title }}</h2>
    <p>Job id is {{ job.id }}</p>
    <p>Job description is {{ job.description }}</p>
  </div>
  <div v-else>
    <p>loading job description...</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch(`http://localhost:3000/jobs/${this.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.job = data;
      })
      .catch((e) => {
        console.log("ERROR", e.message);
      });
  },
};
</script>

<style></style>

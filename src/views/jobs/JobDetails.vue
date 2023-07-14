<template>
  <h1>Job details</h1>
  <p>Job id is {{ id }}</p>
  <p>{{}}</p>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return { id: this.$route.params.id };
  },
};
</script>

<style></style>

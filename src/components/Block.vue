<template>
  <div class="btn" @click="endTime">
    <p>Click here</p>
  </div>
</template>

<script>
export default {
  name: "Block",
  methods: {
    endTime() {
      this.$emit("clicked");
    },
  },
};
</script>

<style>
.btn {
  padding: 10px 30px;
  margin: auto auto;
  background-color: green;
  color: white;
  width: 100px;
  cursor: pointer;
}
.btn:hover {
  background-color: rgb(1, 87, 1);
}
</style>

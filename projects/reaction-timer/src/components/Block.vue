<template>
  <div
    class="btn"
    @click="endTime"
    :style="{ 'margin-left': marginLeft, 'margin-top': marginTop }"
  >
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
  data() {
    return {
      marginLeft: Math.floor(Math.random() * 70) + "vw",
      marginTop: Math.floor(Math.random() * 30) + "vh",
    };
  },
};
</script>

<style>
.btn {
  padding: 30px 60px;
  background-color: green;
  color: white;
  width: 200px;
  cursor: pointer;
}
.btn:hover {
  background-color: rgb(1, 87, 1);
}
</style>

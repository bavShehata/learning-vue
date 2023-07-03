<template>
  <div class="backdrop">
    <div class="modal">
      <h1>{{ header }}</h1>
      <h2>{{ book[0] }} - {{ book[1] }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "book"],
};
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
h1 {
  color: green;
}
</style>

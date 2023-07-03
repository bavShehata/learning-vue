<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button @click="handleClick">click me</button>
  <div v-if="showModal">
    <Modal :header="header" :book="['Title', 'Author']" @close="toggleModal">
      <p>Coming from a slot</p>
      <template v-slot:links>
        <a href="">Sign up</a>
        <br />
        <a href="">login</a>
      </template>
    </Modal>
  </div>
  <div v-if="showModalTwo">
    <Modal
      :header="headerTwo"
      :book="['Title Mine', 'Author Mine']"
      @close="toggleModalTwo"
    >
      <p>Coming from a different slot</p>
      <template v-slot:links>
        <a href="">Sign up mine</a>
        <br />
        <a href="">login mine</a>
      </template>
    </Modal>
  </div>
  <button @click.shift="toggleModal">Open modal (shift)</button>
  <button @click="toggleModalTwo">Open modal Two</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "my first vue app",
      header: "Prop header from app.vue ",
      headerTwo: "Own prop header",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 48px;
  color: blue;
}
</style>

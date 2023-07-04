<template>
  <h1>Ninja Reaction Timer</h1>
  <div v-if="showBlock">
    <Block @clicked="setEndTime" />
  </div>
  <div v-if="showResults">
    <Results :reactionTime="reactionTime" />
  </div>
</template>

<script>
import Block from "./components/Block.vue";
import Results from "./components/Results.vue";

export default {
  name: "App",
  data() {
    return {
      showBlock: false,
      showResults: false,
      startTime: 0,
      endTime: 0,
      reactionTime: 0,
      timeTillShow: Math.floor(Math.random() * 3000),
    };
  },
  components: { Block, Results },
  methods: {
    setEndTime() {
      this.endTime = new Date();
      this.reactionTime = this.endTime - this.startTime;
      this.showResults = true;
    },
  },
  mounted: function () {
    console.log("Timetillshow: ", this.timeTillShow);
    this.timer = setTimeout(() => {
      this.showBlock = true;
      this.startTime = new Date();
    }, this.timeTillShow);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>

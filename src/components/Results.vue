<template>
  <div class="results">
    <h3>Time taken: {{ reactionTime }}ms</h3>
    <h2>
      Your reaction time is
      <span
        :class="{
          fast: reactionTimeClass == 'Fast',
          average: reactionTimeClass == 'Average',
          slow: reactionTimeClass == 'Slow',
        }"
        >{{ reactionTimeDescription }}</span
      >
    </h2>
  </div>
</template>

<script>
export default {
  name: "Results",
  methods: {},
  props: ["reactionTime"],
  data() {
    return {
      reactionTimeDescription: 0,
      reactionTimeClass: "Average",
    };
  },
  mounted: function () {
    console.log("reaction time: ", this.reactionTime);
    if (this.reactionTime < 300) {
      this.reactionTimeDescription = "Fast";
    } else if (this.reactionTime < 600) {
      this.reactionTimeDescription = "Average";
    } else {
      this.reactionTimeDescription = "Slow";
    }
    this.reactionTimeClass = this.reactionTimeDescription;
  },
};
</script>

<style>
.results {
  margin-top: 30px;
}
.fast {
  color: green;
}
.average {
  color: blue;
}
.slow {
  color: red;
}
</style>

const app = Vue.createApp({
  data() {
    return {
      title: "The final empire",
      author: "Brandom Sanerson",
      age: 45,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = "Words of Randiance";
      this.title = title;
    },
  },
});

app.mount("#app");

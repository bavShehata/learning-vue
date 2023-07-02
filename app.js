const app = Vue.createApp({
  data() {
    return {
      showBooks: false,
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
    changeVisib() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");

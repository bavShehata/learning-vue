const app = Vue.createApp({
  data() {
    return {
      showBooks: false,
      title: "The final empire",
      author: "Brandom Sanerson",
      age: 45,
      x: 0,
      y: 0,
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
    handleEvent(e, data) {
      console.log(e.type, e);
      if (data) console.log("Data: ", data);
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");

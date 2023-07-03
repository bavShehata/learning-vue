const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      age: 45,
      books: [
        { title: "name of the wind", author: "patrick rothfuss" },
        { title: "the way of kings", author: "brandon sanderson" },
        { title: "the final empire", author: "brandon sanderson" },
      ],
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

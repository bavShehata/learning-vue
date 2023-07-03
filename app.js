const app = Vue.createApp({
  data() {
    return {
      url: "https://bavlifyweb.com",
      showBooks: true,
      age: 45,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "the way of kings",
          author: "brandon sanderson",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "brandon sanderson",
          img: "assets/3.jpg",
          isFav: true,
        },
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
    toggleFav(book) {
      //   var i = -1;
      //   node = e.currentTarget;
      //   for (; (node = node.previousSibling); i++);
      //   this.books[i].isFav = !this.books[i].isFav;
      book.isFav = !book.isFav;
    },
  },
});

app.mount("#app");

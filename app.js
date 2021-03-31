const app = Vue.createApp({
  data() {
    return {
      url: 'https://ciptaloka.com',
      showBooks: true,
      books: [
        { title: 'name of the wind', author: 'patric star', img: 'assets/1.jpg', isFav: true },
        { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false },
        { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true },
      ]
      // x: 0,
      // y: 0
    }
  },
  methods: {
    toggleShowBook() {
      this.showBooks = !this.showBooks
      // changeTitle(title) {
      //   // this.title = 'Lord Of The Rings'
      //   this.title = title
      // }
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    }
    // handleEvent(e, data) {
    //   console.log(e, e.type)
    //   if (data) {
    //     console.log(data)
    //   }
    // },
    // handleMouseMove(e) {
    //   this.x = e.offsetX
    //   this.y = e.offsetY
    // }
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    }
  }
});

app.mount('#app');
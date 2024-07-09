const app = Vue.createApp({
    data() {
        return {
            bookName: null,
            bookAuthor: null,
            bookCover: null,
            bookList: [
                { name: 'Hayvan Çiftliği', author: 'George Orwell', cover: 'https://www.canyayinlari.com/productimages/118071/big/9789750719387_front_co.jpg' },
                { name: 'Satranç', author: 'Stefan Zweig', cover: 'https://i.pinimg.com/736x/ac/da/b7/acdab7dba91fcb3226cedf17ae6c6024.jpg' },
                { name: 'Dönüşüm', author: 'Franz Kafka', cover: 'https://m.media-amazon.com/images/I/71miesUTguL._AC_UF894,1000_QL80_.jpg' },
                { name: 'İnsan Neyle Yaşar?', author: 'Lev Tolstoy', cover: 'https://www.canyayinlari.com/productimages/120162/original/9789750754906_892.jpg' }
            ]
        }
    },
    methods: {
        addBook() {
            let book = {
                name: this.bookName,
                author: this.bookAuthor,
                cover: this.bookCover
            }
            this.bookList.push(book)
            this.bookName = null
            this.bookAuthor = null  
            this.bookCover = null
        },
        removeBook(index) {
            this.bookList.splice(index, 1);
        }
    }
})

app.mount('#app');

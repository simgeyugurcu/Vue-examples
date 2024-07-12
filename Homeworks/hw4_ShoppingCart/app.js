const app = Vue.createApp({
    data() {
      return {
        cartItems: [
          { id: 1, name: 'Mandarin', price: 42.99, quantity: 2, image: 'https://tropikalakademi.com/wp-content/uploads/2022/08/mandalina1.jpg' },
          { id: 2, name: 'Apple', price: 45.99, quantity: 1, image: 'https://www.doktorsaliheken.com/2021/03/elma.jpg' },
          { id: 3, name: 'Avocado', price: 39.99, quantity: 1, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Avok%C3%A1do.jpg/1024px-Avok%C3%A1do.jpg' },
          { id: 4, name: 'Red Cabbage', price: 29.99, quantity: 1, image: 'https://d1mm3tuyihn37h.cloudfront.net/wp-content/uploads/Kirmizi-Lahana.jpg.webp' },
          { id: 5, name: 'Tomato', price: 32.99, quantity: 2, image: 'https://cdn.cimri.io/market/260x260/domates-kg-_1452691.jpg' },
          { id: 6, name: 'Cucumber', price: 34.99, quantity: 1, image: 'https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/40901/uploads/urunresimleri/buyuk/salatalik--a7ea-.jpg' },
        ]
      };
    },
    computed: {
      totalItems() {
        let total = 0;
        for (let item of this.cartItems) {
          total += item.quantity;
        }
        return total;
      },
      totalPrice() {
        let total = 0;
        for (let item of this.cartItems) {
          total += item.price * item.quantity;
        }
        return total;
      },
      discountedPrice() {
        return this.totalPrice * 0.9; // 10% discount
      }
    },
    watch: {
      totalItems(newVal, oldVal) {
        if (newVal !== oldVal) {
          alert(`Cart items changed. New total: ${newVal}`);
        }
      }
    },
    methods: {
      increaseQuantity(item) {
        item.quantity++;
      },
      decreaseQuantity(item) {
        if (item.quantity > 0) {
          item.quantity--;
        }
      },
      removeItem(item) {
        this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
      }
    }
  });
  
  app.mount('#app');
  
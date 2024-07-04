const app = Vue.createApp({
  data() {
    return {
      counter: 40,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    setName(event, lastName){
      this.name=event.target.value + ' '+ lastName;  //Bu method, bir input elemanına girilen değeri alır ve name verisini günceller. event.target.value ile inputun mevcut değeri alınır 
    },
    add(num) {
      this.counter= this.counter + num
    },
    reduce(num){
      this.counter= this.counter -num
    },
    submitForm(){
      alert('Submitted!');
    },
    confirmInput(){
      this.confirmedName=this.name;
    }
  }
});

app.mount('#events');

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: '',
      lastName: ''
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      if (this.name === '') {
        this.showAlert('Input girilmedi');
        return;
      }
      this.counter = this.counter + num;
    },
    reduce(num) {
      if (this.name === '') {
        this.showAlert('Input girilmedi');
        return;
      }
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name= '';
    },
    outputFullname(){
      if(this.name=== ''){
        return '';
      }
      return this.name+ ' '+ 'Yuğurcu';
    },
    showAlert(message) {
      alert(message);
    }
  },
//methods ve computed farkı:    methods: Her çağrıldığında çalışır, computed: Sadece bağımlı veriler değiştiğinde yeniden hesaplanır
//mesela bu örnekte input girilmese ve add yada substract a basılsa; methods kullanıldığı takdirde sürekli çalışır, ama computed sadece input girileceği zaman hesaplanır
  computed: {
    // fullname(){
    //   if(this.name=== '' || this.lastName === ''){
    //     return '';
    //   }
    //   return this.name+ ' '+ this.lastName;
    },
// methods: Her çağrıldığında çalışır
// computed: Bağımlı veriler değiştiğinde yeniden hesaplanır
// watch: Belirli veriler değiştiğinde yanıt verir
    watch: {
      counter(value){
        if(value>50){
          this.counter=0;
        }
      },
      name(value){
        if(value=== ''){
          this.fullname= '';
        }
        else{ 
          this.fullname= value+ ' '+ this.lastName;
        }
      },
      lastName(value){
        if(value=== ''){
          this.fullname= '';
        }else{ 
          this.fullname= this.name+ ' '+ value;
        }
      }

    }
});

app.mount('#events');

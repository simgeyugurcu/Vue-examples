const app = Vue.createApp({
    data() {
      return {
        input: '',
        secondInput: '',
        confirmedInput: ''
      };
    },
    methods: {
        showAlert(){
            alert('This is an assignment!');
        },
        userInput(event){
            this.input=event.target.value;
        },
        secondUserInput(event){
            this.secondInput=event.target.value;
        },
        confirmInput(){
            this.confirmedInput=this.secondInput;
        }
    }
});

app.mount('#assignment');

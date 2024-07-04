const app=Vue.createApp({
    data(){
        return {
            enteredValue:'',
            tasks: []
        };
    },
    methods: {
        addTask(){
           this.tasks.push(this.enteredValue);
        }
    }
});

app.mount('#assignment');
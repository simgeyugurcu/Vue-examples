const app = Vue.createApp({
    data() {
        return {
            number: 0
        };
    },
    methods: {
        addNumber(num) {
            this.number += num;
        }
    },
    computed: {
        result() {
            if (this.number < 37) {
                return 'Not there yet!';
            } else if (this.number > 37) {
                return 'Too much!';
            } else {
                return this.number; 
            }
        }
    },
    watch:{
        result(){
            const that= this;
            setTimeout(function(){
                that.number= 0;
            },5000);
        }

    }
});

app.mount('#assignment');

const app=Vue.createApp({
    data(){
        return {
            myname: 'Simge Yuğurcu',
            myage: 22,
        
            image_URL: 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp'
        };
    },
    methods: {
        calculateRandNum(){
            const randomNumber= Math.random();
            return randomNumber;
        }
    }
});

app.mount('#assignment');
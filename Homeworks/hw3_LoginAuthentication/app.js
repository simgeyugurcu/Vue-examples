const app = Vue.createApp({
    data() {
        return {
            username: '',
            password: '',
            loggedInUsername: '',
            errorMessage: ''
        };
    },
    methods: {
        login() {
            if (!this.username.trim() || !this.password.trim()) {
                if (!this.username.trim() && !this.password.trim()) {
                    this.errorMessage = 'You cannot leave the "Username" and "Password" fields blank!';
                } else if (!this.username.trim()) {
                    this.errorMessage = 'You cannot leave the "Username" field blank!';
                } else if (!this.password.trim()) {
                    this.errorMessage = 'You cannot leave the "Password" field blank!';
                }
            } else if (this.username === 'simge' && this.password === '123') { 
                this.loggedInUsername = this.username;
                this.username = '';
                this.password = '';
                this.errorMessage = '';
            } else {
                this.errorMessage = 'Incorrect username or password!';
            }
        }
    }
})

app.mount('#app');

const app = Vue.createApp({
    data() {
        return {
            username: '',
            password: '',
            showLoginPopup: true,
            loggedInUsername: '',
            showUserDetails: false
        };
    },
    methods: {
        login() {
            if (!this.username.trim() || !this.password.trim()) {
                if (!this.username.trim() && !this.password.trim()) {
                    alert('You cannot leave the "Username" and "Password" fields blank!');
                } else if (!this.username.trim()) {
                    alert('You cannot leave the "Username" field blank!');
                } else if (!this.password.trim()) {
                    alert('You cannot leave the "Password" field blank!');
                }
            } else {// Set loggedInUsername and reset fields
                this.loggedInUsername = this.username;
                this.username = '';
                this.password = '';
                this.showLoginPopup = false;
            }
        },
        closeLoginForm() {
            this.showLoginPopup = false;
        },
        toggleUserDetails() {
            this.showUserDetails = !this.showUserDetails;
        }
    }
});

app.mount('#app');

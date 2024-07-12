const app = Vue.createApp({
    data() {   //'' bir string değeridir ve string işlemleri yapılabilirken, null bir değer atanmadığında veya yokluğunda kullanılır
        return {
            display: '',
            operator: null
        };
    },
    methods: {
        setNumber(number) {
            this.display += number;
        },
        setOperator(operator) {
            if (this.operator === null) {   //eğer operator daha atanmamışsa yani null ise,
                this.operator = operator;    //operator data property'sine setOperatordeki operator parametresini ata
                this.display += ` ${operator} `; /*display adlı değişkenin sonuna seçilen operatörü ve bir boşluk ekler. 
                                                 Bu, kullanıcının ekranında gösterilen işlemi (örneğin "12 + ") günceller.*/
            }
        },
        clear() {
            this.display = '';
            this.operator = null;
        },
        negate() {
            if (this.display) {
                this.display = String(-parseFloat(this.display));
            }
        },
        percentage() {
            if (this.display) {
                this.display = String(parseFloat(this.display) / 100);
            }
        },
        calculateResult() {
            let [num1, num2] = this.display.split(this.operator).map(Number);
            if (this.operator === '+') {
                this.display = num1 + num2;
            } else if (this.operator === '-') {
                this.display = num1 - num2;
            } else if (this.operator === '×') {
                this.display = num1 * num2;
            } else if (this.operator === '÷') {
                this.display = num1 / num2;
            }
            this.operator = null;
        }
    }
});

app.mount('#app');

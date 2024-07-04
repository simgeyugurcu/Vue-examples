Vue.createApp({
  data() {
    return {
      goals: [], //kullanıcı inputlarını tutan bi array
      enteredValue: "", //kullanıcıdan alınan texti tutan bir string
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue); //enteredValue değerini goals arrayine ekler
      this.enteredValue = ""; //giriş alanını temizler
    },
  },
}).mount("#app");

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);

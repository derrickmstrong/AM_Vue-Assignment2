const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      confirmedInput: '',
    }
  },
  methods: {
    showAlert() {
      alert('Look at me!');
    },
    saveInput(event) {
      this.userInput = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.userInput;
    },
  },
}).mount('#assignment')
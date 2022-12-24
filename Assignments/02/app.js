const app = Vue.createApp({
  data() {
    return {
      message: "You are Learning VueJS.",
      initialContent: '',
      finalContent: ''
    };
  },

  methods: {
    sendAlertMessage() {
      alert(this.message);
    },

    setInitialContent(event){
        this.initialContent = event.target.value;
    },

    setFinalContent(event){
        this.finalContent = event.target.value;
    }
  },
});

app.mount("#assignment");

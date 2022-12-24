const app = Vue.createApp({
    data(){
        return {
          name: "Sri Manikanta Palakollu",
          age: 23,
          imageLink:
            "https://www.positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png",
        };
    },
    methods: {
        ageInFiveYears() {
            return this.age + 5;
        },
        generateFavouriteNumber(){
            return Math.random();
        }
    }
});

app.mount("#assignment");
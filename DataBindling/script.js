const App = {
    data(){
        return {
            imageSrc: "./lion.jpg",
            imgAltText: "Roaring Lion",
            cardTitle: "A Roring Lion",
            cardDescription: "Some Desc about Lion...!",
            buttonTitle: "Check More about Lion",
            url: "https://en.wikipedia.org/wiki/Lion"
        }
    }
};

Vue.createApp(App).mount('#lion');
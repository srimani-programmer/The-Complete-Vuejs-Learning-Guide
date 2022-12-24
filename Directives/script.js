const App = {
    data(){
        return {
            languagesList: [{
                id: "_c",
                title: "C",
                desc: "It is a low level programming language",
                logo: "./assests/c.png",
                url: "https://en.wikipedia.org/wiki/C_(programming_language)"
            }, 
            {
                id: "_cpp",
                title: "C++",
                desc: "It is a low level programming language",
                logo: "./assests/cpp.png",
                url: "https://en.wikipedia.org/wiki/C_(programming_language)"
            }, 
            {
                id: "_java",
                title: "Java",
                desc: "It is a low level programming language",
                logo: "./assests/java.png",
                url: "https://en.wikipedia.org/wiki/C_(programming_language)"
            }, 
            {
                id: "_js",
                title: "Javascript",
                desc: "It is a low level programming language",
                logo: "./assests/js.png",
                url: "https://en.wikipedia.org/wiki/C_(programming_language)"
            }
        ]
        }
    }
};

Vue.createApp(App).mount("#language-cards");
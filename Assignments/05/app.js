const app = {

    data() {
        return {
            user1: false,
            user2: false,
            cssClass: "",
            initalDisplayState: true,
            cssColor: ""
        }
    },
    computed: {
        getCssClass() {
            if (this.user1) {
                return this.cssClass;
            } else if (this.user2) {
                return this.cssClass;
            }
        },

        applyToogleStyle() {
            if (this.initalDisplayState) {
                console.log('visible');
                return 'visible';
            } else {
                console.log('hidden');
                return "hidden";
            }
        }

    },
    methods: {
        detectKeyStroke(event) {
            let value = event.target.value;
            console.log(value);
            if (value === "user1") {
                this.cssClass = value;
                this.user1 = true;
            } else if (value === "user2") {
                this.cssClass = value;
                this.user2 = true;
            } else {
                this.cssClass = value;
            }
        },

        toggleElement() {
            this.initalDisplayState = !this.initalDisplayState;
            console.log(this.initalDisplayState);
        },

        getCssColorKeyStroke(event) {
            this.cssColor = event.target.value;
        }
    },

}

Vue.createApp(app).mount('#assignment')
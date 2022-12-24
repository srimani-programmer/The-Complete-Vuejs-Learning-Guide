const app = {
    data() {
        return {
            total: 0
        }
    },
    methods: {
        incrementNumber(value) {
            this.total += Number(value);
        },
    },
    computed: {
        result() {
            if (this.total > 37) {
                return "Too much!";
            } else if (this.total < 37) {
                return "Not there yet";
            } else if (this.total === 37) {
                return "37";
            }
        }
    },
    watch: {
        result() {
            let _self = this;
            setTimeout(function () {
                _self.total = 0;
            }, 5000);
        }
    }
}

Vue.createApp(app).mount("#assignment");
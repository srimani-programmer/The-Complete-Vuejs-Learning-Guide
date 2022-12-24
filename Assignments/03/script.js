const app = {
    data() {
        return {
            courseList: [
                {
                    name: "Java Refresher!",
                    instructor: "John Doe",
                    price: 9999,
                    courseLang: "English",
                    courseImg: "./images/java.png",
                    imgAltText: "Course Icon"
                },
                {
                    name: "React Refresher!",
                    instructor: "John Doe",
                    price: 7999,
                    courseLang: "English",
                    courseImg: "./images/React.png",
                    imgAltText: "Course Icon"
                },
                {
                    name: "VueJS Refresher!",
                    instructor: "John Doe",
                    price: 5999,
                    courseLang: "English",
                    courseImg: "./images/vue.png",
                    imgAltText: "Course Icon"
                },
                {
                    name: "NodeJS Refresher!",
                    instructor: "John Doe",
                    price: 8999,
                    courseLang: "English",
                    courseImg: "./images/node.png",
                    imgAltText: "Course Icon"
                },
                {
                    name: "MERN Refresher!",
                    instructor: "John Doe",
                    price: 11999,
                    courseLang: "English",
                    courseImg: "./images/mern.png",
                    imgAltText: "Course Icon"
                }, {
                    name: "MEVN Refresher!",
                    instructor: "John Doe",
                    price: 11999,
                    courseLang: "English",
                    courseImg: "./images/mevn.png",
                    imgAltText: "Course Icon"
                }, {
                    name: "MEAN Refresher!",
                    instructor: "John Doe",
                    price: 1199,
                    courseLang: "English",
                    courseImg: "./images/mean.jpeg",
                    imgAltText: "Course Icon"
                }
            ],
            buyerList: []
        }
    },

    methods: {
        addToCart(course) {
            const isObjectAvailable = this.buyerList.some(item => item.name === course.name);
            if (isObjectAvailable) {
                this.buyerList = this.buyerList.map((item) => {
                    if (item.name === course.name) {
                        return { ...item, count: item.count + 1 }
                    }
                    return item;
                })
            } else {
                this.buyerList.push({ name: course.name, count: 1, price: course.price });
            }
        },

        fetchCourseCountInCart(course) {
            const isObjectAvailable = this.buyerList.some(item => item.name === course.name);

            if (isObjectAvailable) {
                const courseItem = this.buyerList.filter(item => {
                    if (item.name === course.name) {
                        return item;
                    }
                })
                return courseItem[0].count;
            }
            return 0;
        }
    },

    computed: {
        finalBill() {
            let totalAmount = this.buyerList.reduce((accumulator, course) => (course.price * course.count) + accumulator, 0);

            return (totalAmount + (totalAmount * 0.18)).toFixed(2);
        }
    }
}


Vue.createApp(app).mount("#courserApp");
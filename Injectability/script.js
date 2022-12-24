console.log('Script Loaded.');

const App = {
    data(){
        return {
            studentName : "Jhon",
            studentAge: 24,
            studentBloodGroup: "O+"
        }
    }
};

Vue.createApp(App).mount('#student-data');
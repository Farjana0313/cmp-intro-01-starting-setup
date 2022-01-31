const app = Vue.createApp({
    data() {
        return {
            friends: [{
                    id: 'manuel',
                    name: 'Manuel',
                    phone: '01478244',
                    email: 'manuel@gmail.com'
                },
                {
                    id: 'julie',
                    name: 'Julie',
                    phone: '14174774',
                    email: 'julie@localhost.com'
                }
            ]
        }
    },
});


app.component('friend-contact',{
    template:,
    data(){
        return{
            detailsAreVisible:false
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible=!this.detailsAreVisible;
        }
    }
});
app.mount('#app');
const { createApp } = Vue 

createApp ({
    data() {
        return {
            API: `https://flynn.boolean.careers/exercises/api/random/mail`,
            emails : []
        }
    },
    methods: {
        generateEmail() {
            axios.get(this.API).then((response) => {
                console.log(response.data.response)
                this.emails.push(response.data.response)
            })
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.generateEmail() 
        }
    }
}).mount('#app')
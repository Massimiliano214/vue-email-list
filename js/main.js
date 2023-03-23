const { createApp } = Vue

createApp({
  data() {
    return {
      emailGenerated: ''
    }
  },
  mounted() {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then( (response) => {
        console.log(response);
        this.emailGenerated = response.data.response;
    })
  }
}).mount('#app')
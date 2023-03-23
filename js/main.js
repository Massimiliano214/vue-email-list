const { createApp } = Vue

createApp({
  data() {
    return {
      emailGenerated: []
    }
  },
  mounted() {
    for (i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (response) => {
            console.log(response);
            this.emailGenerated.push(response.data.response);
            console.log(this.emailGenerated);
            console.log(this.emailGenerated.length);
        })
    }
  }
}).mount('#app')
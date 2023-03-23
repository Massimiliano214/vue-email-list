const { createApp } = Vue

createApp({
  data() {
    return {
      emailGenerated: [

      ]
    }
  },
  methods: {
    repeatEmail() {
        
    }
  },
  mounted() {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then( (response) => {
        console.log(response);
        //this.emailGenerated.primaEmail = response.data.response;

        this.emailGenerated.push(response.data.response);
        console.log(this.emailGenerated);
    })
  }
}).mount('#app')
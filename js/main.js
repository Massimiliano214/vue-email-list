const { createApp } = Vue

createApp({
  data() {
    return {
      emailGenerated: [

      ]
    }
  },
  methods: {
    
  },
  mounted() {
    for (i = 0; i < 10; i++) {
        console.log("ciao" + this.emailGenerated);
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (response) => {
            console.log(response);
            //this.emailGenerated.primaEmail = response.data.response;

            this.emailGenerated.push(response.data.response);
            console.log(this.emailGenerated);
            console.log(this.emailGenerated.length);
        })
    }
  }
}).mount('#app')
const { createApp } = Vue

createApp({
  data() {
    return {
      emailGenerated: [
        primaEmail = "",
        secondaEmail = "",
        terzaEmail = "",
        quartaEmail = "",
        quintaEmail = "",
        sestaEmail = "",
        settimaEmail = "",
        ottavaEmail = "",
        nonaEmail = "",
        decimaEmail = "",
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

        this.emailGenerated.forEach((element, index) => {
            element = response.data.response;
        });
    })
  }
}).mount('#app')
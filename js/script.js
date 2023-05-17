const { createApp } = Vue

createApp({
  data() {
    return {
      email: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emails : []
    }
  },
  mounted() {
for (let i = 0; i < 10; i++) {
    // const rispEle = array[i];
    axios.get( this.email ).then((risp) => {
       const risposta = risp.data.response
       this.emails.push(risposta)
     }); 
}

}
}).mount('#app')
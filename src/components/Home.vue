
<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12 >
        <v-img
          :src="require('../assets/ipiranga.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>
            <v-flex xs12  justify-center>
    <form
      ref="form"
      id="myForm"
      class="my-3"
      :lazy-validation="lazy"
      action="http://localhost:8081/api/authorize?client_id=app_kmv&redirect_uri=http://localhost:8004/%23/hello&response_type=code&scope=write&state=oeiqwufpqonepquwihfqewuifhqeiupf"
      method="get"
    >
    <input type="hidden" value="" v-model="client_id" />
    <input type="hidden" value="" v-model="redirect_uri" />
    <input type="hidden" value="" v-model="response_type" />
    <input type="hidden" value="" v-model="scope" />
    <input type="hidden" value="" v-model="state" />
      
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        authorize!
      </v-btn>
    </form>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
 data: () => ({
     // url: 'http://localhost:8081/authorize?client_id=app_kmv&redirect_uri=http://localhost:8004/&response_type=code&scope=write&state=oeiqwufpqonepquwihfqewuifhqeiupf',
      valid: true,
      value: true,
      client_id:'app_kmv',
      redirect_uri:'http://localhost:8004/home',
      response_type:'code',
      scope:'write',
      state:'oeiqwufpqonepquwihfqewuifhqeiupf', 
      lazy: false,
    }),
    methods: {
      validate (e) {
          // let dados = '?client_id='+this.$data.client_id
          // +'&redirect_uri='+this.$data.redirect_uri+'&response_type='+this.response_type
          // +'&scope='+this.$data.scope+'&state='+this.state
          // let myForm = document.getElementById('myForm')
          // this.$data.url = this.$data.url + dados
         // this.$attrs.action = this.$data.url + dados
        window.location = 'http://localhost:8081/api/authorize?client_id=app_kmv&redirect_uri=http://localhost:8004/home&response_type=code&scope=write&state=oeiqwufpqonepquwihfqewuifhqeiupf',
        e.preventDefault();
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
};
</script>

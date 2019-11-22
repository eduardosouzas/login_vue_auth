
<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
  <v-img
          :src="require('../assets/ipiranga.png')"
      class="white--text align-end"
      height="200px"
        >
        <v-card-title>Ipiranga</v-card-title>
        </v-img>
   
    <v-card-subtitle class="pb-0">Bem vindo</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Teste de retorno de auth</div>

      <div>Projeto KM de Vantagens</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Compartilhar
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explorar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Hello',
 data: () => ({
      client_id:'app_kmv',
    }),
    methods: {
      validate () {
       
      },
      reset () {
      },
      resetValidation () {
      },
    },
};
</script>

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
<v-row
class="mb-6"
justify="center"
no-gutters
>
<v-col lg="4">
    <v-form
      contain
      ref="form"
      class="my-3"
      v-model="valid"
      @submit="validate"
      :lazy-validation="lazy"
      action="http://localhost:8081/api/login"
      method="post"
    >

    <input type="hidden" value="" name="request_id" v-model="request_id" />
      <v-text-field
        v-model="username"
        :counter="10"
        :rules="nameRules"
        label="CPF"
        name="username"
        required
      ></v-text-field>


        <v-text-field
            autocomplete="current-password"
            :value="password"
            name="password"
            label="informe a senha"
            hint="Your password passed! Password rules are not meant to be broken!"
            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value = !value)"
            :type="value ? 'password' : 'text'"
            :rules="passwordRules"
            @input="_=>password=_"
          ></v-text-field>
     <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        type="submit"
      >
        Enviar
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Limpar
      </v-btn>
    </v-form>
</v-col>


</v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'LoginForm',
  created: function() {
   this.$data.request_id = this.$route.query.request_id
   window.console.log(this.$data.request_id)
  },
 data: () => ({
      request_id: '',
      valid: true,
      value: true,
      password: '',
      username: '',
      lazy: false,
      nameRules: [
        v => !!v || 'CPF é obrigatório',
      ],
      passwordRules: [
        v => !!v || 'senha é obrigatório',
      ],
    }),
    methods: {
      validate (e) {
        if (this.$refs.form.validate()) {
          this.snackbar = true;
          return true
        }
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

<template>
  <v-layout
    column
  >
  <h1>Fill in the form with order details</h1>
  <v-form ref="form" :lazy-validation="true">  
    <v-text-field
        :value="details.name"
        @input="$store.commit('order/setAddress', { key: 'name', value: $event })"
        label="Name"
        :rules="requiredRules"
        required
    ></v-text-field>

    <v-text-field
        :value="details.surname"
        :rules="requiredRules"
        @input="$store.commit('order/setAddress', { key: 'surname', value: $event })"
        label="Surname"
        required
    ></v-text-field>

    <v-text-field
        :value="details.street"
        :rules="requiredRules"
        @input="$store.commit('order/setAddress', { key: 'street', value: $event })"
        label="Street"
        required
    ></v-text-field>

    <v-text-field
        :value="details.buildingNumber"
        :rules="requiredRules"
        @input="$store.commit('order/setAddress', { key: 'buildingNumber', value: $event })"
        label="Building"
        required
    ></v-text-field>

    <v-text-field
        :value="details.flatNumber"
        @input="$store.commit('order/setAddress', { key: 'flatNumber', value: $event })"
        label="Flat"
    ></v-text-field>

    <v-text-field
        :value="details.postcode"
        :rules="requiredRules"
        @input="$store.commit('order/setAddress', { key: 'postcode', value: $event })"
        label="Post code"
        required
    ></v-text-field>

    <v-text-field
        :value="details.city"
        :rules="requiredRules"
        @input="$store.commit('order/setAddress', { key: 'city', value: $event })"
        label="City"
        required
    ></v-text-field>

    <v-text-field
        :value="details.phone"
        @input="$store.commit('order/setAddress', { key: 'phone', value: $event })"
        label="Phone number"
    ></v-text-field>

    <v-text-field
        :value="details.email"
        :rules="emailRules"
        @input="$store.commit('order/setAddress', { key: 'email', value: $event })"
        label="Email address"
        required
    ></v-text-field>

    <v-btn-toggle class="mt-2" background-color="none">
      <div class="mx-1">
        <v-btn @click="$router.push('/generator')" small color="primary">Back</v-btn>
      </div>
      <div class="mx-1">
        <v-btn color="primary" small @click="submit">Submit</v-btn>
      </div>
    </v-btn-toggle>

  </v-form>

  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('order', ['details'])
  },
  data() {
      return {
        requiredRules: [
            v => !!v || 'This field is required'
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
      }
  },
  methods: {
      submit() {
        if(this.$refs.form.validate()) {
            this.$store.commit('order/saveToLocalStorage');
            this.$router.push('/summary');
        }
      }
  }
}
</script>

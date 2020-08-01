<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <t-shirt-preview :url="print.url" :side="print.side" />

    <v-radio-group :value="print.side" @change="$store.dispatch('order/flipPrintSide')">
      <v-radio label="Front" value="front"></v-radio>
      <v-radio label="Back" value="back"></v-radio>
    </v-radio-group>

    <div class="mt-2">
      <v-btn @click="$store.commit('order/saveToLocalStorage'); $router.push('/generator')" small color="primary">Next</v-btn>
    </div>


  </v-layout>
</template>

<script>
import TShirtPreview from '~/components/TShirtPreview.vue'
import { mapState } from 'vuex'
export default {
  components: {
    TShirtPreview
  },
  computed: {
    ...mapState('order', ['print'])
  },
  created() {
    if (this.print.url === "") {
      this.$store.dispatch('order/generatePrint');
    }
  }
}
</script>

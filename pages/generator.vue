<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <t-shirt-preview :url="print.url" :side="print.side" />

    <div class="mt-2">
      <v-btn @click="$store.dispatch('order/generatePrint')" small color="primary">Change print</v-btn>
    </div>

    <div class="mt-2">
      <v-btn @click="$store.commit('order/saveToLocalStorage'); $router.push('/form')" small color="primary">Next</v-btn>
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
  }
}
</script>

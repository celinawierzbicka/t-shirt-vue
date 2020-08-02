<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <h1>Select the print on your t-shirt</h1>
    <v-btn-toggle class="mt-2">
      <div class="mx-1">
        <v-btn @click="$store.dispatch('order/goToPreviousPrint')" :disabled="isPreviousPrintAvailable" small color="primary">Previous</v-btn>
      </div>
      <div class="mx-1">
        <v-btn @click="$store.dispatch('order/generatePrint')" small color="primary">Get random print</v-btn>
      </div>
      <div class="mx-1">
        <v-btn @click="$store.dispatch('order/goToNextPrint')" :disabled="isNextPrintAvailable" small color="primary">Next</v-btn>
      </div>
    </v-btn-toggle>
    <t-shirt-preview class="mt-4" :url="print.url" :side="print.side" />

  <v-btn-toggle class="mt-2" background-color="none">
    <div class="mx-1">
      <v-btn @click="$router.push('/')" small color="primary">Back</v-btn>
    </div>
    <div class="mx-1">
      <v-btn @click="$store.commit('order/saveToLocalStorage'); $router.push('/form')" small color="primary">Next</v-btn>
    </div>
  </v-btn-toggle>
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
    ...mapState('order', ['print']),
    isPreviousPrintAvailable() {
      if(!this.print.previousUrl || this.print.previousUrl === this.print.url ) {
        return true
      }
    },
    isNextPrintAvailable() {
      if(!this.print.nextUrl || this.print.nextUrl === this.print.url) {
        return true
      }
    }
  }
}
</script>

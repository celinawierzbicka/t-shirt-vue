<template>
  <v-layout
    column
  >
    <h1>Summary of your order:</h1>
    <div class="text-left my-4">
      <v-dialog
        v-model="dialog"
        width="300"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
          >
            Preview t-shirt
          </v-btn>
        </template>

        <v-card>
          <t-shirt-preview class="mt-4" :url="print.url" :side="print.side" />
          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-card
        max-width="600"
        tile
    >
        <v-list-item two-line>
            <v-list-item-content>
            <v-list-item-title>Print side</v-list-item-title>
            <v-list-item-subtitle>{{ print.side }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
            <v-list-item-content>
            <v-list-item-title>Name</v-list-item-title>
            <v-list-item-subtitle>{{ details.name }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
            <v-list-item-content>
            <v-list-item-title>Surname</v-list-item-title>
            <v-list-item-subtitle>{{ details.surname }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
            <v-list-item-content>
            <v-list-item-title>Street</v-list-item-title>
            <v-list-item-subtitle>{{ details.street }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
            <v-list-item-content>
            <v-list-item-title>Building</v-list-item-title>
            <v-list-item-subtitle>{{ details.buildingNumber }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
            <v-list-item-content>
            <v-list-item-title>Flat</v-list-item-title>
            <v-list-item-subtitle>{{ details.flatNumber }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
            <v-list-item-content>
            <v-list-item-title>Postcode</v-list-item-title>
            <v-list-item-subtitle>{{ details.postcode }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
            <v-list-item-content>
            <v-list-item-title>City</v-list-item-title>
            <v-list-item-subtitle>{{ details.city }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>


        <v-list-item two-line>
            <v-list-item-content>
            <v-list-item-title>Phone</v-list-item-title>
            <v-list-item-subtitle>{{ details.phone }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-list-item two-line>
            <v-list-item-content>
            <v-list-item-title>Email address</v-list-item-title>
            <v-list-item-subtitle>{{ details.email }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-card>
    
    <v-btn-toggle class="mt-2" background-color="#121212">
      <div class="mr-1">
        <v-btn @click="$router.push('/form')" color="primary">Back</v-btn>
      </div>
      <div class="mx-1">
        <v-btn color="primary" @click="$router.push('/thank-you')">Submit order</v-btn>
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
    ...mapState('order', ['details', 'print'])
  },
  data () {
      return {
        dialog: false,
      }
  }
}
</script>

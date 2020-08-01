<template>
  <v-layout
    column
  >

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

    <t-shirt-preview class="mt-4" :url="print.url" :side="print.side" />

    <v-btn class="mt-4" color="primary" @click="$router.push('/thank-you')">Submit order</v-btn>


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
}
</script>

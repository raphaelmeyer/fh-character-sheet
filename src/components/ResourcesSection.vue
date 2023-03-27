<script setup lang="ts">
import ItemCounter from './ItemCounter.vue'
</script>

<template>
  <v-card color="grey-lighten-3">
    <v-card-item>
      <v-card-title>Resources</v-card-title>
      <v-card-text>
        <v-row>
          <v-col class="d-flex">
            <v-icon icon="mdi-tree-outline"> </v-icon>
            <item-counter :value="0"> </item-counter>
          </v-col>
          <v-col class="d-flex">
            <v-icon icon="mdi-hammer"> </v-icon>
            <item-counter :value="0"> </item-counter>
          </v-col>
          <v-col class="d-flex">
            <v-icon icon="mdi-cow"> </v-icon>
            <item-counter :value="0"> </item-counter>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex">
            <v-icon icon="mdi-sprout"> </v-icon>
            <item-counter :value="0"> </item-counter>
          </v-col>
          <v-col class="d-flex">
            <v-icon icon="mdi-peanut"> </v-icon>
            <item-counter :value="0"> </item-counter>
          </v-col>
          <v-col class="d-flex">
            <v-icon icon="mdi-mushroom"> </v-icon>
            <item-counter :value="0"> </item-counter>
          </v-col>
          <v-col class="d-flex">
            <v-icon icon="mdi-pine-tree"> </v-icon>
            <item-counter :value="0"> </item-counter>
          </v-col>
          <v-col class="d-flex">
            <v-icon icon="mdi-flower"> </v-icon>
            <item-counter :value="0"> </item-counter>
          </v-col>
          <v-col class="d-flex">
            <v-icon icon="mdi-spa"> </v-icon>
            <item-counter :value="0"> </item-counter>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card-item>
  </v-card>
</template>

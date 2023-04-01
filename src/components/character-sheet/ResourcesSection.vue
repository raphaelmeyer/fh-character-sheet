<script setup lang="ts">
import ItemCounter from './ItemCounter.vue'
</script>

<template>
  <v-card color="grey-lighten-3">
    <v-card-item>
      <v-card-title>Resources</v-card-title>
    </v-card-item>
    <v-card-text>
      <v-row>
        <v-col cols="1"> <v-icon icon="mdi-tree-outline"> </v-icon></v-col>
        <v-col> <item-counter :value="0"> </item-counter> </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="1"> <v-icon icon="mdi-hammer"> </v-icon> </v-col>
        <v-col> <item-counter :value="0"> </item-counter> </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="1"> <v-icon icon="mdi-cow"> </v-icon></v-col>
        <v-col> <item-counter :value="0"> </item-counter> </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1"> <v-icon icon="mdi-sprout"> </v-icon></v-col>
        <v-col> <item-counter :value="0"> </item-counter> </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="1"> <v-icon icon="mdi-peanut"> </v-icon> </v-col>
        <v-col> <item-counter :value="0"> </item-counter> </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="1"> <v-icon icon="mdi-mushroom"> </v-icon> </v-col>
        <v-col> <item-counter :value="0"> </item-counter> </v-col>
      </v-row>
      <v-row>
        <v-col cols="1"> <v-icon icon="mdi-pine-tree"> </v-icon></v-col>
        <v-col> <item-counter :value="0"> </item-counter> </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="1"> <v-icon icon="mdi-flower"> </v-icon></v-col>
        <v-col> <item-counter :value="0"> </item-counter> </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="1"> <v-icon icon="mdi-spa"> </v-icon></v-col>
        <v-col> <item-counter :value="0"> </item-counter> </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

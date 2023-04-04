<script setup lang="ts">
import { resources as icons } from '@/domain/icons';

import ItemCounter from './ItemCounter.vue';
</script>

<template>
  <v-card color="grey-lighten-3">
    <v-card-item>
      <v-card-title>Resources</v-card-title>
    </v-card-item>
    <v-card-text>
      <v-row>
        <v-col cols="1" class="d-flex justify-center align-center">
          <v-img :src="icons.lumber" max-width="1.5em"></v-img>
        </v-col>
        <v-col> <item-counter :value="0"> </item-counter> </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="1" class="d-flex justify-center align-center">
          <v-img :src="icons.metal" max-width="1.5em"></v-img>
        </v-col>
        <v-col> <item-counter :value="0"> </item-counter> </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="1" class="d-flex justify-center align-center">
          <v-img :src="icons.hide" max-width="1.5em"></v-img>
        </v-col>
        <v-col> <item-counter :value="0"> </item-counter> </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1" class="d-flex justify-center align-center">
          <v-img :src="icons.arrowvine" max-height="1.5em"></v-img>
        </v-col>
        <v-col> <item-counter :value="0"> </item-counter> </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="1" class="d-flex justify-center align-center">
          <v-img :src="icons.axenut" max-height="1.5em"></v-img>
        </v-col>
        <v-col> <item-counter :value="0"> </item-counter> </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="1" class="d-flex justify-center align-center">
          <v-img :src="icons.corpsecap" max-height="1.5em"></v-img>
        </v-col>
        <v-col> <item-counter :value="0"> </item-counter> </v-col>
      </v-row>
      <v-row>
        <v-col cols="1" class="d-flex justify-center align-center">
          <v-img :src="icons.flamefruit" max-height="1.5em"></v-img>
        </v-col>
        <v-col> <item-counter :value="0"> </item-counter> </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="1" class="d-flex justify-center align-center">
          <v-img :src="icons.rockroot" max-height="1.5em"></v-img>
        </v-col>
        <v-col> <item-counter :value="0"> </item-counter> </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="1" class="d-flex justify-center align-center">
          <v-img :src="icons.snowthistle" max-height="1.5em"></v-img>
        </v-col>
        <v-col> <item-counter :value="0"> </item-counter> </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

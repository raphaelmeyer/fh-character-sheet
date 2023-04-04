<script setup lang="ts">
import type { Character } from '@/domain/character';
import { colors } from '@/domain/colors';

import ResourceItem from './ResourceItem.vue';

defineProps<{ character: Character }>();
</script>

<template>
  <v-card :color="colors[character].background">
    <v-card-item>
      <v-card-title>Resources</v-card-title>
    </v-card-item>
    <v-card-text>
      <v-row>
        <ResourceItem resource="lumber"></ResourceItem>
        <v-divider vertical></v-divider>
        <ResourceItem resource="metal"></ResourceItem>
        <v-divider vertical></v-divider>
        <ResourceItem resource="hide"></ResourceItem>
      </v-row>
      <v-row>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <ResourceItem resource="arrowvine"></ResourceItem>
        <v-divider vertical></v-divider>
        <ResourceItem resource="axenut"></ResourceItem>
        <v-divider vertical></v-divider>
        <ResourceItem resource="corpsecap"></ResourceItem>
      </v-row>
      <v-row>
        <ResourceItem resource="flamefruit"></ResourceItem>
        <v-divider vertical></v-divider>
        <ResourceItem resource="rockroot"></ResourceItem>
        <v-divider vertical></v-divider>
        <ResourceItem resource="snowthistle"></ResourceItem>
      </v-row>
    </v-card-text>
  </v-card>
</template>

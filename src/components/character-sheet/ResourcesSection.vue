<script setup lang="ts">
import type { Character, Resources } from '@/domain/character';
import { colors } from '@/domain/colors';
import type { Resource } from '@/domain/resources';

import ResourceItem from './ResourceItem.vue';

defineEmits<{ (e: 'change', resource: Resource, diff: number): void }>();
defineProps<{ character: Character; resources: Resources }>();
</script>

<template>
  <v-card :color="colors[character].background">
    <v-card-item>
      <v-card-title>Resources</v-card-title>
    </v-card-item>
    <v-card-text>
      <v-row>
        <ResourceItem
          resource="lumber"
          :amount="resources.lumber"
          @change="(resources, diff) => $emit('change', resources, diff)"
        ></ResourceItem>
        <v-divider vertical></v-divider>
        <ResourceItem resource="metal" :amount="1"></ResourceItem>
        <v-divider vertical></v-divider>
        <ResourceItem resource="hide" :amount="1"></ResourceItem>
      </v-row>
      <v-row>
        <v-col>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <ResourceItem resource="arrowvine" :amount="0"></ResourceItem>
        <v-divider vertical></v-divider>
        <ResourceItem resource="axenut" :amount="0"></ResourceItem>
        <v-divider vertical></v-divider>
        <ResourceItem resource="corpsecap" :amount="0"></ResourceItem>
      </v-row>
      <v-row>
        <ResourceItem resource="flamefruit" :amount="0"></ResourceItem>
        <v-divider vertical></v-divider>
        <ResourceItem resource="rockroot" :amount="0"></ResourceItem>
        <v-divider vertical></v-divider>
        <ResourceItem resource="snowthistle" :amount="0"></ResourceItem>
      </v-row>
    </v-card-text>
  </v-card>
</template>

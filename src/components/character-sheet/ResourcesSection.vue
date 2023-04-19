<script setup lang="ts">
import type { Character } from '@/domain/character';
import { colors } from '@/domain/colors';
import type { Resource, Resources } from '@/domain/resources';

import ResourceItem from '@/components/character-sheet/ResourceItem.vue';

defineEmits<{ (e: 'change', resource: Resource, diff: number): void }>();
defineProps<{ character: Character; resources: Resources }>();

const foo: Resource[][] = [
  ['lumber', 'metal', 'hide'],
  [],
  ['arrowvine', 'axenut', 'corpsecap'],
  ['flamefruit', 'rockroot', 'snowthistle']
];
</script>

<template>
  <v-card :color="colors[character].background">
    <v-card-item>
      <v-card-title>Resources</v-card-title>
    </v-card-item>
    <v-card-text>
      <v-row v-for="(cols, row) in foo" :key="row">
        <v-col v-if="cols.length === 0">
          <v-divider></v-divider>
        </v-col>
        <template v-for="(resource, col) in cols" :key="col">
          <v-divider v-if="col !== 0" vertical></v-divider>
          <ResourceItem
            :resource="resource"
            :amount="resources[resource]"
            @change="(resource, diff) => $emit('change', resource, diff)"
          >
          </ResourceItem>
        </template>
      </v-row>
    </v-card-text>
  </v-card>
</template>

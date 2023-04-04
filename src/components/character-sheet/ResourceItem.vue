<script setup lang="ts">
import { resources as icons } from '@/domain/icons';
import type { Resource } from '@/domain/resources';

import ItemCounter from './ItemCounter.vue';

defineProps<{ resource: Resource }>();
</script>

<template>
  <v-col cols="1" class="d-flex justify-center align-center">
    <v-img :src="icons[resource]" max-width="1.5em" max-height="1.5em"></v-img>
  </v-col>
  <v-col> <item-counter :value="0"> </item-counter> </v-col>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { useMercenaryStore } from '@/stores/mercenary';

import CharacterSheetContent from '@/components/character-sheet/CharacterSheetContent.vue';
import MenuBar from '@/components/character-sheet/MenuBar.vue';

const route = useRoute();
const store = useMercenaryStore();

const mercenary = computed(() => store.mercenaries.find((ch) => ch.id === Number(route.params.id)));
</script>

<template>
  <v-app v-if="mercenary">
    <MenuBar :mercenary="mercenary"></MenuBar>
    <v-main>
      <CharacterSheetContent :mercenary="mercenary"></CharacterSheetContent>
    </v-main>
  </v-app>
</template>

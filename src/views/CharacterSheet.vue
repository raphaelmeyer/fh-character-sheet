<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

import type { Mercenary } from '@/domain/character';

import { useMercenaryStore } from '@/stores/mercenary';

import ExperienceSection from '@/components/character-sheet/ExperienceSection.vue';
import GoldSection from '@/components/character-sheet/GoldSection.vue';
import MasteriesSection from '@/components/character-sheet/MasteriesSection.vue';
import MenuBar from '@/components/character-sheet/MenuBar.vue';
import OverviewSection from '@/components/character-sheet/OverviewSection.vue';
import PerksSection from '@/components/character-sheet/PerksSection.vue';
import ResourcesSection from '@/components/character-sheet/ResourcesSection.vue';

const route = useRoute();
const store = useMercenaryStore();

const mercenary = ref<Mercenary>();

watchEffect(() => {
  mercenary.value = store.mercenaries.find((ch) => ch.id === Number(route.params.id));
});
</script>

<template>
  <v-app v-if="mercenary">
    <MenuBar :mercenary="mercenary"></MenuBar>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <OverviewSection :mercenary="mercenary"></OverviewSection>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <ExperienceSection :char-id="mercenary.id"></ExperienceSection>
          </v-col>
          <v-col>
            <GoldSection></GoldSection>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <ResourcesSection></ResourcesSection>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <PerksSection></PerksSection>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <MasteriesSection></MasteriesSection>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

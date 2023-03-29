<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

import type { Character } from '@/domain/character';

import { useCharacterStore } from '@/stores/character';

import ExperienceSection from '@/components/ExperienceSection.vue';
import GoldSection from '@/components/GoldSection.vue';
import MasteriesSection from '@/components/MasteriesSection.vue';
import MenuBar from '@/components/MenuBar.vue';
import OverviewSection from '@/components/OverviewSection.vue';
import PerksSection from '@/components/PerksSection.vue';
import ResourcesSection from '@/components/ResourcesSection.vue';

const route = useRoute();
const store = useCharacterStore();

const character = ref<Character>();

watchEffect(() => {
  character.value = store.characters.find((ch) => ch.id === Number(route.params.id));
});
</script>

<template>
  <v-app v-if="character">
    <MenuBar :character="character"></MenuBar>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <OverviewSection :character="character"></OverviewSection>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <ExperienceSection></ExperienceSection>
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

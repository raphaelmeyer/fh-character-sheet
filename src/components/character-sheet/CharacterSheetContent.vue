<script setup lang="ts">
import { useMercenaryStore } from '@/stores/mercenary';

import ExperienceSection from '@/components/character-sheet/ExperienceSection.vue';
import GoldSection from '@/components/character-sheet/GoldSection.vue';
import MasteriesSection from '@/components/character-sheet/MasteriesSection.vue';
import OverviewSection from '@/components/character-sheet/OverviewSection.vue';
import PerksSection from '@/components/character-sheet/PerksSection.vue';
import ResourcesSection from '@/components/character-sheet/ResourcesSection.vue';
import type { Mercenary } from '@/domain/character';

const props = defineProps<{ mercenary: Mercenary }>();

const store = useMercenaryStore();

function changeXp(diff: number): void {
  store.changeXp(props.mercenary.id, diff);
}

function changeGold(diff: number): void {
  store.changeGold(props.mercenary.id, diff);
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <OverviewSection
          :name="mercenary.name"
          :character="mercenary.character"
          :xp="mercenary.xp"
        ></OverviewSection>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ExperienceSection
          :character="mercenary.character"
          :xp="mercenary.xp"
          @change="changeXp"
        ></ExperienceSection>
      </v-col>
      <v-col>
        <GoldSection
          :character="mercenary.character"
          :gold="mercenary.gold"
          @change="changeGold"
        ></GoldSection>
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
</template>

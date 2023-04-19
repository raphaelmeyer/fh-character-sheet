<script setup lang="ts">
import { useMercenaryStore } from '@/stores/mercenary';

import ExperienceSection from '@/components/character-sheet/ExperienceSection.vue';
import GoldSection from '@/components/character-sheet/GoldSection.vue';
import MasteriesSection from '@/components/character-sheet/MasteriesSection.vue';
import OverviewSection from '@/components/character-sheet/OverviewSection.vue';
import PerksSection from '@/components/character-sheet/PerksSection.vue';
import ResourcesSection from '@/components/character-sheet/ResourcesSection.vue';
import type { Mercenary } from '@/domain/mercenary';
import type { Resource } from '@/domain/resources';

const props = defineProps<{ mercenary: Mercenary }>();

const store = useMercenaryStore();

function changeXp(diff: number): void {
  store.changeXp(props.mercenary.id, diff);
}

function changeGold(diff: number): void {
  store.changeGold(props.mercenary.id, diff);
}

function changeResource(resource: Resource, diff: number): void {
  store.changeResource(props.mercenary.id, resource, diff);
}

function changeTicks(diff: number): void {
  store.changeTicks(props.mercenary.id, diff);
}

function changePerk(id: number, diff: number): void {
  store.changePerk(props.mercenary.id, id, diff);
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
        <ResourcesSection
          :character="mercenary.character"
          :resources="mercenary.resources"
          @change="changeResource"
        ></ResourcesSection>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <PerksSection
          :character="mercenary.character"
          :ticks="mercenary.ticks"
          :perks="mercenary.perks"
          @change-ticks="changeTicks"
          @change="changePerk"
        ></PerksSection>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <MasteriesSection></MasteriesSection>
      </v-col>
    </v-row>
  </v-container>
</template>

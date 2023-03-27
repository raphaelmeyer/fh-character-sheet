<script setup lang="ts">
import type { Character } from '@/domain/character'

import ExperienceSection from '@/components/ExperienceSection.vue'
import GoldSection from '@/components/GoldSection.vue'
import MasteriesSection from '@/components/MasteriesSection.vue'
import MenuBar from '@/components/MenuBar.vue'
import OverviewSection from '@/components/OverviewSection.vue'
import PerksSection from '@/components/PerksSection.vue'
import ResourcesSection from '@/components/ResourcesSection.vue'

const character: Character = {
  name: 'Kagesawa Glay',
  xp: 85,
  level: 2
}
</script>

<template>
  <v-app>
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

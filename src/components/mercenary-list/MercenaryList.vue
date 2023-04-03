<script setup lang="ts">
import { useMercenaryStore } from '@/stores/mercenary';

import { colors } from '@/domain/colors';
import { avatars } from '@/domain/icons';

const store = useMercenaryStore();
</script>

<template>
  <v-row v-for="mercenary in store.mercenaries" :key="mercenary.id">
    <v-col>
      <v-card
        :color="colors[mercenary.character].primary"
        :to="{ path: `/character/${mercenary.id}` }"
      >
        <v-card-item>
          <v-card-title>
            <v-avatar :color="colors[mercenary.character].background">
              <v-img :src="avatars[mercenary.character]" max-height="1.5em" max-width="1.5em">
              </v-img>
            </v-avatar>
            <span class="ml-4">{{ mercenary.name }}</span>
          </v-card-title>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useCharacterStore } from '@/stores/character';

import { colors } from '@/domain/colors';
import { avatars } from '@/domain/icons';

const store = useCharacterStore();
</script>

<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
          <v-card color="indigo">
            <v-card-item>
              <v-card-title>
                <v-avatar icon="mdi-account-plus" color="indigo-lighten-4"></v-avatar>
                <span class="ml-4">New Character</span>
              </v-card-title>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-for="character in store.characters" :key="character.id">
        <v-col>
          <v-card
            :color="colors[character.character].primary"
            :to="{ path: `/character/${character.id}` }"
          >
            <v-card-item>
              <v-card-title>
                <v-avatar :color="colors[character.character].background">
                  <v-img :src="avatars[character.character]" max-height="1.5em" max-width="1.5em">
                  </v-img>
                </v-avatar>
                <span class="ml-4">{{ character.name }}</span>
              </v-card-title>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

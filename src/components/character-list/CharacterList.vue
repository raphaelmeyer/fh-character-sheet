<script setup lang="ts">
import { ref } from 'vue';

import NewCharacterDialog from './NewCharacterDialog.vue';

import { useCharacterStore } from '@/stores/character';

import { colors } from '@/domain/colors';
import { avatars } from '@/domain/icons';
import type { CharacterClass } from '@/domain/character';

const store = useCharacterStore();

const newCharDialog = ref(false);

function onCreate(character: CharacterClass, name: string): void {
  store.createCharacter(character, name);
  newCharDialog.value = false;
}

function onCancel(): void {
  newCharDialog.value = false;
}
</script>

<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
          <v-card color="indigo-lighten-5" @click="newCharDialog = true">
            <v-card-item>
              <v-card-title>
                <v-avatar icon="mdi-account-plus" color="indigo-lighten-3"></v-avatar>
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

  <NewCharacterDialog :dialog="newCharDialog" @create="onCreate" @cancel="onCancel">
  </NewCharacterDialog>
</template>

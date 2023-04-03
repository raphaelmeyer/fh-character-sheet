<script setup lang="ts">
import { ref } from 'vue';

import CreateDialog from './CreateDialog.vue';

import { useMercenaryStore } from '@/stores/mercenary';

import type { Character } from '@/domain/character';

const store = useMercenaryStore();

const createDialog = ref(false);

function onCreate(character: Character, name: string): void {
  store.create(character, name);
  createDialog.value = false;
}

function onCancel(): void {
  createDialog.value = false;
}
</script>

<template>
  <v-row>
    <v-col>
      <v-card color="indigo-lighten-5" @click="createDialog = true">
        <v-card-item>
          <v-card-title>
            <v-avatar icon="mdi-account-plus" color="indigo-lighten-3"></v-avatar>
            <span class="ml-4">Add Mercenary</span>
          </v-card-title>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>

  <CreateDialog :dialog="createDialog" @create="onCreate" @cancel="onCancel"> </CreateDialog>
</template>

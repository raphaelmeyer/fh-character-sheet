<script setup lang="ts">
import { useMercenaryStore } from '@/stores/mercenary';
import { ref } from 'vue';

const store = useMercenaryStore();

const selectFileInput = ref<HTMLInputElement>();

function selectFile(): void {
  selectFileInput.value?.click();
}

function loadMercenaries(event: Event): void {
  const file = (event.target as HTMLInputElement)?.files?.item(0);
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (typeof e.target?.result === 'string') {
        const data = e.target.result as string;
        store.fromJson(data);
      }
    };
    reader.readAsText(file);
  }
  (event.target as HTMLInputElement).value = '';
}

function saveFile(): void {
  const blob = new Blob([store.asJson], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = 'fh-character-sheets.json';
  link.click();
}

function resetStorage(): void {
  store.reset();
}
</script>

<template>
  <v-app-bar color="indigo">
    <v-app-bar-title>Frosthaven Character Sheets</v-app-bar-title>
    <template #append>
      <v-tooltip text="Load" location="bottom">
        <template #activator="{ props }">
          <v-btn v-bind="props" icon="mdi-file-account-outline" @click="selectFile"> </v-btn>
        </template>
      </v-tooltip>
      <v-tooltip text="Save" location="bottom">
        <template #activator="{ props }">
          <v-btn v-bind="props" icon="mdi-download" @click="saveFile"> </v-btn>
        </template>
      </v-tooltip>
      <v-tooltip text="Reset" location="bottom">
        <template #activator="{ props }">
          <v-btn v-bind="props" icon="mdi-trash-can-outline" @click="resetStorage"> </v-btn>
        </template>
      </v-tooltip>
    </template>
  </v-app-bar>

  <input ref="selectFileInput" type="file" @change="loadMercenaries" />
</template>

<style scoped>
input[type='file'] {
  display: none;
}
</style>

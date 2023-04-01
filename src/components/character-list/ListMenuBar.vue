<script setup lang="ts">
import { useCharacterStore } from '@/stores/character';
import { ref } from 'vue';

const store = useCharacterStore();

const selectFileInput = ref<HTMLInputElement>();

function selectFile(): void {
  selectFileInput.value?.click();
}

function loadCharacters(event: Event): void {
  const file = (event.target as HTMLInputElement)?.files?.item(0);
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (typeof e.target?.result === 'string') {
        const data = e.target.result as string;
        store.characters = JSON.parse(data);
      }
    };
    reader.readAsText(file);
  }
  (event.target as HTMLInputElement).value = '';
}

function saveFile() {
  const blob = new Blob([JSON.stringify(store.characters)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = 'fh-characters.json';
  link.click();
}
</script>

<template>
  <v-app-bar color="indigo">
    <v-app-bar-title>Frosthaven Character Sheets</v-app-bar-title>
    <template #append>
      <v-btn icon="mdi-file-account-outline" @click="selectFile"></v-btn>
      <v-btn icon="mdi-download" @click="saveFile"></v-btn>
    </template>
  </v-app-bar>

  <input ref="selectFileInput" type="file" @change="loadCharacters" />
</template>

<style scoped>
input[type='file'] {
  display: none;
}
</style>

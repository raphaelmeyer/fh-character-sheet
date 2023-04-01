<script setup lang="ts">
import CharacterList from '@/components/character-list/CharacterList.vue';
import ListMenuBar from '@/components/character-list/ListMenuBar.vue';
</script>

<template>
  <v-app>
    <ListMenuBar></ListMenuBar>
    <CharacterList></CharacterList>
  </v-app>
</template>

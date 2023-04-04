<script setup lang="ts">
import AddMercenary from '@/components/mercenary-list/AddMercenary.vue';
import MenuBar from '@/components/mercenary-list/MenuBar.vue';
import MercenaryList from '@/components/mercenary-list/MercenaryList.vue';
</script>

<template>
  <v-app>
    <MenuBar></MenuBar>
    <v-main>
      <v-container>
        <AddMercenary></AddMercenary>
        <MercenaryList></MercenaryList>
      </v-container>
    </v-main>
  </v-app>
</template>

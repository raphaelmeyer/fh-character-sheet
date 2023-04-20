<script setup lang="ts">
import { computed } from 'vue';

import { modifiers } from '@/domain/icons';
import type { Modifier } from '@/domain/modifiers';

const props = defineProps<{ text: string }>();

const tokens = computed(() => {
  const reSplit = /(<[\w-]+>)/;
  const reIcon = /<([\w-]+)>/;
  return props.text.split(reSplit).map((token) => {
    const icon = token.match(reIcon)?.at(1);
    if (icon !== undefined && icon in modifiers) {
      return { type: 'icon', value: modifiers[icon as Modifier] };
    }
    return { type: 'text', value: token };
  });
});
</script>

<template>
  <div class="d-flex flex-wrap align-center">
    <template v-for="(token, i) in tokens" :key="i">
      <template v-if="token.type === 'icon'">
        <v-img :src="token.value" max-width="1.2em" max-height="1.2em" class="mr-1"> </v-img>
      </template>
      <template v-if="token.type === 'text'">
        <span class="mr-1"> {{ token.value }} </span>
      </template>
    </template>
  </div>
</template>

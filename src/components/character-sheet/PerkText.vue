<script setup lang="ts">
import { computed } from 'vue';

import { modifiers } from '@/domain/icons';
import type { Modifier } from '@/domain/modifiers';

const props = defineProps<{ text: string }>();

type Icon = { type: 'icon'; source: string };
type Text = { type: 'text'; words: string[] };
type Token = Icon | Text;

const tokens = computed((): Token[] => {
  const reSplit = /(<[\w-]+>)/;
  const reIcon = /<([\w-]+)>/;

  const emptyText = (token: Token) =>
    token.type === 'text' && token.words.every((w) => w.length === 0);

  const createIcon = (part: string) => {
    const icon = part.match(reIcon)?.at(1);
    if (icon !== undefined && icon in modifiers) {
      return modifiers[icon as Modifier];
    }
    return undefined;
  };

  return props.text
    .split(reSplit)
    .map((part) => {
      const icon = createIcon(part);
      if (icon !== undefined) {
        const result: Icon = { type: 'icon', source: icon };
        return result;
      }

      const words = part.trim().split(' ');
      const result: Text = { type: 'text', words };
      return result;
    })
    .filter((token) => !emptyText(token));
});
</script>

<template>
  <div class="d-flex flex-wrap align-center font-weight-bold perk-text">
    <template v-for="(token, i) in tokens" :key="i">
      <img v-if="token.type === 'icon'" :src="token.source" class="icon-image" />
      <template v-if="token.type === 'text'">
        <span v-for="(word, w) in token.words" :key="w">{{ word }} </span>
      </template>
    </template>
  </div>
</template>

<style scoped>
.perk-text {
  gap: 0.3em;
}
.icon-image {
  max-height: 1.5em;
  max-width: 1.5em;
  object-fit: contain;
}
</style>

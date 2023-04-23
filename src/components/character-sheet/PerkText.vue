<script setup lang="ts">
import { modifiers } from '@/domain/icons';
import type { Modifier } from '@/domain/modifiers';
import { computed } from 'vue';

const props = defineProps<{ text: string }>();

type Icon = { type: 'icon'; source: string };
type Text = { type: 'text'; words: string[] };
type Token = Icon | Text;

const tokens = computed((): Token[] => {
  const reSplit = /(<[\w-]+>)/;
  const reIcon = /<([\w-]+)>/;

  const empty = (text: string[]) => text.length === 0 || text.every((word) => word === '');

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
    .filter((token) => !(token.type === 'text' && empty(token.words)));
});
</script>

<template>
  <div class="d-flex flex-wrap align-center">
    <template v-for="(token, i) in tokens" :key="i">
      <template v-if="token.type === 'icon'">
        <v-img
          :src="token.source"
          min-width="1em"
          min-height="1em"
          max-width="1.2em"
          max-height="1.2em"
          class="mr-1"
        >
        </v-img>
      </template>
      <template v-if="token.type === 'text'">
        <span v-for="(word, w) in token.words" :key="w" class="mr-1"> {{ word }} </span>
      </template>
    </template>
  </div>
</template>

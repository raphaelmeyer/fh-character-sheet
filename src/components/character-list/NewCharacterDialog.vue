<script setup lang="ts">
import { ref, watchEffect } from 'vue';

import { avatars } from '@/domain/icons';
import { characters, type CharacterClass } from '@/domain/character';
import { colors } from '@/domain/colors';

const props = defineProps<{ dialog: boolean }>();

const name = ref('');
const dialog = ref(false);

const emit = defineEmits<{
  (e: 'create', character: CharacterClass, name: string): void;
  (e: 'cancel'): void;
}>();

function submit(character: CharacterClass): void {
  emit('create', character, name.value);
  name.value = '';
}

function cancel(): void {
  emit('cancel');
  name.value = '';
}

watchEffect(() => {
  dialog.value = props.dialog;
});
</script>

<template>
  <v-dialog v-model="dialog" @click:outside="cancel">
    <v-card>
      <v-card-item>
        <v-card-title>Select Character Class</v-card-title>
      </v-card-item>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field v-model="name" label="Name" clearable></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col v-for="(className, character) in characters" :key="character" cols="4">
              <v-card
                :color="colors[character].primary"
                :disabled="!name"
                @click="submit(character)"
              >
                <v-card-item>
                  <v-card-title>
                    <v-avatar :color="colors[character].background">
                      <v-img :src="avatars[character]" max-height="1.5em" max-width="1.5em"></v-img>
                    </v-avatar>
                    <span class="ml-4">{{ className }}</span>
                  </v-card-title>
                </v-card-item>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="cancel">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

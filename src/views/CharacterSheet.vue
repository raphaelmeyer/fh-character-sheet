<script setup lang="ts">
import { computed } from 'vue'

interface Character {
  name: string
  xp: number
  level: number
}

const character: Character = {
  name: 'Kagesawa Glay',
  xp: 85,
  level: 2
}

interface Level {
  id: number
  xp: number
}

const levels: Level[] = [
  { id: 1, xp: 0 },
  { id: 2, xp: 45 },
  { id: 3, xp: 95 },
  { id: 4, xp: 150 },
  { id: 5, xp: 210 },
  { id: 6, xp: 275 },
  { id: 7, xp: 345 },
  { id: 8, xp: 420 },
  { id: 9, xp: 500 }
]

const charLevel = computed(() => {
  return levels.reduce((id, l) => (l.xp <= character.xp ? l.id : id), 0)
})
</script>

<template>
  <v-app>
    <v-app-bar color="grey-darken-3">
      <v-app-bar-title>
        <v-icon icon="mdi-account"></v-icon>
        <span> {{ character.name }}</span>
      </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-card color="grey-lighten-3">
              <v-card-item>
                <v-card-title>Valrath Deathwalker </v-card-title>
              </v-card-item>
              <v-card-text>
                <v-timeline direction="horizontal" truncate-line="both" side="end">
                  <v-timeline-item
                    v-for="level in levels"
                    :key="level.id"
                    :dot-color="level.xp <= character.xp ? 'grey-darken-3' : 'grey-lighten-2'"
                    :size="level.id === charLevel ? 'small' : 'x-small'"
                    fill-dot
                  >
                    <template #icon>{{ level.id }}</template>
                    <div>{{ level.xp }}</div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card color="grey-lighten-3">
              <v-card-item>
                <v-card-title> XP </v-card-title>
              </v-card-item>
            </v-card>
          </v-col>
          <v-col>
            <v-card color="grey-lighten-3">
              <v-card-item>
                <v-card-title> Gold </v-card-title>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card color="grey-lighten-3">
              <v-card-item>
                <v-card-title>Resources</v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col><v-icon icon="mdi-tree-outline"></v-icon></v-col>
                    <v-col><v-icon icon="mdi-hammer"></v-icon></v-col>
                    <v-col><v-icon icon="mdi-cow"></v-icon></v-col>
                  </v-row>
                  <v-row>
                    <v-col><v-icon icon="mdi-sprout"></v-icon></v-col>
                    <v-col><v-icon icon="mdi-peanut"></v-icon></v-col>
                    <v-col><v-icon icon="mdi-mushroom"></v-icon></v-col>
                    <v-col><v-icon icon="mdi-pine-tree"></v-icon></v-col>
                    <v-col><v-icon icon="mdi-flower"></v-icon></v-col>
                    <v-col><v-icon icon="mdi-spa"></v-icon></v-col>
                  </v-row>
                </v-card-text>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card color="grey-lighten-3">
              <v-card-item>
                <v-card-title>Perks</v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col>
                      <v-icon icon="mdi-star-box"></v-icon>
                      <v-icon icon="mdi-checkbox-marked-outline"></v-icon>
                      <v-icon icon="mdi-checkbox-marked-outline"></v-icon>
                      <v-icon icon="mdi-checkbox-marked-outline"></v-icon>
                    </v-col>
                    <v-col>
                      <v-icon icon="mdi-checkbox-blank"></v-icon>
                      <v-icon icon="mdi-checkbox-marked-outline"></v-icon>
                      <v-icon icon="mdi-checkbox-blank-outline"></v-icon>
                      <v-icon icon="mdi-checkbox-blank-outline"></v-icon>
                    </v-col>
                    <v-col>
                      <v-icon icon="mdi-checkbox-blank"></v-icon>
                      <v-icon icon="mdi-checkbox-blank-outline"></v-icon>
                      <v-icon icon="mdi-checkbox-blank-outline"></v-icon>
                      <v-icon icon="mdi-checkbox-blank-outline"></v-icon>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                </v-card-text>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card color="grey-lighten-3">
              <v-card-item>
                <v-card-title>Masteries</v-card-title>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

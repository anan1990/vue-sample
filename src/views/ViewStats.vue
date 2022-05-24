<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input
      v-model="loveNoteballs"
      class="input"
      type="text"
      placeholder="Do you love noteballs??"
      v-autofocus
    />
  </div>
</template>

<script setup>
/*
  imports
*/

import { ref } from "vue";
import { useNoteStore } from "@/stores/noteStores";
import { vAutofocus } from "@/directive/vAutofocus";
import { useWatchCharacters } from "@/use/useWatchCharacters";
/*
  store
*/
const storeNotes = useNoteStore();
const loveNoteballs = ref("");
useWatchCharacters(loveNoteballs, 50);
</script>

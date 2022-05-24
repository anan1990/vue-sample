<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      placeholder="Add a new note"
      ref="addNewNoteRef"
    >
      <template #buttons>
        <button
          @click="addNewNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <Note
      v-for="note in storeNote.notes"
      class="card mb-4"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useNoteStore } from "@/stores/noteStores";
import Note from "@/components/note/NoteItem.vue";
import AddEditNote from "@/components/note/AddEditNote.vue";
import { useWatchCharacters } from '@/use/useWatchCharacters'
const newNote = ref("");
const addNewNoteRef = ref(null);
const addNewNote = () => {
  console.log(newNote.value);
  storeNote.addNewNote({
    id: new Date().getTime().toString(),
    content: newNote.value,
  });
  newNote.value = "";
  addNewNoteRef.value.focusTextarea();
};

const storeNote = useNoteStore();
useWatchCharacters(newNote, 120);
</script>

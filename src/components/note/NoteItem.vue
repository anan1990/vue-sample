<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/editNote/${note.id}`" class="card-footer-item">
        Edit
      </RouterLink>
      <a @click.prevent="handleDeleteClicked" class="card-footer-item" href="#">
        Delete
      </a>
    </footer>
  </div>
  <DeleteModal
    v-if="modals.deleteNote"
    v-model="modals.deleteNote"
    :noteId="note.id"
  />
</template>

<script setup>
import { computed, reactive } from "vue";
import DeleteModal from "@/components/note/DeleteModalConfirm.vue";
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});
const modals = reactive({
  deleteNote: false,
});
const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});
const handleDeleteClicked = () => {
  modals.deleteNote = true;
};
</script>

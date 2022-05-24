import ViewNoteVue from "@/views/ViewNote.vue";
import ViewStatsVue from "@/views/ViewStats.vue";
import ViewEditNote from '@/views/ViewEditNote.vue'
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "notes",
      component: ViewNoteVue,
    },
    {
      path: "/stats",
      name: "stats",
      component: ViewStatsVue,
    },
    {
      path: "/editNote/:id",
      name: "edit-note",
      component: ViewEditNote,
    },
  ],
});

export default router;

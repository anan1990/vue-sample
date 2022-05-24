import console from "console";
import { defineStore } from "pinia";

export const useNoteStore = defineStore("noteStores", {
  state: () => {
    return {
      notes: [
        {
          id: new Date().getTime().toString(),
          content: `lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa
            commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime, enim
            quasi officiis aperiam fugit, corrupti omnis, eaque animi.`,
        },
      ],
    };
  },
  actions: {
    addNewNote(note: { id: string; content: string }) {
      this.notes.unshift(note);
    },
    deleteNote(id: string) {
      this.notes = this.notes.filter((note) => {
        return note.id !== id;
      });
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id: string) => {
        const note = state.notes.find((note) => note.id === id);
        return note ? note.content : "";
      };
    },
    updateNote: (state) => {
      return (id: string, content: string) => {
        const note = state.notes.find((note) => note.id === id);
        if (note) note.content = content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});

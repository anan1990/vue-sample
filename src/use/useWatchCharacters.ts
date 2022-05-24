import { watch } from "vue";

export function useWatchCharacters(valueToWatch: any, maxChars = 100) {
  watch(valueToWatch, (newValue) => {
    if (newValue.length === maxChars) {
      alert(`Only ${maxChars} characters allowed gosh darnit!`);
    }
  });
}

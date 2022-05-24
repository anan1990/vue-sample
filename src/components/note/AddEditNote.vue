<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label v-if="label" class="label has-text-white">
      {{ label }}
    </label>
    <div class="field">
      <div class="control">
        <textarea
          v-autofocus
          :placeholder="placeholder"
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          ref="textareaRef"
          class="textarea"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { vAutofocus } from "@/directive/vAutofocus";
const textareaRef = ref(null);
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Type something...",
  },
  label: {
    type: String,
  },
});
const emit = defineEmits(["update:modelValue"]);

const focusTextarea = () => {
  textareaRef.value.focus();
};
defineExpose({
  focusTextarea,
});
</script>

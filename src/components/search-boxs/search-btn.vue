<template>
  <div class="input-wrapper">
    <input
      :placeholder="placeholder"
      @keyup.enter="handlerEnter"
      :class="{ error: isError }"
      :style="{ '--width': width + 'px', '--height': height + 'px' }"
    />
    <span class="icon-search" />
    <p v-if="isError" class="error-message">Whoops, can't be empty...</p>
  </div>
</template>
<script setup lang="ts">
const placeholder = 'Search for any word...'
import { ref } from 'vue'
const inputValue = ref('')
const isError = ref(false)
const handlerEnter = () => {
  isError.value = inputValue.value.trim() === ''
}
defineProps<{
  width: string
  height: string
}>()
</script>
<style lang="scss" scoped>
input {
  background-color: var(--bg-input);
  height: var(--height);
  color: var(--text-color);
  box-sizing: border-box;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0px;
  overflow: hidden;
  caret-color: variables.$color-purple;
  border: none;
  width: var(--width);
  border-radius: 16px;
  padding: 0px calc(24.5px + 15.55px * 1.5) 0px 24px;

  &:focus,
  &:active {
    outline: 1px solid variables.$color-purple;
  }
  &.error {
    outline: 1px solid variables.$color-red01;
  }
}
.error-message {
  color: variables.$color-red01;
  font-size: variables.$font-size-heading-s;
  margin-top: 8px;
}
input::placeholder {
  color: var(--placehold-input);
}
.input-wrapper {
  display: inline;
  position: relative;
}
.icon-search {
  position: absolute;
  right: 24.5px;
  width: calc(15.55px * 1.5);
  top: 50%;
  aspect-ratio: 1/1;
  transform: translateY(-50%);
  background-image: url('@/assets/images/icon-search.svg');
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
}
</style>

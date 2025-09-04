<template>
  <div class="input-wrapper">
    <input :placeholder="placeholder" @keyup.enter="handlerEnter" :class="{ error: isError }" />
    <span class="icon-search" />
  </div>
  <p v-if="isError" class="error-message">Whoops, can't be empty...</p>
</template>
<script setup lang="ts">
const placeholder = 'Search for any word...'
import { ref } from 'vue'
const inputValue = ref('')
const isError = ref(false)
const handlerEnter = () => {
  isError.value = inputValue.value.trim() === ''
}
</script>
<style lang="scss" scoped>
input {
  background-color: var(--bg-input);
  color: var(--text-color);
  box-sizing: border-box;
  font-family: var(--font-family);
  font-weight: bold;
  letter-spacing: 0px;
  overflow: hidden;
  caret-color: variables.$color-purple;
  border: none;
  width: 100%;
  border-radius: 16px;
  padding: 0px calc(24.5px + 15.55px * 1.5) 0px 24px;

  &:focus,
  &:active {
    outline: 1px solid variables.$color-purple;
  }
  &.error {
    outline: 1px solid variables.$color-red01;
  }
  @include variables.respond-to(desktop) {
    height: 64px;
    font-size: variables.$font-size-heading-s;
  }
  @include variables.respond-to(tablet) {
    height: 64px;
    font-size: variables.$font-size-heading-s;
  }
  @include variables.respond-to(mobile) {
    height: 48px;
    font-size: 16px;
  }
}
.error-message {
  color: variables.$color-red01;
  margin-top: 8px;
  @include variables.respond-to(desktop) {
    font-size: variables.$font-size-heading-s;
  }
  @include variables.respond-to(tablet) {
    font-size: variables.$font-size-heading-s;
  }
  @include variables.respond-to(mobile) {
    font-size: 16px;
  }
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
  width: 15.5px;
  top: 50%;
  aspect-ratio: 1/1;
  transform: translateY(-50%);
  background-image: url('@/assets/images/icon-search.svg');
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
}
</style>

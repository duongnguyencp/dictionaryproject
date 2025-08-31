<template>
  <div class="input-wrapper">
    <input :placeholder="placeholder" />
    <span class="icon-search" />
  </div>
</template>
<script setup>
const placeholder = 'Search for any word...'
</script>
<style lang="scss">
input {
  background-color: variables.$color-grey03;
  height: 64px;
  font-size: 20px;
  font-weight: bold;
  color: variables.$color-black03;
  letter-spacing: 0px;
  overflow: hidden;
  border: none;
  width: 736px;
  border-radius: 16px;
  padding: 0px calc(24.5px + 15.55px * 1.5) 0px 24px;

  &:focus,
  &:active {
    outline: 1px solid variables.$color-purple;
  }
}
input::placeholder {
  color: rgba(variables.$color-black03, 0.25);
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

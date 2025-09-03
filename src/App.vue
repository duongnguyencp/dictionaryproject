<script setup lang="ts">
import logoVue from './components/logo/logo.vue'
import selectFont from './components/select-font/select-font.vue'
import toggleTheme from './components/radios/toggle-them.vue'
</script>

<template>
  <div class="dictionary-app">
    <div class="header-wrapper">
      <logoVue />
      <div class="header-left">
        <selectFont />
        <div class="seperator"></div>
        <toggleTheme class="toggleTheme" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dictionary-app {
  margin-left: auto;
  width: 737px;
  margin-right: auto;
  margin-top: 36.5px;
}
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
logoVue {
}
.header-left {
  display: flex;
  align-items: center;
}
.seperator,
.toggleTheme {
  margin-left: calc(1008px - 981px);
}
.seperator {
  width: 1px;
  height: 32px;
  background-color: variables.$color-grey02;
}
</style>

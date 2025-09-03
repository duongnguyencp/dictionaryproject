<script setup lang="ts">
import logoVue from './components/logo/logo.vue'
import selectFont from './components/select-font/select-font.vue'
import toggleTheme from './components/radios/toggle-them.vue'
import searchBtn from './components/search-boxs/search-btn.vue'
import playBtn from './components/buttons/play-btn.vue'
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
    <div class="search-wrapper">
      <searchBtn width="736" height="64"></searchBtn>
    </div>
    <div class="word-result-wrapper">
      <span class="word-result">keyboard</span>
      <span class="word-sound">/ˈkiːbɔːd/</span>
      <playBtn class="play-btn" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.play-btn {
  position: absolute;
  right: 0px;
  transform: translateY(-50%);
  top: 50%;
}
.word-result-wrapper {
  margin-top: 45px;
  position: relative;
  display: block;
}
.word-sound {
  display: block;
  margin-top: calc(85px - 77px);
  color: variables.$color-purple;
  font-family: variables.$font-family-01;
  font-size: variables.$font-size-heading-m;
}
.word-result {
  display: block;
  font-size: variables.$font-size-heading-l;
  font-weight: bold;
}
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
.search-wrapper {
  margin-top: calc(146px - 58px);
}
</style>

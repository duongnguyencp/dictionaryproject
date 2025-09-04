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
    <div class="word-type-wrapper">
      <span class="type-word">noun</span>
      <div class="seperator-horizontal"></div>
    </div>
    <div class="mean-type-wrapper">
      <span class="bullet-word-type">Meaning</span>
      <div class="mean-list">
        <div>(etc.) A set of keys used to operate a typewriter, computer etc.</div>
        <div>
          A component of many instruments including the piano, organ, and harpsichord consisting of
          usually black and white keys that cause different tones to be produced when struck.
        </div>
        <div>
          A device with keys of a musical keyboard, used to control electronic sound-producing
          devices which may be built into or separate from the keyboard device.
        </div>
      </div>
    </div>
    <div class="synonyms-wrapper">
      <span class="bullet-word-type">Synonyms</span>
      <span class="synonyms-list">electronic keyboard</span>
    </div>
    <div class="word-type-wrapper">
      <span class="type-word">verb</span>
      <div class="seperator-horizontal"></div>
    </div>
    <div class="mean-type-wrapper">
      <span class="bullet-word-type">Meaning</span>
      <div class="mean-list">
        <div>To type on a computer keyboard.</div>
        <span class="example">“Keyboarding is the part of this job I hate the most.”</span>
      </div>
    </div>
    <div class="end-page seperator-horizontal"></div>
    <div class="reference-wrapper">
      <span class="source-link">Source</span>
      <span class="reference-link">https://en.wiktionary.org/wiki/keyboard</span>
      <svg
        class="icon-link"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 14 14"
      >
        <path
          fill="none"
          stroke="#838383"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
.icon-link {
  margin-left: 15px;
}
.reference-link {
  margin-left: 21px;
}

.source-link {
  color: variables.$color-grey01;
}

.reference-wrapper {
  display: flex;
  align-items: center;
  font-size: variables.$font-size-body-s;
  margin-top: 20px;
  text-decoration: underline;
}

.end-page {
  margin-top: 40px;
}

.example {
  font-size: variables.$font-size-body-m;
  color: variables.$color-grey01;
}

.synonyms-wrapper {
  margin-top: 41px;
}

.synonyms-list {
  color: variables.$color-purple;
  font-size: variables.$font-size-heading-s;
  font-weight: bold;
  margin-left: 40px;
}
.mean-type-wrapper {
  margin-top: 40px;
}

.mean-list {
  font-size: variables.$font-size-body-m;
  margin-left: 22px;
  margin-top: 25px;
  padding-left: 25px;
  list-style: none;
}

.mean-list div {
  position: relative;
}

.mean-list div::before {
  content: '';
  position: absolute;
  left: -25px;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #8f19e8;
}

.mean-list > :nth-last-child(n + 2) {
  margin-bottom: calc(171px - 158px);
}

.bullet-word-type {
  font-size: variables.$font-size-heading-s;
  color: variables.$color-grey01;
}

.word-type-wrapper {
  display: flex;
  align-items: center;
  margin-top: calc(409px - 369px);
}

.word-type-wrapper .seperator-horizontal {
  margin-left: 20px;
}

.seperator-horizontal {
  background-color: var(--seperator-color);
  height: 1px;
  width: 100%;
}
.type-word {
  font-size: variables.$font-size-heading-m;
  font-weight: var(--word-type-weight);
  font-style: var(--word-type-style);
}
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
  margin-bottom: 167px;
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
  background-color: var(--seperator-color);
}
.search-wrapper {
  margin-top: calc(146px - 58px);
}
</style>

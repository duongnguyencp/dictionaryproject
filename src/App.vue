<script setup lang="ts">
import logoVue from './components/logo/logo.vue'
import selectFont from './components/select-font/select-font.vue'
import toggleTheme from './components/radios/toggle-them.vue'
import searchBtn from './components/search-boxs/search-btn.vue'
import playBtn from './components/buttons/play-btn.vue'
import { ref, watch } from 'vue'
type SearchExpose = {
  inputValue: string
}
const isNotFound = ref(false)
const searchRef = ref<SearchExpose | null>(null)
watch(
  () => searchRef.value?.inputValue,

  (newVal, oldVal) => {
    if (newVal !== '') {
      isNotFound.value = true
    } else {
      isNotFound.value = false
    }
  },
)
</script>

<template>
  <div class="dictionary-app">
    <div class="header-wrapper">
      <logoVue class="logo" />
      <div class="header-left">
        <selectFont />
        <div class="seperator"></div>
        <toggleTheme class="toggleTheme" />
      </div>
    </div>
    <div class="search-wrapper">
      <searchBtn ref="searchRef"></searchBtn>
    </div>
    <div class="content-search" v-if="isNotFound === false">
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
            A component of many instruments including the piano, organ, and harpsichord consisting
            of usually black and white keys that cause different tones to be produced when struck.
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
    <div v-if="isNotFound" class="not-found-page">
      <span class="notfound-emoji">😕</span>
      <span class="notfound-summary">No Definitions Found</span>
      <span class="notfound-description"
        >Sorry pal, we couldn't find definitions for the word you were looking for. You can try the
        search again at later time or head to the web instead.</span
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.notfound-description {
  display: inline-block;
  font-size: variables.$font-size-body-m;
  margin-top: 24px;
  @include variables.respond-to(tablet) {
    font-size: variables.$font-size-body-m;
    margin-top: 24px;
  }
  @include variables.respond-to(mobile) {
    font-size: variables.$font-size-body-s;
    margin-top: 16px;
  }
}

.notfound-summary {
  font-weight: bold;
  display: inline-block;
  font-size: 20px;
  margin-top: 44px;
  @include variables.respond-to(tablet) {
    font-size: 20px;
    margin-top: 44px;
  }
  @include variables.respond-to(mobile) {
    font-size: 16px;
    margin-top: 32px;
  }
}

.notfound-emoji {
  display: inline-block;
  margin-top: 132px;
  font-size: 64px;
  @include variables.respond-to(tablet) {
    margin-top: 132px;
    font-size: 64px;
  }
  @include variables.respond-to(mobile) {
    margin-top: 64px;
    font-size: 32px;
  }
}
.not-found-page {
  text-align: center;
  display: flex;
  flex-direction: column;
}
.icon-link {
  margin-left: 15px;
}
.reference-link {
  margin-left: 21px;
  text-decoration: underline;
}

.source-link {
  color: variables.$color-grey01;
  text-decoration-thickness: 1px;
  text-decoration-color: variables.$color-grey01;
  text-decoration: underline;
  @include variables.respond-to(tablet) {
    font-size: variables.$font-size-body-m;
  }
  @include variables.respond-to(mobile) {
    font-size: 15px;
  }
}

.reference-wrapper {
  display: flex;
  align-items: center;
  font-size: variables.$font-size-body-s;
  margin-top: 20px;
}

.end-page {
  margin-top: 40px;
}

.example {
  font-size: variables.$font-size-body-m;

  color: variables.$color-grey01;
  @include variables.respond-to(tablet) {
    font-size: variables.$font-size-body-m;
  }
  @include variables.respond-to(mobile) {
    font-size: 15px;
  }
}

.synonyms-wrapper {
  margin-top: 41px;
}

.synonyms-list {
  color: variables.$color-purple;
  font-size: variables.$font-size-heading-s;
  font-weight: bold;
  margin-left: 40px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    text-decoration-thinkness: 1px;
  }
  @include variables.respond-to(tablet) {
    font-size: variables.$font-size-heading-s;
  }
  @include variables.respond-to(mobile) {
    font-size: 16px;
  }
}
.mean-type-wrapper {
  margin-top: 40px;
}

.mean-list {
  font-size: variables.$font-size-body-m;
  margin-left: 22px;
  margin-top: 27px;
  padding-left: 25px;
  list-style: none;
  @include variables.respond-to(tablet) {
    margin-top: 27px;
    font-size: variables.$font-size-body-m;
    margin-left: 22px;
  }
  @include variables.respond-to(mobile) {
    margin-top: 17px;
    font-size: 15px;
    margin-left: 0px;
  }
}

.mean-list div {
  position: relative;
}

.mean-list div::before {
  content: '';
  position: absolute;
  left: -25px;
  top: 10px;
  transform: translateY(-50%);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #8f19e8;
}

.mean-list > :nth-last-child(n + 2) {
  margin-bottom: 13px;
}

.bullet-word-type {
  font-size: variables.$font-size-heading-s;
  color: variables.$color-grey01;
  @include variables.respond-to(tablet) {
    font-size: variables.$font-size-heading-s;
  }
  @include variables.respond-to(mobile) {
    font-size: 16px;
  }
}

.word-type-wrapper {
  display: flex;
  align-items: center;
  margin-top: 42px;
  @include variables.respond-to(tablet) {
    margin-top: 42px;
  }
  @include variables.respond-to(mobile) {
    margin-top: 32px;
  }
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
  @include variables.respond-to(tablet) {
    font-size: variables.$font-size-heading-m;
  }
  @include variables.respond-to(mobile) {
    font-size: 18px;
  }
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
  @include variables.respond-to(tablet) {
    margin-top: 45px;
  }
  @include variables.respond-to(mobile) {
    margin-top: 24px;
  }
}
.word-sound {
  display: block;
  color: variables.$color-purple;
  font-family: variables.$font-family-01;
  font-size: variables.$font-size-heading-m;
  @include variables.respond-to(tablet) {
    margin-top: 11px;
    font-size: variables.$font-size-heading-m;
  }
  @include variables.respond-to(mobile) {
    margin-top: 8px;
    font-size: variables.$font-size-body-m;
  }
}
.word-result {
  display: block;
  font-size: variables.$font-size-heading-l;
  font-weight: bold;
  @include variables.respond-to(tablet) {
    font-size: variables.$font-size-heading-l;
  }
  @include variables.respond-to(mobile) {
    font-size: 32px;
  }
}

.dictionary-app {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 167px;
  @include variables.respond-to(desktop) {
    width: 737px;
    margin-top: 36.5px;
  }
  @include variables.respond-to(tablet) {
    width: 689px;
    margin-top: 36.5px;
  }
  @include variables.respond-to(mobile) {
    width: 327px;
    margin-top: 24px;
  }
}

.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {
  display: flex;
  align-items: center;
}
.seperator,
.toggleTheme {
  @include variables.respond-to(desktop) {
    margin-left: 26px;
  }
  @include variables.respond-to(tablet) {
    margin-left: 26px;
  }
  @include variables.respond-to(mobile) {
    margin-left: 16px;
  }
}
.seperator {
  width: 1px;
  height: 32px;
  background-color: var(--seperator-color);
}
.search-wrapper {
  margin-top: 50px;
  @include variables.respond-to(tablet) {
    margin-top: 50px;
  }
  @include variables.respond-to(mobile) {
    margin-top: 24px;
  }
}
</style>

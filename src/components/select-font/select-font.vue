<template>
  <div class="dropdown-wrapper">
    <div class="dropdown-view" @click="handleClick">
      <span class="selected-text">{{ selectedText }}</span>
      <svg
        class="ic-dropdown"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="6"
        viewBox="0 0 14 8"
      >
        <path fill="none" stroke="#A445ED" stroke-width="1.5" d="m1 1 6 6 6-6" />
      </svg>
    </div>
    <div class="dropdown-content" :class="{ show: isShow }">
      <a @click="selectItem('Sans Serif')" class="sans-serif-style">Sans Serif</a>
      <a @click="selectItem('Serif')" class="serif-style">Serif</a>
      <a @click="selectItem('Mono')" class="mono-style">Mono</a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.dropdown-wrapper {
  position: relative;
  cursor: pointer;
  display: inline-block;
}
.selected-text {
  font-weight: bold;
  color: variables.$color-black03;
  font-size: variables.$font-size-body-m;
  line-height: variables.$line-height-body-m;
}
.dropdown-view {
  display: inline-block;
  width: 120px;
  height: 24px;
  float: right;
  position: relative;
}
.dropdown-content {
  width: 183px;
  height: 152px;
  display: none;
  z-index: 1;
  position: absolute;
  top: calc(105px - 63px);
  border-radius: 16px;
  right: 0px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
.dropdown-content a {
  text-decoration: none;
  display: block;
  margin-left: calc(796px - 772px);
  color: variables.$color-black02;
  &:hover {
    color: variables.$color-purple;
  }
}

.dropdown-content a:nth-child(1) {
  margin-top: 24px;
}
.dropdown-content a:nth-child(n-1) {
  margin-top: 16px;
}
.sans-serif-style {
  font-family: variables.$font-family-01;
  font-size: variables.$font-size-body-m;
  font-weight: bold;
  line-height: variables.$line-height-body-m;
}
.serif-style {
  font-family: variables.$font-family-02;
  font-size: variables.$font-size-body-m;
  font-weight: bold;
  line-height: variables.$line-height-body-m;
}
.mono-style {
  font-family: variables.$font-family-03;
  font-size: variables.$font-size-body-m;
  font-weight: bold;
  line-height: variables.$line-height-body-m;
}
.ic-dropdown {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
.show {
  display: block;
}
</style>
<script setup lang="ts">
import { ref } from 'vue'
const isShow = ref(false)
const selectedText = ref('Sans Serif')
const handleClick = () => {
  isShow.value = !isShow.value
}
const selectItem = (value: string) => {
  selectedText.value = value
}
</script>

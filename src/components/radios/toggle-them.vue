<template>
  <div class="icon-wrapper">
    <label class="switch">
      <input type="checkbox" v-model="checked" />
      <span class="slider round"></span>
    </label>
    <svg
      class="ic-moon-wrapper"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 22 22"
    >
      <path
        :class="checked ? 'check' : 'uncheck'"
        fill="none"
        stroke="#838383"
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="1.5"
        d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
      />
    </svg>
  </div>
</template>
<style scoped lang="scss">
.icon-wrapper {
  position: relative;
  height: 20px;
  width: 80px;
  display: inline-block;
}
.check {
  stroke: variables.$color-purple;
}
.uncheck {
  stroke: #838383;
}
.ic-moon-wrapper {
  position: absolute;
  top: 0px;
  left: calc(1012px - 952px);
}
.switch {
  width: 40px;
  height: 20px;
  position: relative;
  display: inline-block;
}
input {
  opacity: 0;
  width: 0;
  height: 0;
}
span {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  border-radius: 10px;
  background-color: variables.$color-grey01;
}
span:before {
  content: '';
  position: absolute;
  left: 3px;
  top: 3px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: variables.$color-white;
  transition: 0.4s;
  -webkit-transition: 0.4s;
}
input:checked + span:before {
  webkit-transform: translateX(17px);
  -ms-transform: translateX(17px);
  transform: translateX(17px);
}
input:checked + span {
  background-color: variables.$color-purple;
}
</style>
<script setup lang="ts">
import { ref, watchEffect } from 'vue'
const checked = ref(false)
watchEffect(() => {
  document.body.setAttribute('data-theme', checked.value === true ? 'dark' : 'light')
})
</script>

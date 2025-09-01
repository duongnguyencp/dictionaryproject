<template>
  <div class="button-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75">
      <g class="circle" fill-rule="evenodd">
        <circle cx="37.5" cy="37.5" r="37.5" />
        <path class="inside" d="M29 27v21l21-10.5z" />
      </g>
    </svg>
  </div>
</template>
<style lang="scss" scoped>
.button-wrapper {
  position: relative;
  display: inline;
}
.circle {
  fill: rgba(variables.$color-purple, 0.25);
  &:hover {
    fill: variables.$color-purple;
  }
  &:hover .inside {
    fill: variables.$color-white;
  }
}
.inside {
  fill: variables.$color-purple;
}
</style>
<script lang="ts" setup></script>

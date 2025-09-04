<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
    <g class="circle" fill-rule="evenodd">
      <circle cx="37.5" cy="37.5" r="37.5" />
      <path class="inside" d="M29 27v21l21-10.5z" />
    </g>
  </svg>
</template>
<style lang="scss" scoped>
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
svg {
  cursor: pointer;
  width: 75px;
  height: 75px;
  @include variables.respond-to(tablet) {
    width: 75px;
    height: 75px;
  }
  @include variables.respond-to(mobile) {
    width: 48px;
    height: 48px;
  }
}
</style>
<script lang="ts" setup></script>

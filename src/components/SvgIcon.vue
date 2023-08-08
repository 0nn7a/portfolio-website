<script setup>
const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  iconStyle: {
    type: Object,
    default: {
      width: "5rem",
      height: "5rem",
      fill: "currentColor",
    },
  },
});

const iconName = computed(() => {
  return `#icon-${props.iconName}`;
});
</script>

<template>
  <svg :style="iconStyle" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

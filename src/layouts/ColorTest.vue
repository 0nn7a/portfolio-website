<script setup></script>

<template>
  <section>
    <div>
      <h2>basic-text</h2>
      <h2>primary-color</h2>
      <h2>primary-text</h2>
      <h2>secondary-color</h2>
      <h2>secondary-text</h2>
    </div>
    <div>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <hr />
  </section>
</template>

<style lang="scss" scoped>
@import "/src/assets/css/variable";

section {
  grid-column: full-s / full-e;
  padding: 5rem 0;

  display: flex;
  flex-direction: column;
}
div {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

h2 {
  &:nth-child(1) {
    color: var(--p-basic-text);
  }
  &:nth-child(2) {
    color: var(--p-primary-color);
  }
  &:nth-child(3) {
    color: var(--p-primary-text);
  }
  &:nth-child(4) {
    color: var(--p-secondary-color);
  }
  &:nth-child(5) {
    color: var(--p-secondary-text);
  }
}

span {
  width: 3rem;
  height: 1rem;
  border-radius: 0.3rem;
  &:nth-child(1) {
    background-color: var(--p-gray-1);
  }
  &:nth-child(2) {
    background-color: var(--p-gray-2);
  }
  &:nth-child(3) {
    background-color: var(--p-gray-3);
  }
  &:nth-child(4) {
    background-color: var(--p-gray-4);
  }
  &:nth-child(5) {
    background-color: var(--p-gray-5);
  }
  &:nth-child(6) {
    background-color: var(--p-gray-6);
  }
}
</style>

<script setup></script>

<template>
  <section>
    <div>
      <h2>basic-text</h2>
      <br />
      <h2>primary-color</h2>
      <h2>primary-light</h2>
      <h2>primary-lighter</h2>
      <h2>primary-text</h2>

      <br />
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
  &:nth-of-type(1) {
    color: var(--p-basic-text);
  }
  &:nth-of-type(2) {
    color: var(--p-primary-color);
  }
  &:nth-of-type(3) {
    color: var(--p-primary-light);
  }
  &:nth-of-type(4) {
    color: var(--p-primary-lighter);
  }
  &:nth-of-type(5) {
    color: var(--p-primary-text);
  }
  &:nth-of-type(6) {
    color: var(--p-secondary-color);
  }
  &:nth-of-type(7) {
    color: var(--p-secondary-text);
  }
}

span {
  width: 3rem;
  height: 1rem;
  border-radius: 0.3rem;
  &:nth-of-type(1) {
    background-color: var(--p-gray-1);
  }
  &:nth-of-type(2) {
    background-color: var(--p-gray-2);
  }
  &:nth-of-type(3) {
    background-color: var(--p-gray-3);
  }
  &:nth-of-type(4) {
    background-color: var(--p-gray-4);
  }
  &:nth-of-type(5) {
    background-color: var(--p-gray-5);
  }
  &:nth-of-type(6) {
    background-color: var(--p-gray-6);
  }
}
</style>

<script setup></script>

<template>
  <div class="process__container">
    <ul class="process__steps">
      <span class="process__line"></span>
      <li class="process__step process__step-checked">步驟一</li>
      <li class="process__step process__step-ing">步驟二</li>
      <li class="process__step">步驟三</li>
      <li class="process__step">流程結束</li>
    </ul>
    <div class="process__area">
      <h4 class="heading-4"></h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.process {
  &__container {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 3rem;
  }

  &__steps {
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
    position: relative;
    margin: 2.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  &__line {
    position: absolute;
    top: 50%;
    left: calc(1.75rem / 2);
    height: calc(100% - (0.9rem * 2));
    width: 1.5px;
    background-color: var(--p-gray-2);
    transform: translate(-50%, -50%);
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: calc(100% / 3);
      width: 1.5px;
      background-color: var(--p-primary-color);
    }
  }
  &__step {
    position: relative;
    height: 1.75rem;
    padding-left: 2.5rem;
    font-size: 1.2rem;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      border-radius: 50%;
    }
    &::before {
      height: 1.75rem;
      width: 1.75rem;
      transform: translateY(-50%);
    }
    &::after {
      height: 0.9rem;
      width: 0.9rem;
      background-color: var(--p-gray-2);
      transform: translate(50%, -50%);
    }
    &-checked {
      &::before {
        background-color: var(--p-primary-color);
      }
      &::after {
        height: 0.5rem;
        width: 0.85rem;
        background-color: transparent;
        border-left: 1.5px solid var(--p-basic-backgroud);
        border-bottom: 1.5px solid var(--p-basic-backgroud);
        border-radius: 0;
        transform: translate(50%, -75%) rotate(-45deg);
      }
    }
    &-ing {
      &::before {
        background-color: var(--p-primary-light);
      }
      &::after {
        background-color: var(--p-primary-color);
      }
    }
  }

  &__area {
    grid-row: 1 / span 1;
    grid-column: 2 / span 1;
    width: 100%;
    padding: 2rem;
    background-color: var(--p-gray-1);
    border-radius: 1rem;
  }
}
</style>

<script setup></script>

<template>
  <header class="header__container">
    <div class="header__logo">
      <SvgIcon icon-name="logo" :icon-style="null" />
      <h3 class="heading-3">Portfolio Website</h3>
    </div>

    <nav class="header__nav">
      <a class="header__link" href="javascript:void(0)">首頁</a>
      <a class="header__link" href="javascript:void(0)">作品</a>
      <a class="header__link" href="javascript:void(0)">聯絡我們</a>
      <a class="header__link" href="javascript:void(0)">
        設計夥伴
        <span class="header__blank">
          <SvgIcon
            icon-name="arrow-from-square"
            :icon-style="{
              height: '1.2rem',
              width: '1.2rem',
            }"
          />
        </span>
      </a>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "/src/assets/css/variable";

.header {
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 3rem 5rem;
    background-color: var(--p-gray-1);
  }
  &__logo {
    display: flex;
    align-items: center;
    gap: 1rem;
    line-height: 1;
    svg {
      height: 3rem;
      width: 3rem;
      color: var(--p-pin-light);
    }
  }
  &__nav {
    display: flex;
    gap: 3rem;
  }
  &__link {
    position: relative;
    font-size: 1.4rem;
    text-transform: uppercase;
    color: var(--p-basic-text);
    transition: all 0.25s ease-out;
    &::before {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      border-top: 2px solid currentColor;
      transform: scaleX(0);
      transition: all 0.25s ease-out;
    }
    &:hover,
    &:active,
    &:first-child {
      color: var(--p-primary-color);
      &::before {
        transform: scaleX(100%);
      }
    }
  }
  &__blank {
    color: currentColor;
    opacity: 0.7;
  }
}
</style>

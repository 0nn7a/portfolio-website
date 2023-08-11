<script setup></script>

<template>
  <header class="header__container">
    <div class="header__logo">
      <SvgIcon icon-name="logo" :icon-style="null" />
      <h3 class="heading-3">Portfolio Website</h3>
    </div>

    <nav class="header__nav">
      <router-link :to="{ name: 'Home' }" class="header__nav__link">
        首頁
      </router-link>
      <router-link :to="{ name: 'Rwd' }" class="header__nav__link">
        RWD介紹
      </router-link>
      <router-link :to="{ name: 'Quote' }" class="header__nav__link">
        報價
      </router-link>
      <a class="header__nav__link" href="javascript:void(0)">作品</a>
      <a class="header__nav__link" href="javascript:void(0)">聯絡我們</a>
      <a
        class="header__nav__link"
        href="https://www.3hidesign.com/"
        target="_blank"
      >
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
        <span class="popover-down">
          將會導向外部網站 <br />
          “山海工作室”
        </span>
      </a>
    </nav>

    <input id="menu" type="checkbox" class="header__checkbox" />
    <label for="menu" class="header__btn">
      <SvgIcon
        icon-name="menu"
        :icon-style="{
          padding: '0.5rem',
          height: '3.2rem',
          width: '3.2rem',
        }"
      />
      <nav class="header__collapse">
        <router-link :to="{ name: 'Home' }" class="header__collapse__link">
          首頁
        </router-link>
        <router-link :to="{ name: 'Rwd' }" class="header__collapse__link">
          RWD介紹
        </router-link>
        <router-link :to="{ name: 'Quote' }" class="header__collapse__link">
          報價
        </router-link>
        <a class="header__collapse__link" href="javascript:void(0)">作品</a>
        <a class="header__collapse__link" href="javascript:void(0)">聯絡我們</a>
        <a
          class="header__collapse__link"
          href="https://www.3hidesign.com/"
          target="_blank"
        >
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
          <span class="popover-down-left">
            將會導向外部網站 <br />
            “山海工作室”
          </span>
        </a>
      </nav>
    </label>
  </header>
</template>

<style lang="scss" scoped>
@import "/src/assets/css/variable";
@import "/src/assets/css/mixin";

%link-basic {
  position: relative;
  color: var(--p-basic-text);
  font-size: 1.4rem;
  text-transform: uppercase;
  padding: 0.6rem 1.2rem;
  border-radius: 0.35rem;
  overflow: hidden;
  transition: all 0.25s ease-out;
  &:hover,
  &:active {
    overflow: visible;
    .popover-down,
    .popover-down-left {
      opacity: 1;
    }
  }
  .popover-down {
    left: 100%;
    transform: translate(-100%, 20%);
    opacity: 0;
  }
  .popover-down-left {
    opacity: 0;
  }
}

.header {
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    gap: 1rem;
    @include respond(tab-port) {
      display: none;
    }
    &__link {
      @extend %link-basic;
      &:hover,
      &:active {
        background-color: var(--p-primary-color);
        color: var(--p-basic-backgroud);
      }
    }
    .router-link-active {
      background-color: var(--p-primary-color);
      color: var(--p-basic-backgroud);
    }
  }

  &__blank {
    color: currentColor;
    opacity: 0.7;
  }

  &__checkbox {
    display: none;
    &:checked + .header__btn {
      background-color: var(--p-primary-color);
      fill: var(--p-basic-backgroud);
      overflow: visible;
      .header__collapse {
        z-index: 50;
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  &__btn {
    position: relative;
    display: none;
    height: 3.2rem;
    width: 3.2rem;
    background-color: var(--p-gray-2);
    fill: var(--p-basic-text);
    border-radius: 0.5rem;
    overflow: hidden;
    transition: all 0.25s ease-out;
    @include respond(tab-port) {
      display: inline-block;
    }
  }
  &__collapse {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 0;
    margin-top: 0.5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: var(--p-basic-backgroud);
    border: 1px solid var(--p-gray-2);
    border-radius: 0.5rem;
    opacity: 0;
    transform: translateY(-1rem);
    transition: all 0.25s ease-out;
    &__link {
      @extend %link-basic;
      white-space: nowrap;
      &:hover,
      &:active {
        background-color: var(--p-gray-2);
        color: var(--p-basic-text);
      }
    }
    .router-link-active {
      background-color: var(--p-gray-2);
      color: var(--p-basic-text);
    }
  }
}
</style>

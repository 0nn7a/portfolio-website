<script setup></script>

<template>
  <section class="rwd__container">
    <div class="rwd__title">
      <h2 class="heading-2">什麼是 RWD 響應式網頁？</h2>
      <p class="description">
        設計不同螢幕大小下的字型、行距等版面<br />
        使您的網站在使用不同尺寸的裝置瀏覽時皆有合適的呈現
      </p>
    </div>

    <div class="rwd__item">
      <div class="pc__container fake__outline">
        <ul class="pc__list fake__list">
          <li class="fake__item" v-for="item in 6" :key="item">
            <span class="fake__square"></span>
            <span class="fake__line"></span>
          </li>
        </ul>
      </div>
      <div class="pc__title">
        <h4 class="heading-4">Desktop</h4>
      </div>
    </div>

    <div class="rwd__item">
      <div class="tab__container fake__outline">
        <ul class="tab__list fake__list">
          <li class="fake__item" v-for="item in 6" :key="item">
            <span class="fake__square"></span>
            <span class="fake__line"></span>
          </li>
        </ul>
      </div>
      <div class="tab__title">
        <h4 class="heading-4">Tab</h4>
      </div>
    </div>

    <div class="rwd__item">
      <div class="phone__container fake__outline">
        <ul class="phone__list fake__list">
          <li class="fake__item" v-for="item in 6" :key="item">
            <span class="fake__square"></span>
            <span class="fake__line"></span>
          </li>
        </ul>
      </div>
      <div class="phone__title">
        <h4 class="heading-4">Phone</h4>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "/src/assets/css/variable";
@import "/src/assets/css/mixin";

.heading-4 {
  color: var(--p-gray-6);
}

.rwd {
  &__container {
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    grid-template-columns: repeat(3, max-content);
    align-items: flex-end;
    gap: 0.8rem 2rem;
    @include respond(655px) {
      grid-template-rows: repeat(4, max-content);
      grid-template-columns: max-content;
    }
  }
  &__title {
    grid-row: 1 / span 1;
    grid-column: 1 / -1;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  &__item {
    grid-row: 2 / span 1;
    @include respond(655px) {
      grid-row: auto;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}

.fake {
  &__outline {
    background-color: transparent;
    border: 1px solid var(--p-gray-3);
    border-radius: 0.5rem;
  }
  &__list {
    height: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 0.5rem;
  }
  &__square {
    height: 5rem;
    width: 100%;
    background-color: var(--p-gray-1);
    border-radius: 0.5rem;
  }
  &__line {
    position: relative;
    height: 0.2rem;
    width: 65%;
    background-color: var(--p-gray-2);
    border-radius: 0.5rem;
    &::after {
      content: "";
      position: absolute;
      top: 0.5rem;
      left: 0;
      height: 0.2rem;
      width: 60%;
      background-color: var(--p-gray-2);
      border-radius: 0.5rem;
    }
  }
}

.pc {
  &__container {
    display: flex;
    justify-content: center;
    padding: 3rem 1rem 1rem;
    height: 15rem;
    width: 25rem;
  }
  &__list {
    display: grid;
    grid-template-rows: repeat(2, 7rem);
    grid-template-columns: repeat(3, 5rem);
    gap: 1rem;
  }
}

.tab {
  &__container {
    display: flex;
    justify-content: center;
    padding: 2rem 0.6rem 0.6rem;
    height: 13rem;
    width: 11rem;
  }
  &__list {
    display: grid;
    grid-template-rows: repeat(3, 6rem);
    grid-template-columns: repeat(2, 4rem);
    gap: 0.8rem;
    .fake__square {
      height: 4rem;
    }
  }
}

.phone {
  &__container {
    display: flex;
    justify-content: center;
    padding: 1.5rem 1rem 1rem;
    height: 10rem;
    width: 6rem;
  }
  &__list {
    width: 100%;
    display: grid;
    grid-template-rows: repeat(6, 4.5rem);
    grid-template-columns: 1fr;
    gap: 0.5rem;
    .fake__square {
      height: 3rem;
    }
  }
}
</style>

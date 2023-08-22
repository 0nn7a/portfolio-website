<script setup>
const props = defineProps({
  addData: {
    type: Object,
    default: {
      title: "標題",
      des: "描述",
      content: [],
    },
  },
});
const abDom = ref(null);
const listDom = ref(null);
const setCols = () => {
  if (window.innerWidth > 1000) {
    if (abDom.value.offsetWidth >= 440) {
      listDom.value.style["column-count"] = 2;
    } else {
      listDom.value.style["column-count"] = 1;
    }
  }
};

onMounted(() => {
  setCols();
  window.addEventListener("resize", setCols);
});
</script>

<template>
  <div class="add-buy__container" ref="abDom">
    <div class="add-buy__title">
      <h3 class="heading-3">{{ props.addData.title }}</h3>
      <p class="description">{{ props.addData.des }}</p>
    </div>
    <ul class="add-buy__list" ref="listDom">
      <li
        v-for="ctt in props.addData.content"
        :key="ctt.name"
        class="add-buy__item"
      >
        <h5 class="heading-5">{{ ctt.name }}</h5>
        <div class="add-buy__des">
          <p>ITEM</p>
          <p>AMOUNT</p>
        </div>
        <div
          v-for="(lst, index) in ctt.list"
          :key="index"
          class="add-buy__content"
        >
          <a v-if="lst.info" href="javascript:void(0)" class="add-buy__info">
            <p class="normal-text">{{ lst.item }}</p>
            <span class="popover-right">
              {{ lst.info }}
            </span>
          </a>
          <p v-else class="normal-text">{{ lst.item }}</p>
          <p class="normal-text">{{ lst.amount }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "/src/assets/css/variable";
@import "/src/assets/css/mixin";

.add-buy {
  &__container {
    padding-left: 3rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    border-left: 1px solid var(--p-gray-2);
    @include respond(1245px) {
      gap: 2rem;
    }
    @include respond(1000px) {
      padding: 5rem 0;
      border-left: none;
      border-top: 1px solid var(--p-gray-2);
    }
  }
  &__title {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__list {
    width: 100%;
    margin: 0 auto;
    column-count: 1;
    column-gap: 3rem;

    @include respond(1000px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }
    @include respond(900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include respond(phone) {
      grid-template-columns: 1fr;
    }
  }
  &__item {
    break-inside: avoid;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 2rem;
    color: var(--p-basic-text);
    background-image: linear-gradient(
      120deg,
      var(--p-gray-1),
      rgba(10, 10, 100, 0.015) 60%
    );
    border: 1px solid var(--p-gray-1);
    border-radius: 1rem;
    &:not(:first-child) {
      margin-top: 3rem;
      @include respond(1245px) {
        margin-top: 1.5rem;
      }
      @include respond(1000px) {
        margin: 0;
      }
    }
  }
  &__des {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.1em;
    color: var(--p-gray-4);
    border-bottom: 1px solid var(--p-gray-3);
  }
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__info {
    position: relative;
    overflow: hidden;
    text-decoration: underline;
    color: var(--p-primary-text);
    &:hover,
    &:active {
      color: var(--p-gray-5);
      overflow: visible;
      .popover-right {
        opacity: 1;
      }
    }
    .popover-right {
      opacity: 0;
      text-align: justify;
    }
    .normal-text {
      color: inherit;
      transition: all 0.25s ease-out;
    }
  }
}
</style>

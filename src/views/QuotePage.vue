<script setup></script>

<template>
  <section class="quote__container">
    <div class="quote__title">
      <h2 class="heading-2">網頁設計方案</h2>
      <p class="description">
        客製化設計，價格會依照版面的細膩程度而異<br />
        可先提供喜歡或預想中的網站案例、簡易網站架構圖，報價評估會更精確！
      </p>
    </div>

    <TableCompare />

    <p class="remark-text">以上方案均為客製化，因此皆包含「設計費用」</p>
    <p class="remark-text">總價標示為未稅價、不包含每年主機承租與維護</p>
  </section>
</template>

<style lang="scss" scoped>
@import "/src/assets/css/variable";

.quote {
  &__container {
  }
  &__title {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
}
</style>

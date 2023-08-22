<script setup>
const tableData = reactive({
  header: [
    {
      id: "onePage",
      title: "一頁式網頁",
      price: "$15,900",
      des: "所有內容集中於一個頁面\n資訊一目瞭然",
      badge: "客製化",
    },
    {
      id: "companyWeb",
      title: "企業形象網站",
      price: "$29,900",
      des: "網路上對外的形象門面\n展現公司特色、激發潛在客戶",
      badge: "客製化",
    },
  ],
  content: {
    基礎內容: {
      type: "list",
      onePage: ["5 個區塊", "聯絡表單"],
      companyWeb: [
        "首頁",
        "一般頁面",
        "最新消息",
        "商品介紹",
        "聯絡表單",
        "後台管理系統",
      ],
    },
    基礎動效: {
      info: "如游標停留在按鈕上時，顏色將變化以提示使用者可點擊互動，\n此類基本動畫增加流暢的體驗感。",
      type: "svg",
      onePage: "check",
      companyWeb: "check",
    },
    頁面限制: {
      type: "text",
      onePage: "1 頁",
      companyWeb: "基礎 3 頁（加購頁面無限制）",
    },
    製作天數: {
      type: "text",
      onePage: "10 個工作天以上",
      companyWeb: "需依照專案複雜度評估",
    },
    "RWD 支援": {
      info: "設計不同螢幕大小下的字型、行距等版面，\n使您的網站在使用不同尺寸的裝置瀏覽時皆有合適的呈現。",
      type: "svg",
      onePage: "check",
      companyWeb: "check",
    },
    主機承租維護: {
      info: "服務包含技術諮詢、安全性維護、日常備份、系統bug移除，\n版型部分，提供簡易換圖文案修改，另內容部分皆有後台，可於日後自行新增刪除。",
      type: "text",
      onePage: "+ NT $4,500 / 年",
      companyWeb: "+ NT $5,800 / 年",
    },
  },
});
const addData = reactive({
  title: "加購項目",
  des: "價格依實際內容評估後為準",
  content: [
    {
      name: "追加內容",
      list: [
        {
          item: "區塊",
          amount: "$ 2,200 起",
          info: "一頁式網頁中追加單個區塊，\n再依複雜程度區分。",
        },
        {
          item: "頁面",
          amount: "$ 5,400 起",
          info: "追加新的頁面，基礎含2個區塊。\n（一頁式網頁方案不可選）",
        },
      ],
    },
    {
      name: "功能系統",
      list: [
        { item: "留言板", amount: "$ 1,500 起" },
        { item: "會員", amount: "$ 1,500 起" },
        { item: "部落格", amount: "$ 1,500 起" },
        {
          item: "大型動畫",
          amount: "$ 1,500 起",
          info: "基礎動效以外，\n如整頁滾動的元素淡入淡出。",
        },
      ],
    },
    {
      name: "網址代購",
      list: [
        { item: ".com", amount: "$ 820 /年" },
        { item: ".com.tw", amount: "$ 900 /年" },
      ],
    },
    {
      name: "其他",
      list: [
        { item: "急件", amount: "依需求另計" },
        {
          item: "多語系",
          amount: "$ 1,200 /個",
          info: "不含翻譯服務，\n需自行提供不同語系的內容，\n或者參考Google翻譯的正確性。",
        },
        { item: "配色", amount: "$ 1,500 /組" },
      ],
    },
  ],
});
</script>

<template>
  <section class="quote__container">
    <div class="quote__title title-layout">
      <h2 class="heading-2">網頁設計方案</h2>
      <p class="description">
        客製化設計，價格會依照版面的細膩程度而異<br />
        可先提供喜歡或預想中的網站案例、簡易網站架構圖，報價評估會更精確！
      </p>
    </div>

    <TableCompare :table-data="tableData" />
    <p class="remark-text">以上方案均為客製化，因此皆包含「設計費用」</p>
    <p class="remark-text">
      總價標示為未稅價、不包含每年主機承租與維護等「年繳費用」
    </p>

    <AddBuy :add-data="addData" />

    <TrialCost />
  </section>
</template>

<style lang="scss" scoped>
@import "/src/assets/css/variable";
@import "/src/assets/css/mixin";

.quote {
  &__container {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 0 3rem;
    @include respond(1000px) {
      grid-template-columns: 1fr;
    }
    @include respond(big-desktop) {
      grid-template-columns: 60% 40%;
    }

    :deep(.table__compare) {
      grid-column: 1 / span 1;
      margin: 3rem 0;
      @include respond(1000px) {
        grid-row: 2 / span 1;
        grid-column: 1 / -1;
      }
    }
    .remark-text {
      grid-column: 1 / -1;
      &:last-of-type {
        margin-bottom: 5rem;
      }
    }

    :deep(.add-buy__container) {
      grid-row: 2 / span 1;
      grid-column: 2 / span 1;
      margin: 3rem 0;
      @include respond(1000px) {
        margin: 0;
        grid-row: 5 / span 1;
        grid-column: 1 / -1;
      }
    }

    :deep(.trial__container) {
      grid-row: 5 / span 1;
      grid-column: 1 / -1;
      padding: 5rem 0;
      @include respond(1000px) {
        grid-row: 6 / span 1;
      }
    }
  }
  &__title {
    grid-row: 1 / span 1;
    grid-column: 1 / -1;
  }
}
</style>

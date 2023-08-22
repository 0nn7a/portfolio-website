<script setup>
// SELECT SHOW
const shows = reactive({
  webType: false,
});
const anyoneShow = computed({
  get() {
    let result = false;
    Object.keys(shows).forEach((key) => {
      if (result) return;
      if (shows[key]) result = true;
    });
    return result;
  },
});
const toggleShow = (key) => {
  shows[key] = !shows[key];
};
const clearShow = () => {
  if (anyoneShow) {
    Object.keys(shows).forEach((key) => {
      if (shows[key]) {
        shows[key] = false;
      }
    });
  }
};
const trialSelected = reactive({
  webType: "一頁式網頁",
});

// ALL OPTIONS & AMOUNTS
const trialOpt = reactive({
  webType: {
    type: "select",
    name: "需求類型",
    content: [
      { id: "onePage", name: "一頁式網頁", unit: 15900, value: 1 },
      { id: "companyWeb", name: "企業形象網站", unit: 29900, value: 0 },
    ],
  },
  quantity: {
    type: "text",
    name: "內容數量",
    content: [
      { id: "area", name: "區塊", unit: 2200, value: 5 },
      { id: "page", name: "頁面", unit: 5400, value: 3 },
    ],
  },
  system: {
    type: "checkbox",
    name: "功能系統",
    content: [
      { id: "comment", name: "留言板", unit: 1500, value: 0 },
      { id: "member", name: "會員", unit: 1500, value: 0 },
      { id: "blog", name: "部落格", unit: 1500, value: 0 },
      { id: "animate", name: "大型動畫", unit: 1500, value: 0 },
    ],
    checked: [],
  },
  addBuy: {
    type: "text",
    name: "加購項目",
    content: [
      { id: "language", name: "語系", unit: 1200, value: 1 },
      { id: "theme", name: "配色", unit: 1500, value: 1 },
    ],
  },
  annualFee: {
    type: "hr",
    name: "年繳費用",
    content: [],
  },
  host: {
    type: "checkbox",
    name: "主機承租、維護",
    content: [{ id: "1year", name: "一年", unit: 4500, value: 0 }],
    checked: [],
  },
  site: {
    type: "radio",
    name: "網址代購",
    content: [
      { id: "com", name: ".com", unit: 820, value: 0 },
      { id: "tw", name: ".com.tw", unit: 900, value: 0 },
    ],
    checked: [],
  },
});
const amounts = computed({
  get() {
    let obj = {};
    Object.keys(trialOpt).forEach((key) => {
      let sum = 0;
      trialOpt[key].content.forEach((item) => {
        if (item.value) {
          let num = 0;
          switch (item.id) {
            case "area":
              num = item.value - 5 > 0 ? item.value - 5 : 0;
              break;
            case "page":
              num = item.value - 3 > 0 ? item.value - 3 : 0;
              break;
            case "language":
            case "theme":
              num = item.value - 1 > 0 ? item.value - 1 : 0;
              break;
            default:
              num = item.value;
              break;
          }
          sum += item.unit * num;
        }
      });
      if (key !== "annualFee") obj[key] = sum;
    });
    let total = 0;
    let annualFee = 0;
    for (let i in obj) {
      switch (i) {
        case "host":
        case "site":
          annualFee += obj[i];
          total += obj[i];
          break;
        default:
          total += obj[i];
          break;
      }
    }
    obj.total = total;
    obj.annualFee = annualFee;
    for (let i in obj) {
      obj[i] = obj[i].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return obj;
  },
});

const toggleSelected = (key, val) => {
  trialSelected[key] = val;
  trialOpt[key].content.forEach((item) => {
    item.value = item.name === val ? 1 : 0;
  });
  if (key === "webType") {
    trialOpt.quantity.content[0].value = 5;
    trialOpt.quantity.content[1].value = 3;
  }
};
const calculate = (list, item) => {
  if (list.type === "text") {
    if (/^0$|^\D$|^\s$/.test(item.value.toString()) || item.value === "") {
      item.value = 1;
    }
    item.value = parseInt(item.value.toString().replace(/\D/g, ""));
  } else {
    if (list.type === "radio" && list.checked.length > 1) {
      list.content.forEach((ct) => {
        if (ct.id === list.checked[0]) ct.value = 0;
      });
      list.checked.shift();
    }
    item.value = list.checked.includes(item.id) ? 1 : 0;
  }
};

onMounted(() => {
  document.addEventListener("click", clearShow);
});
onUnmounted(() => {
  document.removeEventListener("click", clearShow);
});
</script>

<template>
  <section class="trial__container">
    <div class="trial__title title-layout">
      <h2 class="heading-2">費用試算</h2>
      <p class="description">
        若以上資訊過於複雜，可以嘗試直接輸入您的需求進行試算
        <br />
        計算出的金額通常僅為起始價格，實際價格依實際需求將有所調整
      </p>
    </div>

    <form class="trial__area normal-text">
      <template v-for="(list, key) in trialOpt" :key="key">
        <p v-if="list.type !== 'hr'" class="trial__type">{{ list.name }}</p>

        <!-- trial__opts start -->
        <!-- select -->
        <div v-if="list.type === 'select'" class="trial__opts">
          <button
            class="trial__opts__select"
            @click="toggleShow(key)"
            @click.stop
          >
            {{ trialSelected[key] }}
            <ul v-if="shows[key]" class="trial__opts__select-list">
              <li
                v-for="item in list.content"
                :key="item.id"
                class="trial__opts__select-item"
                :class="
                  trialSelected[key] === item.name
                    ? 'trial__opts__select-item-checked'
                    : ''
                "
                @click="toggleSelected(key, item.name)"
              >
                {{ item.name }}
              </li>
            </ul>
          </button>
        </div>
        <!-- text -->
        <div v-else-if="list.type === 'text'" class="trial__opts">
          <div
            :ref="`textsDOM`"
            v-for="item in list.content"
            :key="item.id"
            class="trial__opts__input"
            :style="
              (trialSelected.webType === '一頁式網頁' && item.id === 'page') ||
              (trialSelected.webType === '企業形象網站' && item.id === 'area')
                ? { opacity: 0.3 }
                : null
            "
          >
            {{ item.name }}
            <input
              type="text"
              v-model.trim="item.value"
              @change="calculate(list, item)"
              :disabled="
                (trialSelected.webType === '一頁式網頁' &&
                  item.id === 'page') ||
                (trialSelected.webType === '企業形象網站' && item.id === 'area')
              "
            />
          </div>
        </div>
        <!--     checkbox || radio    -->
        <div
          v-else-if="list.type === 'checkbox' || list.type === 'radio'"
          class="trial__opts"
        >
          <template v-for="item in list.content" :key="item.id">
            <input
              class="trial__opts__hidden"
              type="checkbox"
              :name="key"
              :id="item.id"
              :value="item.id"
              v-model="list.checked"
              @change="calculate(list, item)"
            />
            <label class="trial__opts__hidden-btn" :for="item.id">
              {{ item.name }}
            </label>
          </template>
        </div>
        <!--     hr__text     -->
        <div v-else-if="list.type === 'hr'" class="hr__text">
          {{ list.name }}
        </div>
        <!--     trial__opts end     -->

        <p v-if="list.type !== 'hr'" class="trial__amount">
          ${{ amounts[key] }}
        </p>
      </template>

      <span class="ticket__line"></span>
      <div class="trial__total">
        <p class="normal-text">試算總額（含首年費）</p>
        <h4 class="heading-4">${{ amounts.total }}</h4>
        <p class="normal-text">年費</p>
        <h5 class="heading-5">${{ amounts.annualFee }}</h5>
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped>
@import "/src/assets/css/variable";
@import "/src/assets/css/mixin";

.trial {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
    border-top: 1px solid var(--p-gray-2);
  }
  &__title {
  }

  &__area {
    position: relative;
    display: grid;
    grid-template-columns: 1fr max-content;
    align-items: center;
    gap: 0.5rem 2.5rem;
    grid-auto-flow: dense;
    background-color: var(--p-gray-1);
    padding: 2rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    @include respond(phone) {
      width: 100%;
      padding: 1.5rem;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1rem;
      background-image: radial-gradient(
        circle closest-side,
        var(--p-basic-backgroud) 1rem,
        transparent 1rem
      );
      background-size: 1.5rem 100%;
      transform: translateY(50%);
    }

    .normal-text {
      letter-spacing: 0.05em;
    }
    .hr__text,
    .ticket__line {
      grid-column: 1 / -1;
      margin-top: 2.5rem;
    }
    .ticket__line {
      position: relative;
      height: 1px;
      width: calc(100% + 4rem);
      background: linear-gradient(
          to left,
          transparent 0%,
          transparent 50%,
          var(--p-gray-3) 50%,
          var(--p-gray-3) 100%
        )
        repeat-x;
      background-size: 1.25rem 1px;
      transform: translateX(-2rem);
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        height: 1.25rem;
        width: 1.25rem;
        background-color: var(--p-basic-backgroud);
        border-radius: 50%;
      }
      &::before {
        left: 0;
        transform: translate(-50%, -50%);
      }
      &::after {
        right: 0;
        transform: translate(50%, -50%);
      }
      @include respond(phone) {
        width: calc(100% + 3rem);
        transform: translateX(-1.5rem);
      }
    }
  }

  &__type {
    grid-column: 1 / -1;
    font-size: inherit;
    font-weight: 400;
    letter-spacing: 0.1em;
    color: var(--p-gray-5);
    transform-origin: left bottom;
    transform: scale(0.9);
    &:not(:first-of-type) {
      margin-top: 1.5rem;
    }
  }
  &__opts {
    grid-column: 1 / span 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem 1.5rem;
    justify-items: flex-start;
    white-space: nowrap;

    // SELECT
    &__select {
      grid-column: 1 / -1;
      position: relative;
      padding: 0.5rem 2.5rem 0.5rem 1.25rem;
      color: var(--p-primary-text);
      background-color: var(--p-basic-backgroud);
      border: 1px solid var(--p-gray-3);
      border-radius: 0.35rem;
      transition: 0.25s all ease-out;
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 1rem;
        height: 0.65rem;
        width: 0.65rem;
        border-top: 1.5px solid var(--p-gray-3);
        border-left: 1.5px solid var(--p-gray-3);
        transform: translate(0, -65%) rotate(-135deg);
        transition: 0.25s all ease-out;
        @include respond(mini-phone) {
          right: 0.65rem;
        }
      }
      &:hover,
      &:focus {
        border: 1px solid var(--p-primary-color);
        &::after {
          border-top: 1.5px solid var(--p-primary-color);
          border-left: 1.5px solid var(--p-primary-color);
        }
      }
      &-list {
        position: absolute;
        top: calc(100% + 0.5rem);
        left: 0;
        z-index: 20;
        max-height: 11rem;
        width: 100%;
        padding: 0.5rem 0;
        display: flex;
        flex-direction: column;
        background-color: var(--p-basic-backgroud);
        border: 1px solid var(--p-gray-2);
        border-radius: 0.35rem;
      }
      &-item {
        padding: 0.8rem 0.5rem;
        font-size: inherit;
        color: var(--p-gray-6);
        transition: all 0.25s ease-out;
        &:hover,
        &-checked {
          background-color: var(--p-gray-1);
        }
      }
    }

    //INPUT
    &__input {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0.5rem;
      color: var(--p-primary-text);
      input[type="text"] {
        width: 3em;
        font-size: inherit;
        text-align: center;
        color: var(--p-primary-text);
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--p-gray-4);
        outline: none;
        &:disabled {
          cursor: not-allowed;
        }
      }
    }

    // RADIO & CHECKBOX
    &__hidden {
      width: 0;
      height: 0;
      display: none;
      &-btn {
        width: 100%;
        padding: 0.5rem 1.25rem;
        font-size: inherit;
        text-align: center;
        color: var(--p-gray-5);
        background-color: var(--p-basic-backgroud);
        border: 1px solid var(--p-gray-4);
        border-radius: 0.35rem;
        transition: all 0.25s ease-out;
        &:hover {
          color: var(--p-primary-text);
          background-color: var(--p-gray-3);
          border: 1px solid var(--p-gray-3);
        }
      }
      &:checked + &-btn {
        color: var(--p-pin-light);
        background-color: var(--p-primary-color);
        border: 1px solid var(--p-primary-color);
      }
    }
  }
  &__amount {
    grid-column: 2 / -1;
    font-size: inherit;
    font-weight: 500;
    text-align: end;
    color: var(--p-gray-6);
  }

  &__total {
    grid-column: 1 / -1;
    margin: 2.2rem 0 1rem;
    display: grid;
    grid-template-columns: max-content 1fr;
    justify-items: flex-end;
    align-items: center;
    gap: 0.5rem 0;
    color: var(--p-gray-6);
    .normal-text {
      color: inherit;
      justify-self: flex-start;
    }
    .heading-4::after {
      content: "起";
      margin-left: 0.25rem;
      font-size: 70%;
    }
  }
}
</style>

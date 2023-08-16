<script setup>
const props = defineProps({
  tableData: {
    type: Object,
    default: { header: [], content: {} },
  },
});
</script>

<template>
  <!-- Table | window >= 655px -->
  <table class="table__compare">
    <thead>
      <tr>
        <td></td>
        <!-- 列表標題 -->
        <th v-for="thItem in props.tableData.header" :key="thItem.id">
          <div class="table__compare__title">
            <h4 class="heading-4">{{ thItem.title }}</h4>
            <p class="same__price">{{ thItem.price }}</p>
            <p class="description">
              {{ thItem.des }}
            </p>
            <span class="table__compare__badge">{{ thItem.badge }}</span>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(trItem, key) in props.tableData.content" :key="key">
        <!-- 比較標題 -->
        <td>
          <p class="normal-text">
            {{ key }}
          </p>
          <a v-if="trItem.info" class="svg-info">
            <SvgIcon
              icon-name="info-circle"
              :icon-style="{
                height: '1.6rem',
                width: '1.6rem',
                fill: 'currentColor',
              }"
            >
            </SvgIcon>
            <span class="popover-right">
              {{ trItem.info }}
            </span>
          </a>
        </td>
        <!-- 比較內容 -->
        <td v-for="tdItem in props.tableData.header" :key="tdItem.id">
          <!-- 清單列表類 -->
          <ul v-if="trItem.type === 'list'" class="table__compare__list">
            <li v-for="item in trItem[tdItem.id]" :key="item">
              <p class="normal-text">- {{ item }}</p>
            </li>
          </ul>
          <!-- svg類 -->
          <SvgIcon
            v-else-if="trItem.type === 'svg'"
            :icon-name="trItem[tdItem.id]"
            :icon-style="{
              height: '2rem',
              width: '2rem',
              color: 'currentColor',
            }"
          />
          <!-- 純文字類 -->
          <p v-else class="normal-text">{{ trItem[tdItem.id] }}</p>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Cards | window < 655px -->
  <ul class="cards__compare">
    <li
      v-for="card in props.tableData.header"
      :key="card.id"
      class="cards__compare__item"
    >
      <div class="cards__compare__title">
        <h3 class="heading-3">{{ card.title }}</h3>
        <span class="cards__compare__badge">{{ card.badge }}</span>
      </div>

      <p class="description">
        {{ card.des }}
      </p>
      <p class="same__price">{{ card.price }}</p>
      <hr />

      <div
        v-for="(ctt, key) in props.tableData.content"
        :key="key"
        class="cards__compare__content"
      >
        <h4 class="heading-4">
          <SvgIcon
            icon-name="check"
            :icon-style="{
              height: '2rem',
              width: '2rem',
              color: 'currentColor',
            }"
          />{{ key }}
        </h4>
        <ul class="cards__compare__block">
          <li
            v-if="Array.isArray(ctt[card.id])"
            v-for="item in ctt[card.id]"
            :key="item"
          >
            - {{ item }}
          </li>
          <li v-else-if="ctt.type !== 'svg'">{{ ctt[card.id] }}</li>
          <span v-if="ctt.info" class="remark-text">{{ ctt.info }}</span>
        </ul>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "/src/assets/css/variable";
@import "/src/assets/css/mixin";

// Same
.same {
  &__price {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--p-primary-text);
    &::before {
      content: "NT";
      font-size: 2rem;
      margin-right: 0.2em;
    }
    &::after {
      content: "起";
      margin-left: 0.3em;
      font-size: 1.6rem;
    }
  }
}
.description {
  white-space: pre;
}

// Table | window >= 655px
.table__compare {
  border-collapse: separate;
  border-spacing: 0;
  @include respond(655px) {
    display: none;
  }

  th,
  td {
    padding: 3rem;
  }

  thead {
    th {
      position: relative;
      vertical-align: top;
      border-top-right-radius: 1rem;
      border-top-left-radius: 1rem;
      overflow: hidden;
      &:nth-of-type(odd) {
        background-color: var(--p-gray-1);
        border: 1px solid var(--p-gray-3);
        border-bottom: none;
      }
    }
  }
  &__title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  &__badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: rotate(45deg) translate(1.8rem, -3.5rem);
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    padding: 3rem 3rem 0.5rem;
    color: var(--p-pin-light);
    background-color: var(--p-primary-color);
    border-radius: 0.5rem;
    @include respond(tab-land) {
      font-size: 1.3rem;
    }
    @include respond(tab-port) {
      font-size: 1.2rem;
    }
  }

  tbody {
    tr {
      td {
        vertical-align: top;
        border-top: 1px solid var(--p-gray-3);
        &:first-child {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding-left: 0;
          color: var(--p-gray-6);
          .svg-info {
            position: relative;
            display: flex;
            height: 100%;
            color: var(--p-gray-6);
            overflow: hidden;
            transition: all 0.25s ease-out;
            &:hover,
            &:active,
            &:focus {
              color: var(--p-gray-5);
              overflow: visible;
              .popover-right {
                opacity: 1;
              }
            }
            .popover-right {
              opacity: 0;
              transform: translate(1rem, 1.7rem);
            }
          }
        }
        &:nth-of-type(even) {
          border: 1px solid var(--p-gray-3);
          background-color: var(--p-gray-1);
          border-bottom: none;
        }
      }
      &:last-of-type {
        td:nth-of-type(even) {
          border-bottom: 1px solid var(--p-gray-3);
          border-bottom-right-radius: 1rem;
          border-bottom-left-radius: 1rem;
        }
      }
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}

// Cards | window < 655px
.cards__compare {
  margin: 3rem 0;
  display: none;
  grid-template-rows: repeat(2, max-content);
  gap: 3rem;
  @include respond(655px) {
    display: grid;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 3rem;
    border: 1px solid var(--p-primary-color);
    border-radius: 2rem;
    box-shadow: 0 0 0 0.25rem var(--p-primary-light);
    .same__price {
      text-align: end;
    }
  }
  &__title {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__badge {
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    color: var(--p-primary-text);
    background-color: var(--p-primary-light);
    border-radius: 1rem;
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding: 2rem 0 0;
    gap: 0.5rem;
    .heading-4 {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      font-weight: 500;
      color: var(--p-gray-6);
      padding-bottom: 0.5rem;
    }
  }
  &__block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 2rem;
    font-size: 1.4rem;
    background-color: var(--p-gray-1);
    border-radius: 1rem;
    @include respond(mini-phone) {
      font-size: 1.3rem;
    }
  }
}
</style>

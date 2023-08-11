<script setup></script>

<template>
  <table class="table__compare">
    <thead>
      <tr>
        <td></td>
        <th>
          <div class="table__compare__title">
            <h4 class="heading-4">一頁式網頁</h4>
            <p class="table__compare__price">$12,900</p>
            <p class="description">
              所有內容集中於一個頁面<br />
              資訊一目瞭然
            </p>
            <span class="table__compare__badge">客製化</span>
          </div>
        </th>
        <th>
          <div class="table__compare__title">
            <h4 class="heading-4">企業形象網站</h4>
            <p class="table__compare__price">$22,900</p>
            <p class="description">
              網路上對外的形象門面<br />
              展現公司特色、激發潛在客戶
            </p>
            <span class="table__compare__badge">客製化</span>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>基礎內容</td>
        <td>
          <ul class="table__compare__list">
            <li>- 5 ～ 6 個區塊</li>
            <li>- 聯絡表單</li>
          </ul>
        </td>
        <td>
          <ul class="table__compare__list">
            <li>- 首頁</li>
            <li>- 一般頁面</li>
            <li>- 最新消息</li>
            <li>- 商品介紹</li>
            <li>- 聯絡表單</li>
            <li>- 後台管理系統</li>
          </ul>
        </td>
      </tr>

      <tr>
        <td>頁面限制</td>
        <td>一頁</td>
        <td>無限制</td>
      </tr>

      <tr>
        <td>製作天數</td>
        <td>10 個工作天以上</td>
        <td>需依照專案複雜度評估</td>
      </tr>

      <tr>
        <td>
          RWD 支援
          <a class="svg-info">
            <SvgIcon
              icon-name="info-circle"
              :icon-style="{
                height: '1.6rem',
                width: '1.4rem',
                fill: 'currentColor',
              }"
            >
            </SvgIcon>
            <span class="popover-up-right">
              設計不同螢幕大小下的字型、行距等版面<br />
              使您的網站在使用不同尺寸的裝置瀏覽時皆有合適的呈現
            </span>
          </a>
        </td>
        <td>
          <SvgIcon
            icon-name="check"
            :icon-style="{
              height: '2rem',
              width: '2rem',
              color: 'currentColor',
            }"
          />
        </td>
        <td>
          <SvgIcon
            icon-name="check"
            :icon-style="{
              height: '2rem',
              width: '2rem',
              color: 'currentColor',
            }"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@import "/src/assets/css/variable";

.table__compare {
  //width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  th,
  td {
    font-size: 1.3rem;
    font-weight: 500;
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
  &__badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: rotate(45deg) translate(1.8rem, -3.5rem);
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    //margin-top: 1.5rem;
    padding: 3rem 3rem 0.5rem;
    color: var(--p-pin-light);
    background-color: var(--p-primary-color);
    border-radius: 0.5rem;
  }

  tbody {
    tr {
      td {
        vertical-align: top;
        border-top: 1px solid var(--p-gray-3);
        &:first-child {
          padding-left: 0;
          color: var(--p-gray-6);
          .svg-info {
            position: relative;
            display: inline-block;
            height: 1.6rem;
            width: 1.4rem;
            color: var(--p-gray-6);
            transform: translateY(16%);
            overflow: hidden;
            transition: all 0.25s ease-out;
            &:hover,
            &:active,
            &:focus {
              color: var(--p-gray-5);
              overflow: visible;
              .popover-up-right {
                opacity: 1;
              }
            }
            .popover-up-right {
              opacity: 0;
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
</style>

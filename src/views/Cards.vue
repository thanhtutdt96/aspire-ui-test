<template>
  <Page class="Cards">
    <Columns custom-class="Cards__top">
      <Column custom-class="is-flex is-justify-content-space-between is-align-items-flex-end">
        <div class="Cards__balance">
          <p>Available balance</p>
          <div class="is-flex is-align-items-center mt-3">
            <button class="button is-success is-small py-0">S$</button>
            <h5 class="ml-3">3,000</h5>
          </div>
        </div>
        <button class="button is-info is-flex Cards__new px-3">
          <unicon name="plus-circle" fill="#21CEFD"/>
          <span class="ml-2">New card</span>
        </button>
      </Column>
    </Columns>
    <Columns>
      <Column>
        <div class="tabs Cards__tabs">
          <ul>
            <li class="is-active">
              <a class="px-0 py-1">My debit cards</a>
            </li>
            <li class="ml-5">
              <a class="px-0">All company cards</a>
            </li>
          </ul>
        </div>
      </Column>
    </Columns>
    <Columns custom-class="is-hidden-desktop">
      <Column>
        <div class="is-flex is-align-items-center is-justify-content-flex-end">
          <div class="is-flex is-align-items-center Cards__show">
            <unicon name="eye" fill="#07D167"/>
            <span class="ml-1 txt-show has-text-success">Show card number</span>
          </div>
        </div>
        <Box class="Cards__card p-5 mb-4">
          <div class="is-flex is-justify-content-flex-end">
            <img src="@/assets/images/card-logo.png" alt="Card Logo">
          </div>
          <div class="mt-4">
            <h3 class="title is-4 mb-5">Mark Henry</h3>
            <div class="is-flex">
              <Dots/>
              <Dots class="ml-5"/>
              <Dots class="ml-5"/>
              <span class="ml-5">2020</span>
            </div>
          </div>
          <div class="mt-4 is-flex">
            <div>Thru: 12/20</div>
            <div class="ml-6">CVV: <span class="txt-cvv">***</span></div>
          </div>
          <div class="is-flex is-justify-content-flex-end">
            <img src="@/assets/images/visa-logo.png" alt="Card Logo">
          </div>
        </Box>
        <div class="is-flex is-justify-content-center">
          <Indicator/>
        </div>
      </Column>
    </Columns>
    <Columns>
      <Column>
        <Box class="Cards__main">
          <Columns>
            <Column custom-class="Cards__main-left is-hidden-touch">
              <div class="is-flex is-align-items-center is-justify-content-flex-end">
                <unicon name="eye" fill="#07D167"/>
                <span class="ml-1 txt-show has-text-success">Show card number</span>
              </div>
              <Box class="Cards__card mt-4 p-5">
                <div class="is-flex is-justify-content-flex-end">
                  <img src="@/assets/images/card-logo.png" alt="Card Logo">
                </div>
                <div class="mt-4">
                  <h3 class="title is-3 mb-5">Mark Henry</h3>
                  <div class="is-flex">
                    <Dots/>
                    <Dots class="ml-5"/>
                    <Dots class="ml-5"/>
                    <span class="ml-5">2020</span>
                  </div>
                </div>
                <div class="mt-4 is-flex">
                  <div>Thru: 12/20</div>
                  <div class="ml-6">CVV: <span class="txt-cvv">***</span></div>
                </div>
                <div class="is-flex is-justify-content-flex-end">
                  <img src="@/assets/images/visa-logo.png" alt="Card Logo">
                </div>
              </Box>
              <div class="is-flex is-justify-content-center">
                <Indicator/>
              </div>
              <Box class="Cards__actions mt-5 p-5 is-flex is-justify-content-space-between">
                <ActionItem v-for="(action,index) in actions" :key="index">
                  <template v-slot:name>{{ action.name }}</template>
                  <template v-slot:icon>
                    <unicon :name="action.icon" fill="white"/>
                  </template>
                </ActionItem>
              </Box>
            </Column>
            <Column custom-class="Cards__main-right">
              <Box class="Cards__actions p-5 is-flex is-justify-content-space-between is-hidden-desktop">
                <ActionItem v-for="(action,index) in actions" :key="index">
                  <template v-slot:name>{{ action.name }}</template>
                  <template v-slot:icon>
                    <unicon :name="action.icon" fill="white"/>
                  </template>
                </ActionItem>
              </Box>
              <div id="accordion_first">
                <Accordion :index="'first'">
                  <template v-slot:header>
                    <unicon name="receipt-alt" fill="#0F3A5D"/>
                    <p class="ml-3">Card details</p>
                    <div class="ml-auto">
                      <unicon name="angle-down" fill="#0F3A5D"/>
                    </div>
                  </template>
                  <template v-slot:content>Card details</template>
                </Accordion>
                <Accordion :index="'second'">
                  <template v-slot:header>
                    <unicon name="exchange" fill="#0F3A5D"/>
                    <p class="ml-3">Recent transcactions</p>
                    <div class="ml-auto">
                      <unicon name="angle-down" fill="#0F3A5D"/>
                    </div>
                  </template>
                  <template v-slot:content>
                    <TransactionItem v-for="(item, idx) in transactionItems" :key="idx" :icon-type="item.type">
                      <template v-slot:icon>
                        <unicon :name="item.icon" :fill="getIconColor(item.type)"/>
                      </template>
                      <template v-slot:content>
                        <h6 class="title mb-2">{{ item.name }}</h6>
                        <p>{{ item.date }}</p>
                        <div class="is-flex is-align-items-center mt-3">
                          <div class="transaction-item__action is-flex is-justify-content-center is-align-items-center">
                            <unicon name="credit-card" fill="#fff" width="18px"/>
                          </div>
                          <span class="ml-2">{{ item.action }}</span>
                        </div>
                      </template>
                      <template v-slot:price>
                        <p :class="{'has-text-success': item.isIncreased}" class="mr-2">+ S$ 150</p>
                        <unicon name="angle-right-b" fill="#ccc"/>
                      </template>
                    </TransactionItem>
                  </template>
                  <template v-slot:footer>
                    <div
                        class="is-flex is-align-items-center is-justify-content-center p-4 has-text-success Cards__view-all">
                      View all card transitions
                    </div>
                  </template>
                </Accordion>
              </div>
            </Column>
          </Columns>
        </Box>
      </Column>
    </Columns>
  </Page>
</template>

<script>
import Page from "@/components/layouts/Page";
import Columns from "@/components/elements/Columns";
import Column from "@/components/elements/Column";
import Box from "@/components/elements/Box";
import Dots from "@/components/elements/Dots";
import Indicator from "@/components/elements/Indicator";
import ActionItem from "@/components/elements/ActionItem";
import Accordion from "@/components/elements/Accordion";
import TransactionItem from "@/components/elements/TransactionItem";

export default {
  components: {TransactionItem, Accordion, ActionItem, Indicator, Dots, Box, Column, Columns, Page},
  setup() {
    const actions = [
      {
        name: "Freeze card",
        icon: "snow-flake"
      },
      {
        name: "Set spend limit",
        icon: "tachometer-fast"
      },
      {
        name: "Add to GPay",
        icon: "google"
      },
      {
        name: "Replace card",
        icon: "history"
      },
      {
        name: "Cancel card",
        icon: "trash-alt"
      }
    ]

    const transactionItems = [
      {
        icon: "archive-alt",
        type: "blue",
        name: "Hamleys",
        date: "20 May 2020",
        action: "Refund on debit card",
        price: "+ S$ 150",
        isIncreased: true
      },
      {
        icon: "plane-departure",
        type: "green",
        name: "Hamleys",
        date: "20 May 2020",
        action: "Charged to debit card",
        price: "- S$ 150",
        isIncreased: false
      },
      {
        icon: "megaphone",
        type: "red",
        name: "Hamleys",
        date: "20 May 2020",
        action: "Charged to debit card",
        price: "- S$ 150",
        isIncreased: false
      },
      {
        icon: "archive-alt",
        type: "blue",
        name: "Hamleys",
        date: "20 May 2020",
        action: "Charged to debit card",
        price: "- S$ 150",
        isIncreased: false
      }
    ]

    const getIconColor = (type) => {
      switch (type) {
        case "blue":
          return "#009DFF";
        case "green":
          return "#03D6B6";
        case "red":
          return "#F25195"
        default:
          return "#000"
      }
    }

    return {
      actions,
      transactionItems,
      getIconColor
    }
  }
}
</script>

<style lang="scss">
.Cards {
  &__top {
    padding-top: 20px;
  }

  &__balance {
    color: #fff;

    button.button {
      font-weight: 600;
      border-radius: 5px !important;
      font-size: 12px;
      height: 25px;
    }

    p {
      font-weight: 500;
      font-size: 15px;
    }

    h5 {
      font-weight: 700;
      font-size: 25px;
      line-height: 26px;
    }
  }

  &__new {
    &.button.is-info {
      background-color: transparent;
      color: #21CEFD;
    }

    svg {
      fill: #21CEFD;
    }
  }

  &__tabs {
    ul {
      border-bottom: none;

      li {
        a {
          color: #9f9c9c;
          border-bottom: none;
          font-size: 15px;
        }

        &.is-active {
          font-weight: 600;
          border-bottom: 2px solid #21CEFD;

          a {
            color: #fff;
          }
        }
      }
    }
  }

  &__show {
    background-color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 3px 5px;

    .txt-show {
      font-size: 13px;
      font-weight: 500;
    }
  }

  &__card {
    background-color: $color-primary;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.15rem;
    box-shadow: none;
    font-size: 13px;

    img {
      width: 80px;
    }

    h3 {
      color: #fff;
      letter-spacing: 0.05rem;
    }

    .txt-cvv {
      font-size: 30px;
      line-height: 0;
      position: relative;
      top: 10px;
    }
  }

  &__main {
    padding: 0 20px 60px;
    margin-left: -20px;
    margin-right: -20px;
  }

  &__actions {
    background-color: #EDF3FF;
    box-shadow: none;
    margin-left: -20px;
    margin-top: -0.75rem;
    margin-right: -20px;
  }

  &__view-all {
    font-weight: 500;
    background-color: #EDFFF6;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  @media screen and (min-width: $desktop-bp) {
    &__balance {
      color: #000;

      p {
        font-weight: 400;
      }
    }

    &__new {
      &.button.is-info {
        background-color: $color-tertiary;
        color: #fff;

        svg {
          fill: #fff;
        }
      }
    }

    &__tabs {
      ul {
        li {
          &.is-active {
            a {
              color: #000;
            }
          }
        }
      }
    }

    &__main-left {
      .txt-show {
        font-size: 14px;
        font-weight: 700;
      }
    }

    &__card {
      font-size: 16px;
    }

    &__main {
      padding: 3rem;
      margin-left: 0;
      margin-right: 0;
    }

    &__main-right {
      padding-left: 3rem;
    }

    &__actions {
      margin: 0;
    }
  }
}
</style>

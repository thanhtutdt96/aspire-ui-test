<template>
  <div class="transaction-item">
    <Columns custom-class="is-mobile">
      <Column>
        <div :style="{backgroundColor: getIconBackground(iconType)}"
             class="transaction-item__icon is-flex is-justify-content-center is-align-items-center">
          <slot name="icon"></slot>
        </div>
      </Column>
      <Column custom-class="is-half px-0">
        <div class="transaction-item__content">
          <slot name="content"></slot>
        </div>
      </Column>
      <Column custom-class="is-one-third">
        <div class="transaction-item__price is-flex is-align-items-center">
          <slot name="price"></slot>
        </div>
      </Column>
    </Columns>
  </div>
</template>
<script>
import Column from "@/components/elements/Column";
import Columns from "@/components/elements/Columns";

export default {
  components: {
    Column,
    Columns
  },
  props: {
    iconType: {
      type: String
    }
  },
  setup() {
    const getIconBackground = (type) => {
      switch (type) {
        case "blue":
          return "#E5F5FF";
        case "green":
          return "#E4FBF7";
        case "red":
          return "#FEEDF4"
      }
    }

    return {
      getIconBackground
    }
  }
}
</script>
<style lang="scss">
.transaction-item {
  padding-top: 20px;
  padding-bottom: 20px;

  &:not(:nth-child(4)) {
    border-bottom: 1px solid #eeeeee;
  }

  &__icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #E5F5FF;
  }

  &__action {
    width: 25px;
    height: 20px;
    border-radius: 10px;
    background-color: $color-tertiary;
    padding: 5px;
  }

  &__content {
    h6.title {
      font-size: 16px;
    }

    p {
      font-size: 14px;
      color: #a5a4a4;
    }

    span {
      color: $color-tertiary;
      font-weight: 500 !important;
      font-size: 12px;
    }
  }

  &__price {
    font-size: 14px;
    font-weight: 600;
  }

  @media screen and (min-width: $desktop-bp) {
    &__content {
      h6.title {
        font-size: 16px;
      }

      p {
        font-size: 15px;
      }

      span {

        font-size: 14px;
      }
    }

    &__action {
      width: 30px;
      height: 25px;
      border-radius: 20px;
    }

    &__price {
      font-size: 16px;
    }
  }
}
</style>

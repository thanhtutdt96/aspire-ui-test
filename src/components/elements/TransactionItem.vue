<template>
  <div class="transaction-item">
    <Columns>
      <Column>
        <div :style="{backgroundColor: getIconBackground(iconType)}" class="transaction-item__icon is-flex is-justify-content-center is-align-items-center">
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
    width: 30px;
    height: 25px;
    border-radius: 20px;
    background-color: $color-tertiary;
    padding: 5px;
  }

  &__content {
    h6.title {
      font-size: 18px;
    }

    p {
      font-size: 16px;
      color: #a5a4a4;
    }

    span {
      color: $color-tertiary;
      font-weight: 500 !important;
      font-size: 14px;
    }
  }

  &__price {
    font-size: 18px;
    font-weight: 600;
  }
}
</style>

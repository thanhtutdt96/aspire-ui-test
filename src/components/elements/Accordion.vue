<template>
  <div class="Cards__accordion Cards__accordion--first">
    <article class="message p-0 mb-0">
      <a class="text-decoration-none Cards__accordion-header is-active" :href="`#card-details-${index}`" data-action="collapse">
        <div class="message-header box m-0 is-justify-content-flex-start">
          <slot name="header"></slot>
        </div>
      </a>
      <div :id="`card-details-${index}`" class="message-body is-collapsible is-active" data-parent="accordion_first">
        <div class="message-body-content">
          <slot name="content"></slot>
        </div>
      </div>
    </article>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  props: ["index"]
}
</script>

<style lang="scss" scoped>
.Cards {
  &__accordion {
    &--first {
      margin-top: 42px;
    }

    .message-header {
      border-radius: 10px;
      background-color: #F6F9FF;
      padding: 25px;
      color: #0F3A5D;
      font-size: 18px;
      font-weight: 400;
    }

    .message-body {
      background-color: #fff;
      box-shadow: none;
      border-top: 0;

      &.is-collapsible {
        &.is-active {
          border: 1px solid #efefef;
        }
      }
    }
  }

  &__accordion-header {
    &.is-active {
      .message-header {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
}
</style>

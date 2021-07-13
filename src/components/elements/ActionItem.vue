<template>
  <div class="is-flex is-flex-direction-column action-item is-align-items-center">
    <div class="action-item__icon is-flex is-justify-content-center is-align-items-center">
      <slot name="icon"></slot>
    </div>
    <span class="action-item__name mt-3">
      <slot name="name"></slot>
    </span>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.action-item {
  &__icon {
    background-color: $color-tertiary;
    border-radius: 50%;
    padding: 10px;
    width: 40px;
    height: 40px;
  }

  &__name {
    text-align: center;
    color: #0F3A5D;
  }
}
</style>

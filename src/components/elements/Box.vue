<template>
  <div class="box" :class="customClass" >
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    customClass: {
      type: String,
      default: '' // is-medium, is-large
    },
  }
}
</script>

<style lang="scss" scoped>

</style>

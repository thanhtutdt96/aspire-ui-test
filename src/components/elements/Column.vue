<template>
  <div class="column" :class="renderClass" >
    <slot></slot>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    customClass: {
      type: String,
      default: '' // is-medium, is-large
    },
  },
  setup (props) {
    const _renderClass = ref(props.customClass)
    const renderClass = _renderClass.value

    return {
      renderClass
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
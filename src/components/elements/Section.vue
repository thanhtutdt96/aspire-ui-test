<template>
  <section class="section" :class="renderClass" >
     <slot></slot>
  </section>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    customClass: {
      type: String,
      default: '' // is-medium, is-large
    },
    sizes: {
      type: String,
      default: '' // is-medium, is-large
    }
  },
  setup (props) {
    const renderClass = ref(props.customClass + ' ' + props.sizes + '')
    return {
      renderClass
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
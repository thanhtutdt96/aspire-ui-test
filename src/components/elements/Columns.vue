<template>
  <div class="columns" :class="renderClass" >
    <slot></slot>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  props: {
    customClass: {
      type: String,
      default: '' // is-medium, is-large
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    isMultiline: {
      type: Boolean,
      default: false
    },
    gapless:  {
      type: Boolean,
      default: false
    },
  },
  setup (props) {
    const customClass = ref(props.customClass)
    const isMobile = ref(props.isMobile)
    const isMultiline = ref(props.isMultiline)
    const isGapless = ref(props.gapless)

    const renderClass = computed(() => {

      let _mobile = isMobile.value ? ' is-mobile ' : ''
      let _multiline = isMultiline.value  ? ' is-multiline ' : ''
      let _gapless = isGapless.value  ? ' is-gapless ' : ''

      return _mobile + _multiline + _gapless + customClass.value
    });

    return {
      renderClass
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <div class="dropdown is-active" :class="renderClass">
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import {ref} from "vue";

export default {
  name: "Dropdown",
  props: {
    customClass: {
      type: String,
      default: ''
    },
    isRight: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const renderClass = ref(props.customClass + ' ' + (props.isRight === true ? 'is-right' : ''))
    return {
      renderClass
    }
  }
}
</script>

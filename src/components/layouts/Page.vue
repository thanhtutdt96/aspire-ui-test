<template>
  <div class="Page container is-fluid p-6">
    <div class="columns">
      <div class="column">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted} from "vue";
import bulmaCollapsible from "@creativebulma/bulma-collapsible";

export default {
  setup() {
    onMounted(() => {
      bulmaCollapsible.attach('.is-collapsible');
    })

  }
}
</script>

<style lang="scss" scoped>
.Page {

}
</style>

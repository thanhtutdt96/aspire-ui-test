<template>
  <div class="Page container" :class="routeName">
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
import {useRoute} from "vue-router";

export default {
  setup() {
    const route = useRoute()

    onMounted(() => {
      bulmaCollapsible.attach('.is-collapsible');
    })

    return {
      routeName: route.name
    }
  }
}
</script>

<style lang="scss" scoped>
.Page {
  padding: 20px;

  &.cards {
    background-color: $color-secondary;
  }

  @media screen and (min-width: 768px) {
    padding: 3rem;
    background-color: unset;

    &.cards {
      background-color:  unset;
    }
  }
}
</style>

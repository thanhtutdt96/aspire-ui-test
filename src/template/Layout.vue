<template>
  <div class="layout is-relative">
    <nav-app/>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavApp from "@/components/general/NavApp"

export default {
  components: {
    NavApp,
  },
  setup() {

  }
}
</script>
<style lang="scss" scoped>
  @media screen and (min-width: $desktop-bp) {
    .layout {
      padding-left: 350px;
    }
  }
</style>

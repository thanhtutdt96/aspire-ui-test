<template>
  <div class="navapp">
    <div
        class="navapp__wrap my-5 pt-5 is-flex is-flex-direction-column">
      <div class="navapp__top">
        <router-link to="/">
          <img src="@/assets/images/logo.png" alt="Logo">
        </router-link>
        <div class="navapp__description mt-3">
          Trusted way of banking for 3000+ SMEs and startups in Singapore
        </div>
      </div>
      <div class="navapp__middle">
        <div v-for="item in navlist" :key="item.id">
        <router-link class="is-flex is-align-items-center py-5" :to="item.slug" :title="item.name">
          <unicon :name="item.icon" fill="#fff"></unicon>
          <span class="ml-3">{{item.name}}</span>
        </router-link>
        </div>
      </div>
      <!--- content -->

    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "NavApp",
  components: {},
  setup() {

    const navlist = ref([
      {id: 0, name: 'Home', slug: '/', icon: 'estate'},
      {id: 1, name: 'Cards', slug: '/cards', icon: 'credit-card'},
      {id: 2, name: 'Repayments', slug: '/repayments', icon: 'bill'},
      {id: 3, name: 'Credit', slug: '/credit', icon: 'arrow-circle-up'},
      {id: 4, name: 'Settings', slug: '/settings', icon: 'setting'},
    ]);

    return {
      navlist,
    }
  }
}
</script>


<style lang="scss">
.navapp {
  width: 350px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  overflow: hidden;
  padding-left: 30px;
  padding-right: 30px;
  background-color: $color-secondary;

  &__wrap {
    min-height: 100%;

    img {
      width: 130px;
    }
  }

  &__description {
    color: #4B6C86;
    font-size: 15px;
    line-height: 20px;
  }

  &__middle {
    margin-top: 100px;

    a {
      font-size: 18px;

      &.router-link-exact-active,
      &:hover,
      &:focus,
      &:active {
        span {
          font-weight: bold;
          color: $color-primary;
        }

        .unicon {
          svg {
            fill: $color-primary;
          }
        }
      }

      span {
        color: #fff;
      }
    }
  }
}
</style>

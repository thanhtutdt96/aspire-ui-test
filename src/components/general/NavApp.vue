<template>
  <div class="navapp">
    <div
        class="navapp__wrap is-flex">
      <div class="navapp__top">
        <router-link to="/">
          <img src="@/assets/images/logo.png" alt="Logo">
        </router-link>
        <div class="navapp__description mt-3">
          Trusted way of banking for 3000+ SMEs and startups in Singapore
        </div>
      </div>
      <div class="navapp__middle is-flex">
        <div v-for="item in navlist" :key="item.id">
          <router-link class="is-flex is-align-items-center" :to="item.slug" :title="item.name">
            <unicon :name="item.icon" fill="#fff"></unicon>
            <span>{{ item.name }}</span>
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
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
  overflow: hidden;
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
  height: 60px;
  box-shadow: 0 -5px 5px -5px #d6d4d4;
  display: flex;
  align-items: center;
  background-color: #fff;

  &__top {
    display: none;
  }

  &__wrap {
    flex-direction: row;
    width: 100%;
  }

  &__description {
    color: #4B6C86;
    font-size: 15px;
    line-height: 20px;
  }

  &__middle {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    a {
      font-size: 13px;
      flex-direction: column;

      .unicon {
        svg {
          fill: #ddd;
        }
      }

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
        color: #ddd;
      }
    }
  }

  @media screen and (min-width: $desktop-bp) {
    width: 350px;
    height: 100vh;
    top: 0;
    background-color: $color-secondary;
    box-shadow: none;

    &__top {
      display: block;
    }

    &__wrap {
      min-height: 100%;
      flex-direction: column;
      padding-top: 1.5rem;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;

      img {
        width: 130px;
      }
    }

    &__middle {
      margin-top: 100px;
      flex-direction: column;

      a {
        font-size: 18px;
        flex-direction: row;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;

        .unicon {
          svg {
            fill: #fff;
          }
        }
        span {
          color: #fff;
          margin-left: 0.75rem;
        }
      }
    }
  }
}
</style>

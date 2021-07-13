<template>
  <div class="Auth hero is-fullheight">
    <div class="columns is-align-items-stretch hero-body p-0 m-0">
      <div class="column p-0 is-half-tablet Auth__left is-hidden-mobile"
           :style="{backgroundImage: `url(${require(`@/assets/images/hero-banner.svg`)})`}">
      </div>
      <div class="Auth__right column is-flex is-align-items-center is-justify-content-center is-half-tablet p-6">
        <div class="Auth__wrapper">
          <h2 class="title is-2">Aspire 1.0</h2>
          <article v-if="errors" class="message is-danger">
            <div class="message-body">
              {{ errors }}
            </div>
          </article>
          <form @submit.prevent="loginHandle()">
            <div class="field mb-4">
              <p class="control has-icons-left has-icons-right">
                <input v-model="email" class="input is-large" type="email" placeholder="Email" required>
                <span class="icon is-small is-left">
                  <unicon name="envelope" fill="black"/>
              </span>
              </p>
            </div>
            <div class="field mb-5">
              <p class="control has-icons-left">
                <input v-model="password" class="input is-large" type="password" placeholder="Password" required>
                  <span class="icon is-small is-left">
                <unicon name="key-skeleton" fill="black"/>
              </span>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <button type="submit" :disabled="loading" class="button is-success is-large is-fullwidth">
                  <loader v-if="loading" :fill-color="'white'"/>
                  <span v-if="!loading">Login</span>
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineAsyncComponent, ref} from "vue";
import useAuth from "@/use/useAuth";

export default {
  components: {
    Loader: defineAsyncComponent(() => import("@/components/widgets/loader"))
  },
  setup() {
    const email = ref('')
    const password = ref('')

    const {login, errors, loading} = useAuth()

    const loginHandle = () => {
      if (!email.value || !password.value) {
        return
      }

      login(email.value, password.value)
    }

    return {
      loginHandle,
      email,
      password,
      errors,
      loading
    }
  }
}
</script>

<style lang="scss">
.Auth {
  &__left {
    background-position: center;
    background-size: cover;
  }

  form {
    width: 100%;

    .unicon {
      display: flex;
      align-items: center;
    }
  }

  &__right {
    max-width: 100%;
  }

  &__wrapper {
    width: 600px;
    max-width: 100%;
  }
}
</style>

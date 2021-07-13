<template>
  <Page>
    <h2 class="title">Welcome back, {{currentUser.name}}</h2>
    <div v-if="errors" class="is-flex mb-4">
      <article v-for="(error, index) in errors" :key="index" class="message is-danger" style="width: 100%">
        <div class="message-body">
          {{ error[0] }}
        </div>
      </article>
    </div>
    <div v-if="success" class="is-flex mb-4">
      <article class="message is-success" style="width: 100%">
        <div class="message-body">
          Success!
        </div>
      </article>
    </div>
    <Box>
      <Columns>
        <Column customClass="is-flex is-justify-content-flex-start is-flex-direction-column">
          <form @submit.prevent="loanSubmit">
            <Columns>
              <Column>
                <h4 class="title is-4">Create New Loan</h4>
              </Column>
            </Columns>
            <!-- Account Fields -->
            <Columns>
              <Column>
                <div class="field">
                  <label class="label">Amount</label>
                  <div class="control has-icons-right">
                    <input class="input pr-2 w-auto" type="number" v-model="loan.base_amount">
                  </div>
                </div>
              </Column>
            </Columns>
            <Columns>
              <Column>
                <div class="field">
                  <label class="label">Package</label>
                  <div class="control">
                    <div class="select">
                      <select v-model="loan.package_id">
                        <option v-for="item in packages" :key="item.id" :value="item.id">{{ item.description }}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </Column>
            </Columns>

            <Columns>
              <Column>
                <div class="field">
                  <label class="label">Purpose</label>
                  <div class="control has-icons-right">
                    <textarea class="textarea" placeholder="Loan purpose" v-model="loan.purpose"></textarea>
                  </div>
                </div>
              </Column>
            </Columns>

            <div class="field is-grouped mt-5">
              <div class="control">
                <button :disabled="loading" :class="{'is-loading': loading}" type="submit" class="button is-success">
                  Add
                </button>
              </div>
            </div>
          </form>
        </Column>
      </Columns>
    </Box>
  </Page>
</template>

<script>
import Page from "@/components/layouts/Page";
import Box from "@/components/elements/Box";
import Columns from "@/components/elements/Columns";
import Column from "@/components/elements/Column";
import {reactive, toRefs} from "vue";
import {useUser} from "@/use/useUser";
import usePackage from "@/use/usePackage";
import {createLoanFunc} from "@/use/useLoan";

export default {
  components: {
    Columns,
    Column,
    Box,
    Page
  },
  setup() {
    const {getPackages, packages} = usePackage()
    getPackages()

    const {currentUser, getCurrentUser} = useUser()
    getCurrentUser()

    const {createLoan, errors, loading, success} = createLoanFunc()

    const {id} = currentUser.value

    const state = reactive({
      loan: {
        user_id: id,
        package_id: 1,
        purpose: '',
        base_amount: 1000000
      }
    })

    const loanSubmit = () => {
      createLoan(state.loan)
    }

    return {
      ...toRefs(state),
      loanSubmit,
      packages,
      errors,
      loading,
      success,
      currentUser
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

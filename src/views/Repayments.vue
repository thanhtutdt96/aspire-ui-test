<template>
  <Page>
    <h2 class="title">Repayments</h2>
    <div v-if="errors" class="is-flex mb-4">
      <article class="message is-danger" style="width: 100%">
        <div class="message-body">
          {{ errors }}
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
      <p v-if="!loans || loans.length <= 0">No repayments available</p>
      <Columns>
        <Column customClass="is-flex is-justify-content-flex-start is-flex-direction-column">
          <div v-if="loans && loans.length > 0">
            <article v-for="(loan, index) in loans" :key="index" :id="`accordion_${index}`" class="message is-success">
              <a :href="`#collapse-${index}`" data-action="collapse">
                <div class="message-header">
                  <p>{{ loan.purpose }} - {{ formatVND(loan.total_amount) }}</p>
                  <unicon name="plus-circle" fill="white"/>
                </div>
              </a>
              <div :id="`collapse-${index}`" class="message-body is-collapsible"
                   :data-parent="`accordion_${index}`">
                <div class="message-body-content">
                  <table class="table is-striped is-hoverable">
                    <thead>
                    <tr>
                      <th>Amount</th>
                      <th>Nth Payment</th>
                      <th>Due Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(repayment, idx) in loan.repayments" :key="idx">
                      <td>{{ formatVND(repayment.amount) }}</td>
                      <td>{{ repayment.nth_payment }}</td>
                      <td>{{ formatDate(repayment.due_date) }}</td>
                      <td>
                        <unicon :name="repayment.status === 'unpaid' ? 'times-circle' : 'check-circle'"
                                :fill="repayment.status === 'unpaid' ? 'red' : 'green'"/>
                      </td>
                      <td><a href="#" @click.prevent="repaymentHandle(repayment.id)">Pay</a></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>
          </div>
        </Column>
      </Columns>
    </Box>
  </Page>
</template>

<script>
import Page from "@/components/layouts/Page";
import Columns from "@/components/elements/Columns";
import Column from "@/components/elements/Column";
import Box from "@/components/elements/Box";
import {getLoansFunc} from "@/use/useLoan";
import moment from "moment";
import {makeRepaymentFunc} from "@/use/useRepayment";

export default {
  components: {
    Columns,
    Column,
    Box,
    Page
  },
  setup() {
    const {getLoans, loans} = getLoansFunc()
    getLoans()

    const {makeRepayment, errors, loading, success} = makeRepaymentFunc()

    const repaymentHandle = (id) => {
      makeRepayment(id)
    }

    const formatVND = (num) => {
      return Number(num).toLocaleString() + " VND";
    }

    const formatDate = (date) => {
      return moment(String(date)).format('DD/MM/YYYY')
    }

    return {
      loans,
      formatVND,
      formatDate,
      errors,
      loading,
      success,
      repaymentHandle
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  & > a {
    text-decoration: none !important;
  }

  .message-header {
    cursor: pointer;
  }
}
</style>

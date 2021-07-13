import axiosHelper from "@/helpers/axiosHelper";
import {reactive, toRefs} from "vue";
import {getLoansFunc} from "@/use/useLoan";

export const makeRepaymentFunc = () => {
    const state = reactive({
        repayment: null,
        errors: null,
        loading: false,
        success: false
    })
    const {getLoans} = getLoansFunc()

    const makeRepayment = (repaymentId) => {
        state.loading = true

        axiosHelper().post(`/v1/make-repayment/${repaymentId}`, {payment_method: 'zalo'})
            .then(({data}) => {
                state.loading = false
                state.repayment = data.repayment
                state.success = true
                state.errors = null

                getLoans()
            })
            .catch(({response}) => {
                console.log(response)
                state.errors = response.data.message
                state.loading = false
                state.success = false
            })
    }

    return {
        ...toRefs(state),
        makeRepayment
    }
}

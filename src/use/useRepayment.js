import axiosHelper from "@/helpers/axiosHelper";
import {reactive, toRefs} from "vue";

export const makeRepaymentFunc = () => {
    const state = reactive({
        repayment: null,
        errors: null,
        loading: false,
        success: false
    })

    const makeRepayment = (repaymentId) => {
        state.loading = true

        axiosHelper().post(`/v1/make-repayment/${repaymentId}`, {payment_method: 'zalo'})
            .then(({data}) => {
                state.loading = false
                state.repayment = data.repayment
                state.success = true
                state.errors = null

                setTimeout(() => {
                    location.reload()
                }, 2000)
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

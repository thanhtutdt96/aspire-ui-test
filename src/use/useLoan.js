import axiosHelper from "@/helpers/axiosHelper";
import {reactive, toRefs} from "vue";
import router from "@/router";

export const createLoanFunc = () => {
    const state = reactive({
        loan: null,
        errors: null,
        loading: false,
        success: false
    })

    const createLoan = (loan) => {
        state.loading = true

        axiosHelper().post('/v1/loans', loan)
            .then(({data}) => {
                state.loading = false
                state.loan = data.loan
                state.success = true
                state.errors = null

                setTimeout(() => {
                    router.push("/repayments")
                }, 2000)
            })
            .catch(({response}) => {
                state.errors = response.data.errors
                state.loading = false
                state.success = false
            })
    }

    return {
        ...toRefs(state),
        createLoan
    }
}

export const getLoansFunc = () => {
    const state = reactive({
        loans: [],
        errors: null,
        loading: false,
        success: false
    })

    const getLoans = (loan) => {
        state.loading = true

        axiosHelper().get('/v1/get-loans', loan)
            .then(({data}) => {
                state.loading = false
                state.loans = data.loans
                state.success = true
                state.errors = null
            })
            .catch(({response}) => {
                state.errors = response.data.errors
                state.loading = false
                state.success = false
            })
    }

    return {
        ...toRefs(state),
        getLoans
    }
}

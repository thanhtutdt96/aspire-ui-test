import axiosHelper from "@/helpers/axiosHelper";
import {reactive, toRefs} from "vue";

export default function () {
    const state = reactive({
        packages: [],
        errors: null,
        loading: false,
        success: false
    })

    const getPackages = () => {
        state.loading = true

        axiosHelper().get('/v1/packages')
            .then(({data}) => {
                state.loading = false
                state.packages = data.packages
                state.success = true
            })
            .catch(({response}) => {
                state.errors = response.data.message
                state.loading = false
                state.success = false
            })
    }

    return {
        ...toRefs(state),
        getPackages
    }
}

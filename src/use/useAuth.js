import axiosHelper from "@/helpers/axiosHelper";
import {computed, reactive, ref, toRefs} from "vue";
import router from "@/router";
import {useUser} from "@/use/useUser";

export default function () {
    const {setCurrentUser} = useUser()

    const state = reactive({
        result: null,
        errors: null,
        loading: false
    })

    const _isAuthenticated = ref(false)

    const setToken = (token) => {
        localStorage.setItem('token', token);
    }

    const getToken = () => {
        return localStorage.getItem('token');
    }

    const clearToken = () => {
        localStorage.removeItem('token');
    }

    const setAuthenticated = () => {
        _isAuthenticated.value = !!getToken()
    }

    const login = (email, password) => {
        state.loading = true

        axiosHelper().post('/login', {email, password})
            .then(({data}) => {
                // state.result = response.data
                state.loading = false

                setToken(data.data.token)
                setAuthenticated()
                setCurrentUser(data.data.user)

                router.push('/')
            }).catch(({response}) => {
                state.errors = response.data.message
                state.loading = false
        })
    }

    return {
        ...toRefs(state),
        login,
        setAuthenticated,
        clearToken,
        isAuthenticated: computed(() => _isAuthenticated.value),
    }
}

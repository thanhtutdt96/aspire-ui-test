import {reactive, toRefs} from "vue";

const userStates = reactive({
    currentUser: null,
})

export function useUser() {
    const setCurrentUser = (user) => {
        userStates.currentUser = {...user}
        localStorage.setItem('current_user', JSON.stringify({...user}))
    }

    const getCurrentUser = () => {
        userStates.currentUser = JSON.parse(localStorage.getItem('current_user'));
    }

    const clearCurrentUser = () => {
        userStates.currentUser = null
        localStorage.removeItem('token');
    }

    return {
        ...toRefs(userStates),
        setCurrentUser,
        getCurrentUser,
        clearCurrentUser
    }
}

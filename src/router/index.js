import {createRouter, createWebHistory} from 'vue-router'
import useAuth from "@/use/useAuth";

const loadView = view => () => import(`@/views/${view}.vue`)
const loadTemplate = view => () => import(`@/template/${view}.vue`)
// const lazyLoadComp = view => () => import(`@/components/${view}.vue`)

const routes = [
    {
        path: '/',
        name: 'master',
        component: loadTemplate('Layout'),
        redirect: 'home',
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: '',
                name: 'home',
                component: loadView('Home'),
                meta: {
                    requiresAuth: true,
                }
            },
            {
                path: '/cards',
                name: 'cards',
                component: loadView('Cards'),
                meta: {requiresAuth: true},
            },
            {
                path: '/repayments',
                name: 'repayments',
                component: loadView('Repayments'),
                meta: {requiresAuth: true},
            },
            {
                path: '/credit',
                name: 'credit',
                component: loadView('Credit'),
                meta: {requiresAuth: true},
            },
            {
                path: '/settings',
                name: 'settings',
                component: loadView('Settings'),
                meta: {requiresAuth: true},
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: loadView('Login')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    // Check if the user is logged in
    const {setAuthenticated, isAuthenticated} = useAuth()
    setAuthenticated()

    // Redirect to home if authenticated user try to visit login
    if (isAuthenticated.value && to.path === '/login') {
        next({
            path: '/'
        })
    }

    // Check if user is authenticated
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isAuthenticated.value) {
            next({
                path: '/login',
            })
        } else {
            next()
        }
    } else {
        next()
    }
})


export default router

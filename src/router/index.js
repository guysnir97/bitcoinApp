import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import ContactPage from '../views/ContactPage';
import DetailsPage from '../views/DetailsPage';
import SignupPage from '../views/SignupPage'
import EditPage from '../views/EditPage';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage
    },
    {
        path: '/contact/edit/:contactId?',
        name: 'EditPage',
        component: EditPage
    },
    {
        path: '/contact/:contactId',
        name: 'DetailsPage',
        component: DetailsPage
    },
    {
        path: '/user',
        name: 'SignupPage',
        component: SignupPage
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
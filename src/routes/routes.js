import Vue from 'vue';
import Router from 'vue-router';
import StatScorePage from '../components/StatScorePage/StatScorePage';
import HomePage from '../components/HomePage/HomePage'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },        
        {
        path: '/statscore',
        name: 'Stat Score',
        component: StatScorePage
    },
]
});
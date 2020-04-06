import Vue from 'vue';
import Router from 'vue-router';
import ArmorScorePage from '../components/ArmorScorePage/ArmorScorePage';
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
        path: '/armorScore',
        name: 'Armor Calculator',
        component: ArmorScorePage
    },
]
});
import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Products from '@/components/products/Product';
import ProductCreate from '@/components/products/Create';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/products',
            name: 'productsIndex',
            component: Products
        },
        {
            path: '/products/create',
            name: 'productsCreate',
            component: ProductCreate
        },
    ],
})
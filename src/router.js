import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Products from '@/components/products/Product';
import ProductCreate from '@/components/products/Create';
import ProductEdit from '@/components/products/Edit';
import Categories from '@/components/categories/CategoryListComponent';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
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
        {
            path: '/products/:slug/edit',
            name: 'productsEdit',
            component: ProductEdit
        },
        {
            path: '/categories',
            name: 'categoriesIndex',
            component: Categories
        }
    ],
})
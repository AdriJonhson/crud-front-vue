import axios from 'axios'
import { BASE_URL } from '../../../configs/config'

const RESOURCE = 'products/'

export default{
    /* eslint-disable */
    loadProducts(context){
        return axios.get(`${BASE_URL}${RESOURCE}`).then(response => {
            context.commit('PRODUCTS_LOAD', response.data.products);
        }).catch(error => {
            console.log(error)
        });
    },

    destroyProduct(context, product){
        return new Promise((resolve, reject) => {
            axios.delete(`${BASE_URL}${RESOURCE}${product.slug}/delete`)
                .then(response => resolve())
                .catch(error => reject(error.response.data))
            // .finally(() => context.commit('LOADING', false))
        })
    }


}

import { http } from './config';

export default {

    list:() => {
        return http.get('products');
    },

    /* eslint-disable */
    save:(product)=> {
        return http.post('products/store', product)
    }

}
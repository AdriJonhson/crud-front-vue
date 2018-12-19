import { http } from './config';

export default {

    list:() => {
        return http.get('products');
    },

    /* eslint-disable */
    save:(product)  => {
        return http.post('products/store', product)
    },

    edit:(slug) => {
        return http.get('products/' + slug)
    },

    update:(slug, product) => {
        return http.put('products/'+slug+'/edit', product)
    }

}
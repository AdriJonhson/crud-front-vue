import { http } from './config';

export default {

    list:() => {
        return http.get('categories');
    },

    save: (category) => {
        return http.post('categories/store', category);
    },

    show: (slug) => {
        return http.get('categories/'+slug)
    },

    destroy: (slug) => {
        return http.delete('categories/'+slug+'/delete')
    }

}
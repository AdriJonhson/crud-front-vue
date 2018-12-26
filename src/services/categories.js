import { http } from './config';

export default {

    list:() => {
        return http.get('categories');
    },

    save: (category) => {
        return http.post('categories/store', category);
    }

}
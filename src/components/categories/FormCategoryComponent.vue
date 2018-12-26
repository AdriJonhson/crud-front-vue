<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div class="row">
                <div class="input-field col s12">
                    <input id="name" type="text" class="validate" v-model="category.title">
                    <label for="name">Título</label>
                </div>
            </div>
            <button class="btn waves-effect waves-light green" type="submit">Salvar
                <i class="material-icons left">send</i>
            </button>
        </form>
    </div>
</template>

<script>
    /* eslint-disable */
    import Category from '../../services/categories'

    export default {
        name: 'form-category',
        props: {
            update: {
                require: false,
                type: Boolean,
                default: false
            },
            category: {
                require: false,
                type: Object,
                default: () => {
                    return {
                        title: '',
                        slug: ''
                    }
                }
            }
        },

        methods: {
            onSubmit() {
                const action =  this.update ? 'update' : 'create';

                if(action == 'create'){
                    Category.save(this.category).then(response => {
                        this.$snotify.success('Dados atualizados com sucesso', 'OK')
                        this.$router.push({name: 'categoriesIndex'})
                    }).catch(error => {
                        console.log(error)
                    })
                }
            }
        }
    }
</script>

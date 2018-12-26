<template>
    <div>
        <div class="container">
            <h4>Categorias</h4>

            <div class="preloader-wrapper big active loader" v-if="loadData">
                <div class="spinner-layer spinner-blue-only">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div><div class="gap-patch">
                    <div class="circle"></div>
                </div><div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
                </div>
            </div>
        </div>

        <div class="container" v-if="!loadData">
            <table class="highlight responsive">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Editar</th>
                    <th>Excluir</th>
                </tr>
                </thead>

                <tbody>
                    <tr v-for="category of categories" :key="category.id">
                        <td>{{ category.title }}</td>
                        <td>
                            <a  href="#modal1" class="waves-effect btn-small blue darken-1">
                                <i class="material-icons left">create</i>
                            </a>
                        </td>
                        <td>
                            <a class="waves-effect btn-small red darken-1 modal-trigger" href="#modal1"><i class="material-icons left">delete_sweep</i></a>
                        </td>
                    </tr>
                </tbody>

                <tfoot>
                <tr>
                    <td colspan="6">
                        <a  class="waves-effect btn-small blue darken-1" @click.prevent="create()">
                            <i class="material-icons left">add</i>
                            Cadastrar Categoria
                        </a>
                    </td>
                </tr>
                </tfoot>
            </table>

            <vodal :show="showModal" animation="rotate" @hide="hide" :height="200">
                <div>
                    <form-category></form-category>
                </div>
            </vodal>
        </div>
    </div>
</template>

<script>
    import Categories from '../../services/categories'
    import FormCategory from './FormCategoryComponent'

    export default {
        name: 'CategoryListComponent',
        components: {FormCategory},
        data(){
            return {
                categories: [],
                loader: {
                    loadProducts: false
                },
                showModal: false
            }
        },

        computed: {
            loadData(){
                return this.loader.loadProducts;
            }
        },

        mounted(){
            /* eslint-disable */
            this.loader.loadProducts = true;
            Categories.list().then(response => {
                this.categories = response.data.categories;
            }).finally(() => {
                this.loader.loadProducts = false;
            });
        },

        methods: {
            create(){
                this.showModal = true;
            },

            hide(){
                this.showModal = false;
            }
        }
    }
</script>

<style scoped>
    .loader {
        position: absolute;
        top :0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
</style>
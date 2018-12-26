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
                            <router-link :to="{name: 'productsEdit', params: {slug: category.slug}}" class="waves-effect btn-small blue darken-1">
                                <i class="material-icons left">create</i>
                            </router-link>
                        </td>
                        <td>
                            <a class="waves-effect btn-small red darken-1 modal-trigger" href="#modal1"><i class="material-icons left">delete_sweep</i></a>
                        </td>
                    </tr>
                </tbody>

                <tfoot>
                <tr>
                    <td colspan="6">
                        <router-link :to="{name: 'productsCreate'}" class="waves-effect btn-small blue darken-1">
                            <i class="material-icons left">add</i>
                            Cadastrar Categoria
                        </router-link>
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
    </div>
</template>

<script>
    import Categories from '../../services/categories'

    export default {
        name: 'CategoryListComponent',

        data(){
            return {
                categories: [],
                loader: {
                    loadProducts: false
                }
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
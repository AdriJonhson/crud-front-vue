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
                            <a class="waves-effect btn-small blue darken-1" @click.prevent="edit(category.slug)">
                                <i class="material-icons left">create</i>
                            </a>
                        </td>
                        <td>
                            <a class="waves-effect btn-small red darken-1 modal-trigger" @click.prevent="confirmDelete(category.title, category.slug)"><i class="material-icons left">delete_sweep</i></a>
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

            <vodal :show="showModal" animation="zoom" @hide="hide" :height="200">
                <div>
                    <form-category :update="update" :category="category" @success="success"></form-category>
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
                showModal: false,
                update: false,
                category: {
                    slug: ''
                }
            }
        },

        computed: {
            loadData(){
                return this.loader.loadProducts
            }
        },

        mounted(){
            /* eslint-disable */
            this.loader.loadProducts = true;
            Categories.list().then(response => {
                this.categories = response.data.categories
            }).finally(() => {
                this.loader.loadProducts = false
            });
        },

        methods: {
            create(){
                this.showModal = true
            },

            hide(){
                this.showModal = false
            },

            success(){
                this.hide()
            },

            edit(slug){
                this.update = true;
                this.category.slug = slug
                this.showModal = true;
            },

            confirmDelete(categoryName, categorySlug){
                // this.$snotify.error(`Deseja realmente deletar a categoria: ${categoryName}`, {
                //     timeout: 10000,
                //     showProgressBar: true,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     buttons: [
                //         {text: 'Não', action: () => console.log('Clicked: No')},
                //         {text: 'Sim', action: () => this.destroy(categorySlug), bold: false},
                //     ]
                // })

                this.$snotify.error(`Deseja realmente deletar o produto: ${categoryName}`, categoryName, {
                    timeout: 10000,
                    showProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    buttons: [
                        {text: 'Não', action: () => console.log('Clicked: No')},
                        {text: 'Sim', action: () => this.destroy(), bold: false},
                    ]
                })
            },

            destroy(slug){
                Categories.destroy(slug).then(response => {
                    this.$snotify.success('Categoria removida com sucesso', 'OK')
                    // this.$router.push({name: 'categoriesIndex'})
                }).catch(error => {
                    this.$snotify.error('Algo deu errado...')
                    this.$router.push({name: 'categoriesIndex'})
                });
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
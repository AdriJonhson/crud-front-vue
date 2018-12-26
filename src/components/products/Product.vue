<template>

    <div>
        <alert></alert>
        <div class="container">
            <h4>Produtos</h4>
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

        <div class="container">
            <table class="highlight responsive" v-if="!loadData">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Editar</th>
                    <th>Excluir</th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="product of products" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td>{{ product.category }}</td>
                    <td>R$ {{ product.price | moneyFormat}}</td>
                    <td>{{ product.quantity }}</td>
                    <td>
                        <!--<a class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></a>-->
                        <router-link :to="{name: 'productsEdit', params: {slug: product.slug}}" class="waves-effect btn-small blue darken-1">
                            <i class="material-icons left">create</i>
                        </router-link>
                    </td>
                    <td><a class="waves-effect btn-small red darken-1 modal-trigger" href="#modal1"><i class="material-icons left">delete_sweep</i></a></td>
                </tr>
                </tbody>

                <tfoot>
                <tr>
                    <td colspan="6">
                        <router-link :to="{name: 'productsCreate'}" class="waves-effect btn-small blue darken-1">
                            <i class="material-icons left">add</i>
                            Cadastrar Produto
                        </router-link>
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
        <!--<div id="modal1" class="modal">-->
            <!--<div class="modal-content">-->
                <!--<h4>Modal Header</h4>-->
                <!--<p>A bunch of text</p>-->
            <!--</div>-->
            <!--<div class="modal-footer">-->
                <!--<a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    /* eslint-disable */
    import Products from '../../services/products';
    import alert from '../util/Alert';

    export default {
        props: ['message'],

        name: 'ProductsIndex',

        components: {alert},

        mounted(){
            this.loader.loadProducts = true;
            Products.list().then(response => {
                this.products = response.data.products;
            }).finally(() => {
                this.loader.loadProducts = false;
            });
        },

        computed: {
            loadData(){
                return this.loader.loadProducts;
            }
        },

        data(){
            return {
                products: [],
                loader: {
                    loadProducts: false
                }
            }
        },

        filters: {
            moneyFormat: function(value){
                let val = (value/1).toFixed(2).replace('.', ',');
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
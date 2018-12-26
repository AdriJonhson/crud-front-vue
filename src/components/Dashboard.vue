<template>
    <div class="container">
        <h4>Dashboard</h4>
        <div class="row">
            <div class="col s12 m6">
                <div class="card horizontal darken-1">
                    <div class="card-image">
                        <i class="large material-icons">announcement</i>
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <p>{{ countProducts }}</p>
                        </div>
                        <div class="card-action white-text">
                            <a href="#">Produtos</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col s12 m6">
                <div class="card horizontal">
                    <div class="card-image">
                        <i class="large material-icons">announcement</i>
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <p>{{ countCategories }}</p>
                        </div>
                        <div class="card-action">
                            <a href="#">Categorias</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import Category from '../services/categories'
    import Product from '../services/products'

    export default {

        mounted(){
            Product.list().then(response => {
                this.countProducts = response.data.products.length
            });

            Category.list().then(response => {
               this.countCategories = response.data.categories.length
            });
        },

        data(){
            return {
                countProducts: 0,
                countCategories: 0
            };
        }


    }
</script>
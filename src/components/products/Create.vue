<template>
    <div>
        <div class="container">
            <h4>Novo Produto</h4>

            <!--<p v-if="this.errors">-->
                <!--<ul>-->
                    <!--<li v-for="error of errors">-->
                        <!--{{ error.name }}-->
                    <!--</li>-->
                <!--</ul>-->
            <!--</p>-->

            <div class="row">
                <form class="col s12" @submit.prevent="saveProduct()">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="name" type="text" class="validate" v-model="product.name">
                            <label for="name">Nome</label>
                            <!--<span class="helper-text" data-error="wrong">Nome Obrigatório</span>-->
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input type="number" id="price" class="validate" v-model="product.price">
                            <label for="price">Preço</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input type="number" min="1" id="quantity" class="validate" v-model="product.quantity">
                            <label for="quantity">Quantidade</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12">
                            <select id="category" class="browser-default" v-model="product.category_id">
                                <option value="" disabled selected>Selecione a categoria</option>
                                <option v-for="category of categories" :key="category.id" :value="category.id">{{ category.title }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s6">
                            <a href="javascript:history.go(-1)" class="btn waves-effect waves-light blue" name="action">Voltar
                                <i class="material-icons left">arrow_back</i>
                            </a>
                            &nbsp;
                            <button class="btn waves-effect waves-light green" type="submit">Salvar
                                <i class="material-icons left">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable */
    import Products from '../../services/products';
    import Categories from '../../services/categories';

    export default {

        name: "ProductCreate",

        mounted(){
            Categories.list().then(response => {
                this.categories = response.data.categories;
            });
        },

        data(){
            return {
                product: {
                    name: '',
                    price: '',
                    quantity: '',
                    category_id: '',
                },

                categories: [],
                errorsValidate: [],
            }
        },

        methods: {
            saveProduct(){
                Products.save(this.product).then(response => {
                    // M.toast({html: 'Produto registrado com sucesso', classes: 'rounded'})
                    this.$snotify.success('Produto registrado com sucesso', 'OK')
                    this.$router.push({ name: 'productsIndex' });
                }).catch(error => {
                    this.errorsValidate.push(error.response.data);
                });
                // console.log(this.errorsValidate.data);
            },
        },
    }
</script>

<style scoped>

</style>
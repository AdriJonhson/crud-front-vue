<template>
    <div>
        <div class="container">
            <h4>Edição produto</h4>
            <form @submit.prevent="updateProduct()">
                <div class="row">
                    <div class="input-field col s12">
                        <input id="name" type="text" class="validate" v-model="product.name">
                        <label class="active" for="name">Nome</label>
                        <!--<span class="helper-text" data-error="wrong">Nome Obrigatório</span>-->
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" id="price" class="validate" v-model="product.price">
                        <label class="active" for="price">Preço</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="number" min="1" id="quantity" class="validate" v-model="product.quantity">
                        <label class="active" for="quantity">Quantidade</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12">
                        <select id="category" class="browser-default" v-model="product.category_id">
                            <option value="">Selecione a categoria</option>
                            <option
                                    v-for="category of categories"
                                    :key="category.id"
                                    :value="category.id">
                                {{ category.title }}
                            </option>
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
</template>

<script>
    /* eslint-disable */
    import Products from '../../services/products';
    import Categories from '../../services/categories';

    export default {
        name: "productsEdit",

        beforeCreate(){
            Products.edit(this.$route.params.slug).then(response => {
                this.product = response.data.product[0];
            });

            Categories.list().then(response => {
                this.categories = response.data.categories;
            });
        },

        data(){
            return {
                product: '',

                categories: [],
                errorsValidate: [],
            }
        },

        methods:{
            updateProduct(){
                Products.update(this.$route.params.slug, this.product).then(response => {
                    // M.toast({html: 'Dados atualizados com sucesso', classes: 'rounded'})
                    this.$snotify.success('Dados atualizados com sucesso', 'OK')
                    this.$router.push({ name: 'productsIndex' });
                }).catch(e => {
                    console.log(e);
                });
            }
        }
    }
</script>

<style scoped>

</style>
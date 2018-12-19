<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        name: 'FormData'
    }
</script>

<style scoped>

</style>
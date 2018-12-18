<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue darken-1">
        <ul class="left hide-on-med-and-down">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Categorias</a></li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <table>
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
            <td><a class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></a></td>
            <td><a class="waves-effect btn-small red darken-1 red"><i class="material-icons left">delete_sweep</i></a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
    import Products from './services/products';

    export default {

        mounted(){
            Products.list().then(response => {
                this.products = response.data.products;
            });
        },

        data(){
            return {
                products: []
            }
        },

        filters: {
            moneyFormat: function(value){
                let val = (value/1).toFixed(2).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        }

    }
</script>

<style>
</style>

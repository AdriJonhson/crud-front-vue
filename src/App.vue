<template>
  <div>
    <nav>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <div class="nav-wrapper blue darken-1">
        <ul class="left hide-on-med-and-down">
          <li>
              <router-link :to="{name: 'dashboard'}">Dashboard</router-link>
          </li>
          <li>
              <router-link :to="{name: 'productsIndex'}">Produtos</router-link>
          </li>
          <li><a href="#">Categorias</a></li>
        </ul>
      </div>
    </nav>

    <router-view></router-view>

  </div>
</template>

<script>
    export default{
        name: 'App',
    }
</script>

<style>
</style>

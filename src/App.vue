<template>
  <div>
    <nav>
      <div class="nav-wrapper blue darken-1">
        <ul class="left hide-on-med-and-down">
          <li>
              <router-link :to="{name: 'dashboard'}">Dashboard</router-link>
          </li>
          <li>
              <router-link :to="{name: 'productsIndex'}">Produtos</router-link>
          </li>
          <li>
              <router-link :to="{name: 'categoriesIndex'}">Categorias</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <vue-snotify></vue-snotify>

    <router-view></router-view>
  </div>

</template>

<script>
    export default{
        name: 'App'
    }
</script>

<style>
  @import "~vue-snotify/styles/material.css";
</style>

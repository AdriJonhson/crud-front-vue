<template>
  <div>
    <nav>
      <div class="nav-wrapper blue darken-1">
        <ul class="left hide-on-med-and-down">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Categorias</a></li>
        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </div>

</template>

<script>
    export default{
        name: 'App'
    }
</script>

<style>
</style>

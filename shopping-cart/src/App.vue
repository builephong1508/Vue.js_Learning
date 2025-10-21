<template>
  <header>
    <TheHeader />
  </header>
  
  <main>
    <ProductList />
  </main>

  

  <footer>
    <TheFooter />
  </footer>

</template>

<script>
import ProductList from './components/ProductList.vue';
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    ProductList,
    TheFooter,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

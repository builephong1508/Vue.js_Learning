<template>
  <h1>Hello Vue CLI - Command Line Interface</h1>
  <!-- các cách gọi component lên -->
  <FirstComponent></FirstComponent>
  <!-- <first-component></first-component>
  <FirstComponent/>
  <first-component/>
  <First-Component/>
  <firstComponent/> -->
  <second-component/>
  <product-list/>
  
</template>

<script>

  import FirstComponent from './components/FirstComponent.vue';
  import SecondComponent from './components/SecondComponent.vue';
  import ProductList from './components/ProductList.vue';
  

  export default {
    name: 'App',
    components: {
      FirstComponent,
      SecondComponent,
      ProductList,
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

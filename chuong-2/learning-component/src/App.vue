<template>
  <h1>Hello Vue CLI - Command Line Interface</h1>
  <!-- các cách gọi component lên -->
  <FirstComponent></FirstComponent>
  <!-- <first-component></first-component>
  <FirstComponent/>
  <first-component/>
  <First-Component/>
  <firstComponent/> -->
  <second-component />
  <product-list />
  <GlobalComponent />
  <hr>
  <div class="container d-flex justify-content-center align-items-center flex-wrap">
    <DemoSlots class="">
      <a href="#" class="btn btn-warning">Đặt vé</a>
    </DemoSlots>
    <DemoSlots class="m-3">
      <a href="#" class="btn btn-success">Chỉnh sửa</a>
    </DemoSlots>
    <DemoSlots class="m-3">
      <a href="#" class="btn btn-info">Thông tin</a>
    </DemoSlots>
  </div>
  <hr>
  <DemoSlots2>
    <template v-slot:header>
      <p>Nội dung bên trong thẻ Header</p>
    </template>
    <template v-slot:default>
      <p>Nếu v-slot:default thì nó sẽ tự động điền vào thẻ slot</p>
    </template>
    <template v-slot:footer>
      <p>Nội dung bên trong thẻ Footer</p>
    </template>

    <template v-slot:one>
      <p>Tất cả các nội dung của section 1</p>
    </template>
    <template v-slot:two>
      <p>Tất cả các nội dung của section 1</p>
    </template>
  </DemoSlots2>
  <hr>
  <DemoDynamicComponent/>

</template>

<script>

import FirstComponent from './components/FirstComponent.vue';
import SecondComponent from './components/SecondComponent.vue';
import ProductList from './components/ProductList.vue';
import DemoSlots from './components/DemoSlots.vue';
import DemoSlots2 from './components/DemoSlots2.vue';
import DemoDynamicComponent from './components/DemoDynamicComponent.vue';

export default {
  name: 'App',
  components: {
    FirstComponent,
    SecondComponent,
    ProductList,
    DemoSlots,
    DemoSlots2,
    DemoDynamicComponent,
  },

  provide() {
    return {
      user: "Vương Lâm",
    }
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

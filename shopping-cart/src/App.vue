<template>
  <header>
    <TheHeader :cartList="cartList" @handleDeleteCartItem="handleDelete" />
  </header>

  <main>
    <ProductList @handleBuy="handleBuy" />
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
  },

  data() {
    return {
      cartList: [],
    };
  },

  methods: {
    handleBuy(productItem) {
      console.log(productItem)
      // cách cũ
      // this.cartList.push(productItem)

      // kỹ thuật spread (mới)

      // Trong Vue, React, hay các framework reactive khác:
      // Nếu mày sửa trực tiếp mảng (push, pop, …), đôi khi UI sẽ không cập nhật lại ngay.
      // Còn nếu mày tạo mảng mới (this.list = [...this.list, newItem]),
      // thì framework sẽ nhận biết có thay đổi và render lại ngay.

      // cách cũ bị tham chiếu, cách mới thì không
      // this.cartList = [...this.cartList, productItem]
      const index = this.cartList.findIndex(
        (item) => item.id === productItem.id
      )

      if(index !== -1) {
        // trả về khác -1 là có trùng (trong giỏ hàng đã có sản phẩm đó rồi)
        this.cartList[index].amount += 1
      } else {
        // nếu có thì sẽ gán thuộc tính amount mặc định là 1
        const newProductItem = {...productItem, amount : 1}
        this.cartList = [...this.cartList, newProductItem]
      }

      console.log(index)
    },

    handleDelete(item) {
      this.cartList = this.cartList.filter(
        cartItem => cartItem.id !== item.id
      );
    },
  }
}
</script>

<style>
main {
  padding-top: 80px;
  /* Tạo khoảng cách tránh bị che */
}
</style>

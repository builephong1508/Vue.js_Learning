<template>
  <div class="container my-5">
    <h2 class="text-center text-danger">Sản phẩm nổi bật</h2>
    <div class="row g-4">
      <!-- Product card -->
      <div
        v-for="(productItem, index) in productList"
        :key="index"
        class="col-sm-3"
      >
        <ProductItem :productItem="productItem" @handleBuy="handleBuy" />
      </div>
    </div>
  </div>
</template>
<script>
import ProductItem from "./ProductItem.vue";

export default {
  components: {
    ProductItem,
  },

  data() {
    return {
      productList: [
        {
          id: 1,
          name: "Chainsaw Man Vol 1",
          image: "sp1",
          price: 45000,
          description:
            "Nội dung chi tiết của truyện tranh Chainsaw Man - Tập 1.",
          sale: 5,
          quantityInStock: 50,
        },
        {
          id: 2,
          name: "Chainsaw Man Vol 2",
          image: "sp2",
          price: 45000,
          description:
            "Nội dung chi tiết của truyện tranh Chainsaw Man - Tập 2.",
          sale: 0,
          quantityInStock: 40,
        },
        {
          id: 3,
          name: "Chainsaw Man Vol 3",
          image: "sp3",
          price: 45000,
          description:
            "Nội dung chi tiết của truyện tranh Chainsaw Man - Tập 3.",
          sale: 10,
          quantityInStock: 65,
        },
        {
          id: 4,
          name: "Chainsaw Man Vol 4",
          image: "sp4",
          price: 45000,
          description:
            "Nội dung chi tiết của truyện tranh Chainsaw Man - Tập 4.",
          sale: 5,
          quantityInStock: 30,
        },
        {
          id: 5,
          name: "Chainsaw Man Vol 5",
          image: "sp5",
          price: 45000,
          description:
            "Nội dung chi tiết của truyện tranh Chainsaw Man - Tập 5.",
          sale: 0,
          quantityInStock: 15,
        },
        {
          id: 6,
          name: "Chainsaw Man Vol 6",
          image: "sp6",
          price: 45000,
          description:
            "Nội dung chi tiết của truyện tranh Chainsaw Man - Tập 6.",
          sale: 20,
          quantityInStock: 100,
        },
        {
          id: 7,
          name: "Chainsaw Man Vol 7",
          image: "sp7",
          price: 45000,
          description:
            "Nội dung chi tiết của truyện tranh Chainsaw Man - Tập 7.",
          sale: 0,
          quantityInStock: 70,
        },
        {
          id: 8,
          name: "Chainsaw Man Vol 8",
          image: "sp8",
          price: 45000,
          description:
            "Nội dung chi tiết của truyện tranh Chainsaw Man - Tập 8.",
          sale: 5,
          quantityInStock: 55,
        },

      ],
    };
  },

  methods: {
    handleBuy(productItem) {
      console.log(productItem)
      this.$emit('handleBuy', productItem)
    }
  }
};
</script>
<style></style>

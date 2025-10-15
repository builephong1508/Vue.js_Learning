<template>
  <section class="container">
    <div class="row">
      <!-- dùng object -->
       <p>{{ user }}</p>
      <div class="col-sm-3" v-for="(pItem, index) in pList" :key="index">
        <ProductItem 
          :imageObject="pItem" 
          :validatorText="'26th September, 2025'"
          @custom-handle-select="handleSelect"
          />
      </div>
    </div>
  </section>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {

  inject : ["user"],

  methods : {
    handleSelect(imageObject) {
      console.log("Nó hoạt động", imageObject)
    }
  },

  data() {
    return {
      pList: [
        {
          linkAnh:
            "https://static.beebom.com/wp-content/uploads/2025/09/Reze-with-a-flower.jpg?w=1024",
          tenAnh: "REZE - BOMB GIRL 1 ",
        },
        {
          linkAnh:
            "https://gamelade.vn/wp-content/uploads/2025/01/953336513096.jpg",
          tenAnh: "REZE - BOMB GIRL 2",
        },
        {
          linkAnh:
            "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/04/chainsaw-man-reze-arc.jpg?w=1600&h=900&fit=crop",
          tenAnh: "REZE - BOMB GIRL 3",
        },
        {
          linkAnh:
            "https://i0.wp.com/levelup.buscafs.com/2025/07/Chainsaw-Man-The-Movie-Reze-Arc-trailer-Anime-Expo-2025.jpg?fit=1920,1080&quality=75&strip=all",
          tenAnh: "REZE - BOMB GIRL 4",
        },
      ],
    };
  },

  components: {
    ProductItem,
  },
};
</script>

<style></style>

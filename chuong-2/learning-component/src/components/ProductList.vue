<template>
  <section class="container">
    <div class="row">
      <!-- Cách thứ 1 -->
      <!-- <div class="col-sm-3">
        <ProductItem
          imageUrl="https://static.beebom.com/wp-content/uploads/2025/09/Reze-with-a-flower.jpg?w=1024"
          imageName="REZE - BOMB GIRL"
        />
      </div>
      <div class="col-sm-3">
        <ProductItem
          imageUrl="https://gamelade.vn/wp-content/uploads/2025/01/953336513096.jpg"
          imageName="REZE - BOMB GIRL"
        />
      </div>
      <div class="col-sm-3">
        <ProductItem
          imageUrl="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/04/chainsaw-man-reze-arc.jpg?w=1600&h=900&fit=crop"
          imageName="REZE - BOMB GIRL"
        />
      </div>
      <div class="col-sm-3">
        <ProductItem
          imageUrl="https://i0.wp.com/levelup.buscafs.com/2025/07/Chainsaw-Man-The-Movie-Reze-Arc-trailer-Anime-Expo-2025.jpg?fit=1920,1080&quality=75&strip=all"
          imageName="REZE - BOMB GIRL"
        />
      </div> -->

      <!-- dùng object -->
      <div class="col-sm-3">
        <ProductItem
          :imageObject="p1"
        />
      </div>
      <div class="col-sm-3">
        <ProductItem
          :imageObject="p2"
        />
      </div>
      <div class="col-sm-3">
        <ProductItem
          :imageObject="p3"
        />
      </div>
      <div class="col-sm-3">
        <ProductItem
          :imageObject="p4"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
    data() {
        return {
            p1 : {
                linkAnh : "https://static.beebom.com/wp-content/uploads/2025/09/Reze-with-a-flower.jpg?w=1024",
                tenAnh : "REZE - BOMB GIRL 1 "
            },
            p2 : {
                linkAnh : "https://gamelade.vn/wp-content/uploads/2025/01/953336513096.jpg",
                tenAnh : "REZE - BOMB GIRL 2"
            },
            p3 : {
                linkAnh : "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/04/chainsaw-man-reze-arc.jpg?w=1600&h=900&fit=crop",
                tenAnh : "REZE - BOMB GIRL 3"
            },
            p4 : {
                linkAnh : "https://i0.wp.com/levelup.buscafs.com/2025/07/Chainsaw-Man-The-Movie-Reze-Arc-trailer-Anime-Expo-2025.jpg?fit=1920,1080&quality=75&strip=all",
                tenAnh : "REZE - BOMB GIRL 4"
            }
        }
    },

  components: {
    ProductItem,
  },
};
</script>

<style></style>
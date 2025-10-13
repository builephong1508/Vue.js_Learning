<template>
    <!-- Cách thứ 1 -->
  <!-- <div class="card text-left">
        <img :src="imageUrl" alt="" class="card-img-top">
        <div class="card-body">
            <h4 class="card-title">{{ imageName }}</h4>
        </div>
    </div> -->

      <div class="card text-left" v-if="imageObject">
        <img :src="imageObject.linkAnh" alt="" class="card-img-top">
        <div class="card-body">
            <h4 class="card-title">{{ imageObject.tenAnh }}</h4>
        </div>
    </div>

</template>

<script>
export default {
    props : {
        // Cách thứ 1
        // imageUrl : {
        //     type : String
        // },
        // imageName : {
        //     type : String
        // },

        // linkAnh : {
        //     type : String
        // },

        // tenAnh : {
        //     type : String
        // },

        imageObject : {
            type : Object
        }
    }
}
</script>

<style>

</style>
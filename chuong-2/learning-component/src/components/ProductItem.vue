<template>
  <div class="card text-left" v-if="imageObject">
    <img :src="imageObject.linkAnh" alt="" class="card-img-top" />
    <div class="card-body">
      <h4 class="card-title">{{ imageObject.tenAnh }}</h4>
      <p class="card-subtitle">{{ defaultText }}</p>
      <p class="card-subtitle">{{ validatorText }}</p>
      <button class="btn btn-primary" @click="handleSelect(imageObject)">
        {{ user }}
      </button>
    </div>
  </div>
</template>

<script>
export default {

  inject : ["user"],

  methods : {
    handleSelect(imageObject) {
      // console.log(imageObject)
      this.$emit("custom-handle-select", imageObject)
    }
  },

  props: {
    imageObject: {
      type: Object,
    },

    requiredText: {
      type: [String, Number],
      // nếu để là false thì không báo lỗi khi không sử dụng
      // còn để là true thì sẽ ngược lại
      required: false,
    },

    defaultText: {
      type: [String, Text],
      default: "Jane Doe - Iris Out",
    },

    validatorText: {
      type: String,
      validator(value) {
        if (value.length > 3) return true;
        else return false;
      },
    },
  },
};
</script>

<style></style>

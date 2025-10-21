<template>
  <div class="modal" v-if="isOpen" @click="handleClose">
    <div class="modal__container" @click.stop>
      <div class="modal__header">
        <h1 class="modal__title">Giỏ hàng</h1>
        <div class="modal__close" @click="handleClose">
          <i class="fa fa-times"></i>
        </div>
      </div>
      <div class="modal__body">
        <slot></slot>
      </div>
      <div class="modal__footer">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props : {
    isOpen : {
      type : Boolean,
    },

    handleCloseModal : {
      type : Function
    }
  },

  methods : {
    handleClose() {
      this.handleCloseModal()
    }
  }
}
</script>

<style scoped>
/* Không cần CSS scoped cho layout đơn giản này */
</style>
<template>
    <nav class="navbar navbar-expand-lg bg-light shadow-sm fixed-top">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="#">
                <i class="bi bi-shop fs-3 text-success me-2"></i> MyShop
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <!-- Menu -->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button"
                            data-bs-toggle="dropdown">Dropdown</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link disabled">Disabled</a></li>
                </ul>

                <!-- Search bar -->
                <form class="d-flex me-3" role="search">
                    <input class="form-control me-2" type="search" placeholder="Tìm sản phẩm...">
                    <button class="btn btn-outline-success" type="submit"><i class="bi bi-search"></i></button>
                </form>

                <!-- Cart button -->
                <!-- <button class="btn btn-success">
                    <i class="bi bi-cart-fill"></i> Giỏ hàng
                </button> -->
                <button class="btn btn-success position-relative" @click="handleOpenCartListModal">
                    <i class="bi bi-cart-fill"></i> Giỏ hàng
                    <span
                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-flex align-items-center justify-content-center"
                        style="min-width: 1.4rem; height: 1.4rem; font-size: 0.8rem;">
                        0
                        <span class="visually-hidden">sản phẩm trong giỏ hàng</span>
                    </span>
                </button>

            </div>
        </div>
    </nav>

    <teleport to="#app">
        <AppModal :isOpen="isOpenCartListModal" :handleCloseModal="handleCloseCartListModal">
            <section>
                <CartList :cartList="cartList" @handleDeleteCartItem="handleDelete" />
            </section>
        </AppModal>
    </teleport>

</template>
<script>
import CartList from './CartList.vue';

export default {
    props: {
        cartList: {
            type: Array
        }
    },

    components: {
        CartList,
    },

    data() {
        return {
            isOpenCartListModal: false,
        }
    },

    methods: {
        handleOpenCartListModal() {
            this.isOpenCartListModal = true
        },

        handleCloseCartListModal() {
            this.isOpenCartListModal = false
        },

        handleDelete(item) {
            this.$emit("handleDeleteCartItem", item)
        }
    }
}
</script>
<style>
.navbar {
    top: 0;
    z-index: 1000;
    width: 100%;
}

.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    right: 0;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.4);
}

.modal__container {
    width: 1000px;
    margin: auto;
    /* margin-top: 100px; */
    background-color: white;
    border: 1px solid #888;
    padding: 10px;
}

.modal__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal__title {
    align-items: center;
}

.modal__close {
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    text-align: center;
    font-size: 30px;
}

.modal__close:hover {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
}
</style>
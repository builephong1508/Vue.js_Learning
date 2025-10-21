<template>
    <div class="card h-100">
        <img :src="require(`@/assets/${productItem.image}.jpg`)" class="card-img-top" alt="Sản phẩm 1">
        <div class="card-body text-center">
            <h5 class="card-title">{{ productItem.name }}</h5>
            <p class="text-danger fw-bold">{{ productItem.price.toLocaleString('vi-VN') }} VNĐ</p>
            <div class="d-flex justify-content-center gap-2">
                <button class="btn btn-primary btn-sm"><i class="bi bi-cart-plus"></i> Mua</button>
                <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-info-circle"></i> Chi
                    tiết</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props : {
        productItem : {
            type : Object,
        }
    }

}
</script>
<style></style>
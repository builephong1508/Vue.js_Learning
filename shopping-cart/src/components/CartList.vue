<template>
    <div class="table-responsive">
        <table class="table table-hover align-middle text-center">
            <thead class="table-light">
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>Số lượng kho</th>
                    <th>Số lượng mua</th>
                    <th>Thành tiền</th>
                    <th>Hành động</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in cartList" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price.toLocaleString('vi-VN') }} VNĐ</td>
                    <td>{{ item.quantityInStock }}</td>
                    <td>
                        <div class="input-group input-group-sm justify-content-center">
                            <button class="btn btn-outline-success quantity-btn" type="button">
                                <i class="bi bi-plus-lg"></i> </button>
                            <input type="text" class="form-control text-center" :value="item.amount"
                                style="max-width: 50px;" readonly>
                            <button class="btn btn-outline-warning quantity-btn" type="button">
                                <i class="bi bi-dash-lg"></i> </button>
                        </div>
                    </td>
                    <td>
                        <strong>{{ (item.price * item.amount).toLocaleString('vi-VN') }} VNĐ</strong>
                    </td>
                    <td>
                        <button class="btn btn-outline-danger btn-sm" @click="handleDelete(item)">
                            <i class="bi bi-trash-fill"></i> Xóa
                        </button>
                    </td>
                </tr>

                <tr class="table-secondary fw-bold">
                    <td></td>
                    <td colspan="3"></td>
                    <td class="text-danger">Tổng tiền:</td>
                    
                    <td class="text-danger">
                        {{ totalMoney.toLocaleString('vi-VN') }} VNĐ
                    </td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>

</template>



<script>
export default {
    props: {
        cartList: {
            type: Array
        }
    },

    computed: {
        totalMoney() {
            return this.cartList.reduce(
                (sum, item) => sum + item.price * item.amount, 0
            );
        },
    },

    methods: {
        handleDelete(item) {
            const confirmDelete = window.confirm(`Bạn có muốn xóa truyện '${item.name}' ra khỏi giỏ hàng ?`)
            
            if(confirmDelete) {
                this.$emit("handleDeleteCartItem", item)
            }
        },
    }

}
</script>

<style>
.quantity-btn {
    width: 30px;
}
</style>
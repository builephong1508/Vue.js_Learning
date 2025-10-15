<template lang="">
    <div class="container">
        <div>
            <button class="btn btn-success m-2" @click="handleClick('DangChieu')">Đang chiếu</button>
            <button class="btn btn-warning m-2" @click="handleClick('SapChieu')">Sắp chiếu</button>
            <button class="btn btn-secondary m-2" @click="handleClick('default')">Default</button>
        </div>

        <!-- <div v-if="flag === 'DangChieu'">
            <DangChieu/>
        </div>
        <div v-if="flag === 'SapChieu'">
            <SapChieu/>
        </div> -->
        <div v-if="flag === 'default'">
            <p>Chọn status phim mà bạn muốn xem</p>
        </div>

        <div> 
            <keep-alive>
                <component :is="flag"></component>
            </keep-alive>
        </div>

    </div>
</template>
<script>
import DangChieu from './DangChieu.vue';
import SapChieu from './SapChieu.vue';

export default {
    components: {
        DangChieu,
        SapChieu,
    },

    data() {
        return {
            flag : "default"
        }
    },

    methods : {
        handleClick(value) {
            this.flag = value
        }
    }
}
</script>
<style lang="">

</style>
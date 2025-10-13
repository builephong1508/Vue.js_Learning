<template>
    <h1>This is my first component</h1>
</template>

<script>
    export default {

    };
</script>

<style scoped>
/* scoped ở đây dùng để đánh dấu phạm vi của style
chỉ có tác dụng tại đây
Ví dụ nếu không có scoped, thẻ h1 bên trang
gọi FirstComponent cũng sẽ có định dạng như trên */

    h1 {
        background-color: red;
        color: yellow;
    }
</style>
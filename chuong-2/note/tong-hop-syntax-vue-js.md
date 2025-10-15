🧩 1. v-bind → viết tắt là :

Dùng để bind dữ liệu động vào attribute, prop, class, style...

<img v-bind:src="imageUrl">
<!-- Viết tắt -->
<img :src="imageUrl">


Hoặc bind nhiều props cùng lúc:

<Component v-bind="objectData" />

⚡ 2. v-on → viết tắt là @

Dùng để lắng nghe sự kiện (click, input, submit, ...)

<button v-on:click="handleClick">Click me</button>
<!-- Viết tắt -->
<button @click="handleClick">Click me</button>


Và có thể thêm modifiers:

<button @click.stop.prevent="handleClick">Click me</button>

🎯 3. v-slot → viết tắt là #

Dùng để định nghĩa slot (đặt nội dung vào component con)

<template v-slot:header>Header</template>
<!-- Viết tắt -->
<template #header>Header</template>

🔄 4. v-model → có thể rút gọn và tùy biến

Dùng để liên kết dữ liệu hai chiều (two-way binding)

<input v-model="username">


Hoặc khi custom:

<MyInput v-model:title="titleValue" />


→ sẽ bind đến prop title và emit update:title.

🧠 5. v-for + key

Không có viết tắt, nhưng là cặp “bất ly thân”:

<li v-for="(item, index) in list" :key="index">{{ item }}</li>

🔍 6. v-if, v-else-if, v-else, v-show

Cũng không có shorthand, nhưng rất hay đi cùng nhau:

<p v-if="isLogin">Xin chào</p>
<p v-else>Vui lòng đăng nhập</p>

🧩 7. v-html và v-text

Dùng để render trực tiếp HTML hoặc text:

<p v-text="plainText"></p>
<p v-html="htmlString"></p>

💡 8. v-pre, v-once, v-cloak

Một số directive đặc biệt:

Directive	|  Tác dụng
v-pre	    |  Bỏ qua compile nội dung bên trong (hiển thị nguyên template)
v-once	    |  Render 1 lần duy nhất, không reactive
v-cloak	    |  Ẩn nội dung cho đến khi Vue khởi tạo xong

✨ Tổng hợp nhanh:
Directive đầy đủ	|   Viết tắt	|   Ý nghĩa
v-bind:	            |      :	    | Ràng buộc dữ liệu
v-on:	            |      @        | Lắng nghe sự kiện
v-slot:	            |      #        | Đặt nội dung cho slot
v-model	            |  (không có)   | Liên kết 2 chiều
v-for	            |  (không có)	| Lặp
v-if / v-else-if    |               |
v-else / v-show	    |  (không có)   | Điều kiện hiển thị
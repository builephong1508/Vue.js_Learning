Trong Vue.js, <keep-alive> là một thành phần tích hợp sẵn (built-in component) dùng để giữ lại (cache) trạng thái của các component khi ta chuyển đổi qua lại giữa các component động.​

Cách hoạt động
Khi không có <keep-alive>, mỗi khi ta thay đổi component thông qua cú pháp động <component :is="activeComponent">, Vue sẽ hủy (unmount) component cũ và tạo mới (mount) lại component mới. Điều này khiến trạng thái cũ (data, input, scroll, v.v.) bị mất.​

Khi ta bọc <keep-alive> quanh <component>, Vue sẽ lưu trữ phiên bản component trong bộ nhớ đệm. Khi ta quay lại component đó, Vue chỉ kích hoạt lại (activate) thay vì tạo lại, nhờ vậy dữ liệu bên trong được giữ nguyên.
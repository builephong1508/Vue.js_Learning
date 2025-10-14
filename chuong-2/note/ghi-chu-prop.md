props chỉ có thể dùng được khi truyền từ thằng cha sang thằng con

ví dụ ProductList gọi ProductItem

thì thằng ProductItem là con của thằng ProductList

và ngược lại

props chỉ có thể truyền và đọc dữ liệu lên

không có thay đổi dữ liệu được (cập nhật, binding)


một số thuộc tính có trong props
= required : nếu để là false thì nếu không sử dụng vẫn không báo lỗi
ảnh minh họa img-001

- default : nếu không có giá trị gì thì default sẽ là giá trị ban đầu

- validator : ngăn chặn việc người dùng nhập sai thông tin


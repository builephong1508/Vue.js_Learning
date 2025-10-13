# 🧱 Ghi chú quan trọng trong `package.json` (Vue CLI 3)

## 1. Thông tin cơ bản
```json
"name": "learning-component",
"version": "0.1.0",
"private": true
```
- **name**: Tên project  
- **version**: Phiên bản hiện tại  
- **private: true**: Ngăn publish lên npm

---

## ⚙️ 2. Scripts — Các lệnh chạy dự án
```json
"scripts": {
  "serve": "vue-cli-service serve",
  "build": "vue-cli-service build",
  "lint": "vue-cli-service lint"
}
```
- `serve`: chạy project ở chế độ **dev** (localhost:8080)  
- `build`: **build ra bản production** (tạo thư mục `dist/`)  
- `lint`: **kiểm tra code chuẩn ESLint**

Chạy lệnh:
```bash
npm run serve
npm run build
npm run lint
```

---

## 📦 3. Dependencies (thư viện chạy thực tế)
```json
"dependencies": {
  "core-js": "^3.8.3",
  "vue": "^3.2.13"
}
```
- `vue`: framework chính (Vue.js 3)  
- `core-js`: **polyfill**, giúp chạy trên trình duyệt cũ

> ⚠️ Chỉ thư viện trong `dependencies` mới được bundle khi build.

---

## 🧰 4. DevDependencies (thư viện cho dev)
```json
"devDependencies": {
  "@babel/core": "^7.12.16",
  "@babel/eslint-parser": "^7.12.16",
  "@vue/cli-plugin-babel": "~5.0.0",
  "@vue/cli-plugin-eslint": "~5.0.0",
  "@vue/cli-service": "~5.0.0",
  "eslint": "^7.32.0",
  "eslint-plugin-vue": "^8.0.3"
}
```
- `@vue/cli-service`: lõi CLI của Vue, build và run app  
- `@vue/cli-plugin-babel`: biên dịch code hiện đại sang ES5  
- `@vue/cli-plugin-eslint`: cấu hình lint cho Vue  
- `eslint` + `eslint-plugin-vue`: kiểm tra lỗi code  
- `@babel/*`: giúp Babel hiểu cú pháp JS mới

> ⚙️ Nếu build/lint lỗi, thường là do các package này.

---

## 🧩 5. Cấu hình ESLint
```json
"eslintConfig": {
  "root": true,
  "env": { "node": true },
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  "parserOptions": { "parser": "@babel/eslint-parser" },
  "rules": {}
}
```
- **extends**: kết hợp quy tắc lint của Vue 3 + JS chuẩn  
- **rules**: nơi tùy chỉnh bật/tắt quy tắc (vd: `"no-console": "off"`)  
- **parserOptions**: giúp ESLint hiểu cú pháp Babel

---

## 🌍 6. Browserslist
```json
"browserslist": [
  "> 1%",
  "last 2 versions",
  "not dead",
  "not ie 11"
]
```
- Xác định trình duyệt cần hỗ trợ khi build.  
- Giúp Babel/Autoprefixer tối ưu code CSS & JS.  
- Không hỗ trợ IE11.

---

## 🧠 Tổng kết nhanh

| Mục | Vai trò chính |
|-----|----------------|
| `scripts` | Chạy / build / lint project |
| `dependencies` | Thư viện dùng khi app chạy thực tế |
| `devDependencies` | Thư viện chỉ dùng khi dev |
| `eslintConfig` | Quy tắc kiểm tra code |
| `browserslist` | Xác định trình duyệt hỗ trợ |
| `vue-cli-service` | Command line chính điều khiển dự án Vue CLI |

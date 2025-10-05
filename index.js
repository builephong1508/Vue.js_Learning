Vue.createApp({
  data() {
    return {
      hoTen: "Bùi Lê Phong",
      queQuan: "Thái Bình",
    };
  },
}).mount("#interpolation");

Vue.createApp({
  data() {
    return {
      linkImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-ZDnYw3P2ETJZKO61CVM93Y66biCFpM7ow&s",
      moreDetail: "https://chainsaw-man.fandom.com/wiki/Reze",
    };
  },
}).mount("#binding");

Vue.createApp({
  data() {
    return {
      result: "Bấm để chơi nha bro",
    };
  },

  methods: {
    getRandomNumber() {
      return Math.floor(Math.random() * (18 - 3 + 1)) + 3;
    },

    renderChanLe() {
      const luckyNumber = this.getRandomNumber();
      this.result = luckyNumber % 2 === 0 ? "Chẵn nha bro" : "Lẻ nha bro";
    },
  },
}).mount("#methods");

Vue.createApp({
  data(){
    return {
      htmlString : `<h1>Text here</h1>`
    };
  }
}).mount("#raw-html")

Vue.createApp({
  data(){
    return{
      text : ""
    };
  },

  methods : {
    clickButton(){
      this.text = "Hello World"
    }
  }
}).mount("#event-handling")

Vue.createApp({
  data(){
    return{
      number : 0
    };
  },
  methods : {
    increase(){
      this.number++
    },

    decrease(){
      this.number--
    },

    handleSubmit(event){
      alert("Submit nội dung thành công")
    },

    handleClick(event){
      console.log(event.target.innerHTML)
    },

    handleLogin(){
      alert("Đăng nhập thành công khi enter")
    }
  }
}).mount("#counting")

Vue.createApp({
  data(){
    return{
      message : ""
    }
  },
}).mount("#two-way-binding")

Vue.createApp({
  data(){
    return{
      lastname : "Doe",
      firstname : "Jane"
    }
  },
  methods : {
    getFullname(){
      return this.firstname + " " + this.lastname
    }
    // tuy nhiên không nên sử dụng ở đây, vì làm giảm hiệu năng
    // bởi vì các phương thức trong methods khi gọi 1 cái, nó sẽ chạy lại các hàm khác dù cho giá trị không đổi
    // Thay vào đó, sử dụng thuộc tính computed. Nó sẽ không chạy lại các hàm trừ khi giá trị trong đó thay đổi

    // xử lý sự kiện thì là methods
    // tính toán dữ liệu thì dùng computed
    // để được tối ưu
  },
  computed : {
    getFullnameBetter(){
      return this.firstname + " " + this.lastname
    },
  }
}).mount("#computed-properties-and-watchers")
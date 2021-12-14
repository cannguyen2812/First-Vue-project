// var vueInstance = new Vue({
//     el: "#app",
//     data: {
//         tittle: "Điện Thoại Samsung"
//     },
//     methods: {
//         say: function(text){
//             return 'Hello' + text;
//         }
//     }
// });
// console.log(vueInstance);


// var obj = {
//     foo: 'bar'
//   }
  
// //   Object.freeze(obj)
  
//   new Vue({
//     el: '#vd2',
//     data: obj
//   })

// Ví dụ 3: 
var app = new Vue({
  el: "#app",
  data: {
    counter: 0,
    clientX: 0,
    clientY: 0,
  },
  methods:{
    bamnut(e,number){
      console.log("đã click",e);         //e = event
      this.counter +=number;
    },
    handleMouseMove(e) {
      console.log("đã di chuột",e);
      this.clientX = e.clientX;
      this.clientY = e.clientY;
    },
  }
})
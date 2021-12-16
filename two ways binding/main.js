var app = new Vue ({
    el: "#app",
    data: {
        firstName:'',
        isActive: false,
        isError: true,
        color: 'gray',
        size: '20',
        font: 'Segoe Ui',

        bg:"https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg"
    
    },
    methods: {
        changeActive() {
            this.isActive = !this.isActive;
        },
        changeError(){
            this.isError = !this.isError;
        },
    },
    computed:{
        objClass: function(){
            return {
                active: this.isActive,
                error: this.isError
            }
        },
        //  background (){
        //      return 'url('+ this.bg + ')';
        // },
        objStyle (){
            return{
                backgroundImage: 'url(' + this.bg + ')',
            }
        }
    }
})
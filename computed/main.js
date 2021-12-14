var app = new Vue ({
    el : '#app',
    data: {
        message: 'Hello world',
    },
    methods: {

    },
    computed: {
        reversedMessage: function () {
            return this.message.split(' ').reverse().join(' ')
        }
    },
})
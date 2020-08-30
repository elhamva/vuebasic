
var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'vue app one'
    },
    computed: {
        greet: function() {
            return 'Hello from app one :)'
        }
    }

});
var Two = new Vue({
    el: '#vue-app-Two',
    data: {
        title: 'vue app Two'
    },
    methods: {
        change: function() {
            one.title = "Title changed "
        }
    },
    computed: {
        greet: function() {
            return 'Hello from app Two :)'
        }
    }
});
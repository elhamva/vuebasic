Vue.component('greeting', {
    template: '<p> Hey I am {{name }}: ).<button v-on:click="changeName()">Change Name</button>< /p>',
    data: function() {
        return {
            name: 'ELham'
        }
    },
    methods: {
        changeName: function() {
            this.name = 'Armin'
        }
    }
});

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
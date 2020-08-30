new Vue({
    el: '#vue-app',
    data: {
        a: 0,
        b: 0,
        age: 20
    },
    computed: {
        addtoA: function() {
            return this.age + this.a
        },
        addtoB: function() {
            return this.age + this.b
        }
    },

});
var one = new Vue({
    el: '#vue-app-one',
    data: {
        output: 'your favorite food'
    },
    methods: {
        readRefs: function() {
            this.output = this.$refs.input.value
        }
    },

});
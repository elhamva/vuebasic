new Vue({
    el: '#vue-app',
    data: {
        age: 25,

    },
    methods: {

        add: function(inc) {
            this.age += inc;
        },

        subtract: function() {
            this.age--;
        },
        click: function() {
            alert("you click the link")
        }

    }

});
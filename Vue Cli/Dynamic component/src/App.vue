<template>
    <div>
        <keep-alive>
            <component v-bind:is="component"></component>
        </keep-alive>
        <button v-on:click="component = 'first'">Show form one</button>
        <button v-on:click="component = 'second'">Show form two</button>
    </div>
</template>

<script>
// Imports
import first from './component/first';
import second from './component/second';
export default {
    components: {
        first,
        second

    },
    data () {
        return {
            component: 'form-one'
        }
    },
    methods: {
        handleSubmit: function(){
            alert('thanks for submitting');
        }
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
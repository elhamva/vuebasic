<template>
    <div>
        <app-heade></app-heade>
        <router-view></router-view>
        <app-Footer></app-Footer>
    </div>
</template>

<script>


import heade from './component/heade'
import Footer from './component/Footer';
export default {
    components: {
        'app-heade': heade,
        'app-Footer': Footer
    },
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
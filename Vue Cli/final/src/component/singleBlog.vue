<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.body }}</article>
        </div>

</template>

<script>

import searchMixins from '../Mixins/searchMixins';
export default {
    data () {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
           
            this.blog = data.body;
        });
    },
     mixins: [searchMixins]
}
</script>

<style>
#single-blog{
    margin: 70px auto;
    max-width: 960px;
   
}
</style>
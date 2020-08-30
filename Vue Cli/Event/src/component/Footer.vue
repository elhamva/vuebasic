<template>
    <footer>
        <p>Copyright 2017 {{ titles }}</p>
    </footer>
</template>
<script>
export default {
    props: {
      titles: {
        type: String,
        required: true
      }
    },
    data(){
        return{
        }
    }
}
</script>
<style scoped>
footer{
    background: gray;
    padding: 6px;
}
p{
        color:black;
        text-align: center;
}
</style>

  
<template>
    <div id="ninjas">
        <ul>
            <li v-for="item in items" v-on:click="item.show = !item.show" :key="item">
                <h2>{{ item.name }}</h2>
                <h3 v-show="item.show">{{item.speciality }}</h3>
            </li>
        </ul>
        <button v-on:click="deleteitem">Delete Item</button>
    </div>
</template>
<script>
export default {
    props:['items'],
    data(){
        return{
         
        }
    },
    methods:{
        deleteitem:function(){
            this.items.pop();
        }
    }
}
</script>
<style scoped>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
<template>
    <div class="shop show" id="shop">
        <Shopitem v-for="(item, index) in products" :key="index" :image="item.image" :name="item.name" :desc="item.desc" :index="index" @moneyChange="moneyChange" @textBoxControler="textBoxControler" />
        </div>
</template>

<script>
import Shopitem from "./shopItem.vue";

export default {
   name: "shop",
   components: {
       Shopitem
   }, 
   data(){
       return{
           products: []
       }
   },
   mounted(){
       this.products = this.$store.state.shopitems;
   },
   methods: {
       moneyChange(data){
           this.$emit("moneyChange", data)
       },
       textBoxControler(data){
           this.$emit("textBoxControler", data)
       }
   }
}
</script>
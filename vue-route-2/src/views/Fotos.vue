<template lang="html">
  <div class="">
   <h1>Galeria de Fotos</h1>
   <!-- name: 'fotos' es el nombre de la ruta en el router -->
   <router-link :to="{ name: 'fotos', params: {id:item} }" v-for="(item,index) of fotosArreglo">
   <button>Foto {{item}}</button>
   </router-link>
   <Fotografia/>
   <button @click="home">Home</button>
   <button @click="anterior">Anterior</button>
   <button @click="siguiente">Siguiente</button>
  </div>
</template>

<script>

import  Fotografia  from '@/components/Fotografia.vue';
export default {
 components:{
  Fotografia
 },
 data(){
  return{
   fotosArreglo: [1,2,3]
  }
 },
 methods:{
  home(){
   this.$router.push('/')
  },
  anterior(){
   this.$router.go(-1)
  },
  siguiente(){
   this.$router.go(1)
  }
 }
 
}
</script>

<style lang="css" scoped>
</style>


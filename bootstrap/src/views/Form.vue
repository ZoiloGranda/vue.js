<template lang="html">
  <div class="mt-5">
   <h1>Formularios</h1>
   <form>
    <b-row>
     <b-col md="3">
      <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
      <small>Minimo 3 caracteres</small>
      <p>texto: {{texto}}</p>
     </b-col>
    <b-col md="3">
     <b-form-select v-model="select" :options="animales"></b-form-select>
     <p>Seleccionado: {{select}}</p>
    </b-col>
    <b-col md="3">
     <b-form-radio-group v-model="radio" :options="animalesRadio"></b-form-radio-group>
     <p>Seleccionado: {{radio}}</p>
    </b-col>
    <b-col md="3">
     <b-form-checkbox-group v-model="check" :options="animalesRadio"></b-form-checkbox-group>
     <p>Seleccionado: {{check}}</p>
    </b-col>
    </b-row>
   </form>
  </div>
</template>

<script>
export default {
 name: 'Form',
 data(){
  return {
   texto:'',
   check:[],
   select:null,
   animales:[
    {value:null, text:'Seleccione un animal'},
    {value:'perro', text:'perro perro'},
    {value:'gato', text:'gato gato'},
    {value:'pato', text:'pato pato'}
   ],
   radio:null,
   animalesRadio:[
    {value:'perro', text:'perro perro'},
    {value:'gato', text:'gato gato'},
    {value:'pato', text:'pato pato'}
   ]
  }
 },
 computed:{
  comprobar(){
   return this.texto.length > 2 ? true :false
  }
 }
}
</script>

<style lang="css" scoped>
</style>

<template lang="html">
 <v-container grid-list-xl>
  <v-row>
   <v-col md-6>
    <v-card class="mb-3" v-for="(item, index) in listaTareas" :key="index">
     <v-card-text>
      <v-chip class="ma-2 ml-0" color="pink" label text-color="white">
       <v-icon left>mdi-label</v-icon>
       {{item.titulo}}
      </v-chip>
      <p>{{item.descripcion}}</p>
      <v-btn color="warning" class="ml-0" @click="editar(index)">Editar</v-btn>
      <v-btn color="error" @click="eliminarTarea(item.id)">Eliminar</v-btn>
     </v-card-text>
    </v-card>
   </v-col>
   
   <v-col md-6 v-if="formAgregar">
    <v-card class="mb-3 pa-3">
     <v-form @submit.prevent="agregarTarea()">
      <v-text-field label="Titulo de la Tarea" v-model="titulo"></v-text-field>
      <v-textarea label="Descripcion de la Tarea" v-model="descripcion"></v-textarea>
      <v-btn block color="success" type="submit">Agregar Tarea</v-btn>
     </v-form>
    </v-card>
   </v-col>
   
   <v-col md-6 v-if="!formAgregar">
    <v-card class="mb-3 pa-3">
     <v-form @submit.prevent="editarTarea()">
      <v-text-field label="Titulo de la Tarea" v-model="titulo"></v-text-field>
      <v-textarea label="Descripcion de la Tarea" v-model="descripcion"></v-textarea>
      <v-btn block color="warning" type="submit">Editar Tarea</v-btn>
     </v-form>
    </v-card>
   </v-col>
  </v-row>
  
  <v-snackbar
      v-model="snackbar">
      {{ mensaje }}
      <v-btn dark text @click="snackbar = false">
        Cerrar
      </v-btn>
    </v-snackbar>
 </v-container>
</template>

<script>
export default {
 data(){
  return{
   listaTareas:[
    {id:1,titulo:'Titulo 1', descripcion:'asdasd asdasdsadqwd qw dsadqd'},
    {id:2,titulo:'Titulo 2', descripcion:'asdsaldñas 90as8d90 sdsadqwd qw dsadqd'}
   ],
   titulo:'',
   descripcion:'',
   snackbar:false,
   mensaje:'',
   formAgregar:true,
   indexTarea:''
   
  }
 },
 methods:{
  agregarTarea(){
   if (this.titulo===''||this.descripcion==='') {
    this.mensaje='Llena todos los campos'
    this.snackbar=true
   }else {
    this.listaTareas.push({
     id: Date.now(),
     titulo:this.titulo,
     descripcion:this.descripcion
    })
    this.titulo= ''
    this.descripcion=''
    this.mensaje='Tarea agregada'
    this.snackbar=true
   }
  },
  eliminarTarea(id){
   this.listaTareas=this.listaTareas.filter(elem=>elem.id!=id)
  },
  editar(index){
   this.formAgregar = false
   this.titulo = this.listaTareas[index].titulo
   this.descripcion = this.listaTareas[index].descripcion
   this.indexTarea= index
  },
  editarTarea(){
   this.listaTareas[this.indexTarea].titulo = this.titulo
   this.listaTareas[this.indexTarea].descripcion = this.descripcion
   this.formAgregar = true
   this.titulo=''
   this.descripcion=''
   this.mensaje='Tarea editada'
  }
 }
 
}
</script>

<style lang="css" scoped>
</style>
